import { mbams_qry } from "../models/index.js";
import { t_pjbPengesahan_qry } from "../models/index.js";

export const getAllBams = async (req, res) => {
    try {
        const datauser = await mbams_qry.findAll({
            order: [
                ['id', 'ASC'],
                ['id_j', 'ASC'],
            ],
        });
        res.json(datauser);

    } catch (e) { res.json({ info: e.message }) }
};

export const getBamsById = async (req, res) => {
    try {
        const datauser = await mbams_qry.findAll(
            { where: { id: req.params.id } });
        res.json(datauser[0]);
    } catch (error) { res.json({ info: error.message }) }
};

export const createBams = async (req, res) => {
    try {
        await mbams_qry.create(req.body);
        res.json({ info: "Pengguna Baru Berhasil di tambah ... " });
    } catch (error) { res.json({ "info": error.message }) }
};

export const updateBams = async (req, res) => {
    try {
        if (req.body.id_j === 3 || req.body.id_j === '3' || req.body.id_j === 1 || req.body.id_j === '1') {
            await t_pjbPengesahan_qry.update({
                sts: 0
            },
                {
                    where: { kd_kampung: req.body.kd_kampung }
                })
            await t_pjbPengesahan_qry.create(req.body);
        }

        await mbams_qry.update({ nama: req.body.nama, no_sk: req.body.no_sk, tgl_sk: req.body.tgl_sk }, {
            where: { id: req.body.id }
        });
        res.json({ info: "Data Berhasil di Ubah" });
    } catch (e) {
        res.json({ info: e.message })
    }
};

export const deleteBams = async (req, res) => {
    try {
        const datauser = await mbams_qry.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            info: "Data Berhasil di Hapus"
        });
    } catch (error) {
        res.json({ info: error.message })
    }
};