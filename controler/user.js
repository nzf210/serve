import bcrypt from "bcrypt";
import { user_qry, v_user_qry } from "../models/index.js";
import jwt from "jsonwebtoken";
import express from "express";
let app = express();

export const getAllUser = async (req, res) => {
    try {
        const datauser = await v_user_qry.findAll({
            attributes: ['id', 'nama', 'username', 'password', 'nohp', 'email', 'lvl_user', 'lvl_instansi', 'kampung', 'distrik', 'kd_lvl1', 'kd_lvl2', 'kd_kampung', 'kd_distrik'],
            order: [['distrik', 'ASC'], ['kampung', 'ASC'], ['nama', 'ASC']]
            // ,            include: [{ model: mkamdis_qry, attributes: ['kampung', 'distrik'] }, { model: mlvluser_qry, attributes: ['level'] }]
        });
        res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};

export const getUserId = async (req, res) => {
    try {
        const datauser = await v_user_qry.findAll({
            attributes: ['id', 'nama', 'username', 'password', 'nohp', 'email', 'lvl_user', 'lvl_instansi', 'kampung', 'distrik', 'kd_lvl1', 'kd_lvl2', 'kd_kampung', 'kd_distrik'],
            order: [['distrik', 'ASC'], ['kampung', 'ASC'], ['nama', 'ASC']],
            where: { kd_kampung: req.body.kd_kampung }
        });
        console.log('kd kp', req.body)
        res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};

export const getUserById = async (req, res) => {
    try {
        const datauser = await v_user_qry.findAll(
            { where: { id: req.params.id } });
        if (datauser.length === 0) {
            res.json({ info: 'Data tidak di temukan' })
        } else { res.json(datauser[0]); }
    } catch (error) { res.json({ info: error.message }) }
};

export const createUser = async (req, res) => {
    try {
        await user_qry.create(req.body);
        if (req.body.kd_lvl1 === '') {
            res.json({ info: "Level Instansi Belum di pilih" });
            return;
        }
        if (req.body.kd_lvl2 === '') {
            res.json({ "info": "Level Pengguna Belum di pilih" });
            return;
        }
        res.json({ info: "Pengguna Baru Berhasil di tambah ... " });
    } catch (error) { res.json({ info: error.message }) }
};

export const updateUser = async (req, res) => {
    const salt = await bcrypt.genSalt();
    const hasspassword = await bcrypt.hash(req.body.password, salt);
    try {
        await user_qry.update({ password: hasspassword, nama: req.body.nama, username: req.body.username, nohp: req.body.nohp, email: req.body.email },
            {
                where: { id: req.params.id }
            });
        res.json({ info: "User Berhasil di Ubah" });
    } catch (e) {
        res.json({ info: e.message })
    }
};

export const deleteUser = async (req, res) => {
    try {
        const datauser = await user_qry.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            info: "User Berhasil di Hapus"
        });
    } catch (error) {
        res.json({ info: error.message })
    }
};

export const Register = async (req, res) => {
    const { nama, username, email, password, ulangpassword, nohp, kd_lvl1, kd_lvl2, kd_kampung, kd_distrik } = req.body;

    if (password !== ulangpassword) { res.status(401).json({ info: "Password dan Ulang Pasword tidak sama" }); return; }
    const salt = await bcrypt.genSalt();
    const hasspassword = await bcrypt.hash(password, salt);

    try {
        const user_ = await user_qry.findAll({
            where: { username: username }
        });
        if (user_.length !== 0) { res.status(402).json({ info: "Username sudah ada yang gunakan" }); return; }
    } catch (e) { console.log(e) }

    try {
        await user_qry.create({
            nama: nama, email: email, username: username, password: hasspassword, nohp: nohp,
            kd_lvl1: kd_lvl1, kd_lvl2: kd_lvl2, kd_distrik: kd_distrik, kd_kampung: kd_kampung
        });
        res.json({ info: "Pengguna Baru Berhasil di Tambahkan" })
    } catch (e) { console.log(e); }
}


export const Login = async (req, res) => {
    try {
        const user = await user_qry.findAll({
            where: { username: req.body.username }
        });

        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(403).json({ info: "Password Salah" });
        const id = user[0].id;
        const nama = user[0].nama;
        const username = user[0].username;
        const email = user[0].email;
        const nohp = user[0].nohp;
        const kd_lvl1 = user[0].kd_lvl1;
        const kd_lvl2 = user[0].kd_lvl2;
        const kd_kampung = user[0].kd_kampung;
        const kd_distrik = user[0].kd_distrik;

        // const accestoken = jwt.sign({ id, nama, username, email, nohp, kd_lvl1, kd_lvl2, kd_distrik, kd_kampung }, process.env.ACCES_TOKEN, { expiresIn: '1d' });
        const accestoken = jwt.sign({ id, nama, username, email, nohp, kd_lvl1, kd_lvl2, kd_distrik, kd_kampung }, process.env.ACCES_TOKEN, { expiresIn: '25s' });
        const refreshtoken = jwt.sign({ id, nama, username, email, nohp, kd_lvl1, kd_lvl2, kd_distrik, kd_kampung }, process.env.REFRESH_TOKEN, { expiresIn: '1d' });

        await user_qry.update({ refresh_token: refreshtoken }, { where: { id: id } });
        res.cookie('refreshtoken', refreshtoken, { maxAge: 24 * 60 * 60 * 100 });
        // res.cookie('refreshtoken', refreshtoken, { maxAge: 24 * 60 * 60 * 100, httpOnly: true });
        //res.cookie('refreshtoken', refreshtoken, { maxAge: 24 * 60 * 60 * 100, httpOnly: true, secure: true, domain: 'appin.id', sameSite: 'none' });
        res.json({ accestoken });
    } catch (e) {
        res.status(403).json({ info: "Username tidak terdaftar !!!" })
    }
}

export const Logout = async (req, res) => {
    const refreshtoken = req.cookies.refreshtoken;
    console.log(refreshtoken);
    if (!refreshtoken) return res.sendStatus(401);

    const user = await user_qry.findAll({
        where: { refresh_token: refreshtoken }
    });

    if (!user[0]) return res.sendStatus(204);

    const userId = user[0].id;

    await user_qry.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    })
    res.clearCookie('refreshtoken');
    return res.sendStatus(200);
}