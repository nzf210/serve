import { v_anggaran_qry, t_anggaran_qry } from "../models/index.js";


export const getAllAggaran = async (req, res) => {
    try {
        const datauser = await v_anggaran_qry.findAll();
        res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};

export const getAnggaranById = async (req, res) => {
    try {
        const datauser = await v_anggaran_qry.findAll(
            { where: { id: req.params.id } });
        res.json(datauser[0]);
    } catch (error) { res.json({ info: error.message }) }
};

export const updateAnggaran = async (req, res) => {
    try {

        await t_anggaran_qry.update(
            {
                // id: req.body.id,
                kd_keg: req.body.kd_keg,
                pagu: req.body.pagu,
                kd_kampung: req.body.kd_kampung,
                sts: req.body.sts,
                id_thp: req.body.id_thp,
                tgl: req.body.tgl,
                sts_spd: req.body.sts_spd,
                no_spd: req.body.no_spd,
                tgl_spd: req.body.tgl_spd,
                sts_spp: req.body.sts_spp,
                no_spp: req.body.no_spp,
                tgl_spp: req.body.tgl_spp,
                sts_spm: req.body.sts_spm,
                no_spm: req.body.no_spm,
                tgl_spm: req.body.tgl_spm,
                sts_sp2d: req.body.sts_sp2d,
                no_sp2d: req.body.no_sp2d,
                tgl_sp2d: req.body.tgl_sp2d
            },
            {
                where: { id: req.body.id }
            });

        res.json({ info: "Data Berhasil diubah" });
    } catch (e) {
        res.json({ info: e.message })
    }
};

export const deleteAnggaran = async (req, res) => {
    try {
        await t_anggaran_qry.destroy({
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

export const createAnggaran = async (req, res) => {
    try {
        await t_anggaran_qry.create(req.body);
        res.json({ info: "Data Anggaran Berhasil ditambahkan ... " });
    } catch (error) { res.json({ info: error.message }) }
};