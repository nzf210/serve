import { v_pjbPengesahan_qry, t_pjbPengesahan_qry } from "../models/index.js";
import mbams_qry from "../models/model.mBams.js"

export const getAllPjbtPengesahan = async (req, res) => {
    try {
        const datauser = await v_pjbPengesahan_qry.findAll();
        res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};

export const getPjbtPengesahanById = async (req, res) => {
    try {
        const datauser = await v_pjbPengesahan_qry.findAll(
            { where: { id: req.params.id } });
        res.json(datauser[0]);
    } catch (error) { res.json({ info: error.message }) }
};

export const updatePjbtPengesahan = async (req, res) => {
    try {
        await t_pjbPengesahan_qry.update({
            sts: 0
        },
            {
                where: { kd_kampung: req.body.kd_kampung, kd_jbtn: req.body.kd_jbtn }
            })

        await mbams_qry.update({
            nama: req.body.nama,
            no_sk: req.body.no_sk,
            tgl_sk: req.body.tgl_sk
        },
            {
                where: { id_kam: req.body.kd_kampung, id_j: req.body.kd_jbtn }
            })

        await t_pjbPengesahan_qry.update(
            {
                nama: req.body.nama,
                no_sk: req.body.no_sk,
                tgl_sk: req.body.tgl_sk,
                sts: req.body.sts
            },
            {
                where: { id: req.body.id }
            });
        res.json({ info: "User Berhasil diubah" });
    } catch (e) {
        res.json({ info: e.message })
    }
};

export const deletePjbtPengesahan = async (req, res) => {
    try {
        console.log('req del', req.body)
        await mbams_qry.update({
            nama: '',
            no_sk: '',
            tgl_sk: '1900-01-01'
        },
            {
                where: { id_kam: req.body.kd_kampung, id_j: req.body.kd_jbtn }
            })

        const datauser = await t_pjbPengesahan_qry.destroy({
            where: {
                id: req.body.id
            }
        });
        res.json({
            info: "Data Berhasil di Hapus"
        });
    } catch (error) {
        res.json({ info: error.message })
    }
};

export const createPjbtPengesahan = async (req, res) => {
    try {
        await t_pjbPengesahan_qry.update({
            sts: 0
        },
            {
                where: { kd_kampung: req.body.kd_kampung, kd_jbtn: req.body.kd_jbtn }
            })

        await mbams_qry.update({
            nama: req.body.nama,
            no_sk: req.body.no_sk,
            tgl_sk: req.body.tgl_sk
        },
            {
                where: { id_kam: req.body.kd_kampung, id_j: req.body.kd_jbtn }
            })

        await t_pjbPengesahan_qry.create(req.body);
        res.json({ info: "Pejabat Pengesahan Berhasil ditambahkan ... " });
    } catch (error) { res.json({ info: error.message }) }
};