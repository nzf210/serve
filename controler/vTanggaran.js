import { Op } from "sequelize";
import pagination from './paginate.js'
import { v_anggaran_qry, t_anggaran_qry, v_anggaranB_qry, v_anggaran_reg_qry, v_anggaran_cov_qry, v_anggaran_blt_qry } from "../models/index.js";


export const getAllAggaran = async (req, res) => {

    const { distrik, kampung, kd_kampung, page, size, tgl_spp, tgl_spm, tgl_sp2d, kd_advis, id_kampung, sts, sts_spp, sts_spm, sts_sp2d
    } = req.query;
    console.log('query', page, 'size', size)
    const where = {}
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 20000;

    try {
        if (distrik) where.distrik = { [Op.like]: `%${distrik}%` }
        if (id_kampung) where.id_kampung = { [Op.like]: `%${id_kampung}%` }
        if (kampung) where.kampung = { [Op.like]: `%${kampung}%` }
        if (tgl_spp) where.tgl_spp = { [Op.eq]: `%${tgl_spp}%` }
        if (tgl_spm) where.tgl_spm = { [Op.eq]: `%${tgl_spm}%` }
        if (tgl_sp2d) where.tgl_sp2d = { [Op.eq]: `%${tgl_sp2d}%` }
        if (kd_advis) where.kd_advis = { [Op.like]: `%${kd_advis}%` }
        if (sts) where.sts = { [Op.eq]: `${sts}` }
        if (sts_spp) where.sts_spp = { [Op.eq]: `${sts_spp}` }
        if (sts_spm) where.sts_spm = { [Op.eq]: `${sts_spm}` }
        if (sts_sp2d) where.sts_sp2d = { [Op.eq]: `${sts_sp2d}` }

        const data = await v_anggaran_qry.findAndCountAll({
            where,
            offset: (pag - 1) * pag,
            limit: per_pag,
            //distinct: 'true' // untuk menghapus data double
            order: [['distrik', 'ASC'], ['kampung', 'ASC']]
        });
        //console.log('pagi', count, "rows", rows)

        const result = pagination({ data: data.rows, count: data.count, page: pag, per_page: per_pag });
        if (data.count <= 0) {
            res.status(404).send({
                info: 'data tidak ditemukan'
            })
        }
        res.status(200).send({
            status: 'berhasil',
            result
        });
    } catch (e) { res.json({ info: e.message }) }
};
export const getAllAggaranReg = async (req, res) => {

    const { distrik, kampung, kd_kampung, page, size, tgl_spp, tgl_spm, tgl_sp2d, kd_advis, id_kampung, sts, sts_spp, sts_spm, sts_sp2d
    } = req.query;
    console.log('query', page, 'size', size)
    const where = {}
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 20000;

    try {
        if (distrik) where.distrik = { [Op.like]: `%${distrik}%` }
        if (id_kampung) where.id_kampung = { [Op.like]: `%${id_kampung}%` }
        if (kampung) where.kampung = { [Op.like]: `%${kampung}%` }
        if (tgl_spp) where.tgl_spp = { [Op.eq]: `%${tgl_spp}%` }
        if (tgl_spm) where.tgl_spm = { [Op.eq]: `%${tgl_spm}%` }
        if (tgl_sp2d) where.tgl_sp2d = { [Op.eq]: `%${tgl_sp2d}%` }
        if (kd_advis) where.kd_advis = { [Op.like]: `%${kd_advis}%` }
        if (sts) where.sts = { [Op.eq]: `${sts}` }
        if (sts_spp) where.sts_spp = { [Op.eq]: `${sts_spp}` }
        if (sts_spm) where.sts_spm = { [Op.eq]: `${sts_spm}` }
        if (sts_sp2d) where.sts_sp2d = { [Op.eq]: `${sts_sp2d}` }

        const data = await v_anggaran_reg_qry.findAndCountAll({
            where,
            offset: (pag - 1) * pag,
            limit: per_pag,
            //distinct: 'true' // untuk menghapus data double
            order: [['distrik', 'ASC'], ['kampung', 'ASC']]
        });
        //console.log('pagi', count, "rows", rows)

        const result = pagination({ data: data.rows, count: data.count, page: pag, per_page: per_pag });
        if (data.count <= 0) {
            res.status(404).send({
                info: 'data tidak ditemukan'
            })
        }
        res.status(200).send({
            status: 'berhasil',
            result
        });
    } catch (e) { res.json({ info: e.message }) }
};
export const getAllAggaranCov = async (req, res) => {

    const { distrik, kampung, kd_kampung, page, size, tgl_spp, tgl_spm, tgl_sp2d, kd_advis, id_kampung, sts, sts_spp, sts_spm, sts_sp2d
    } = req.query;
    console.log('query', page, 'size', size)
    const where = {}
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 20000;

    try {
        if (distrik) where.distrik = { [Op.like]: `%${distrik}%` }
        if (id_kampung) where.id_kampung = { [Op.like]: `%${id_kampung}%` }
        if (kampung) where.kampung = { [Op.like]: `%${kampung}%` }
        if (tgl_spp) where.tgl_spp = { [Op.eq]: `%${tgl_spp}%` }
        if (tgl_spm) where.tgl_spm = { [Op.eq]: `%${tgl_spm}%` }
        if (tgl_sp2d) where.tgl_sp2d = { [Op.eq]: `%${tgl_sp2d}%` }
        if (kd_advis) where.kd_advis = { [Op.like]: `%${kd_advis}%` }
        if (sts) where.sts = { [Op.eq]: `${sts}` }
        if (sts_spp) where.sts_spp = { [Op.eq]: `${sts_spp}` }
        if (sts_spm) where.sts_spm = { [Op.eq]: `${sts_spm}` }
        if (sts_sp2d) where.sts_sp2d = { [Op.eq]: `${sts_sp2d}` }

        const data = await v_anggaran_cov_qry.findAndCountAll({
            where,
            offset: (pag - 1) * pag,
            limit: per_pag,
            //distinct: 'true' // untuk menghapus data double
            order: [['distrik', 'ASC'], ['kampung', 'ASC']]
        });
        //console.log('pagi', count, "rows", rows)

        const result = pagination({ data: data.rows, count: data.count, page: pag, per_page: per_pag });
        if (data.count <= 0) {
            res.status(404).send({
                info: 'data tidak ditemukan'
            })
        }
        res.status(200).send({
            status: 'berhasil',
            result
        });
    } catch (e) { res.json({ info: e.message }) }
};
export const getAllAggaranBlt = async (req, res) => {

    const { distrik, kampung, kd_kampung, page, size, tgl_spp, tgl_spm, tgl_sp2d, kd_advis, id_kampung, sts, sts_spp, sts_spm, sts_sp2d
    } = req.query;
    console.log('query', page, 'size', size)
    const where = {}
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 20000;

    try {
        if (distrik) where.distrik = { [Op.like]: `%${distrik}%` }
        if (id_kampung) where.id_kampung = { [Op.like]: `%${id_kampung}%` }
        if (kampung) where.kampung = { [Op.like]: `%${kampung}%` }
        if (tgl_spp) where.tgl_spp = { [Op.eq]: `%${tgl_spp}%` }
        if (tgl_spm) where.tgl_spm = { [Op.eq]: `%${tgl_spm}%` }
        if (tgl_sp2d) where.tgl_sp2d = { [Op.eq]: `%${tgl_sp2d}%` }
        if (kd_advis) where.kd_advis = { [Op.like]: `%${kd_advis}%` }
        if (sts) where.sts = { [Op.eq]: `${sts}` }
        if (sts_spp) where.sts_spp = { [Op.eq]: `${sts_spp}` }
        if (sts_spm) where.sts_spm = { [Op.eq]: `${sts_spm}` }
        if (sts_sp2d) where.sts_sp2d = { [Op.eq]: `${sts_sp2d}` }

        const data = await v_anggaran_blt_qry.findAndCountAll({
            where,
            offset: (pag - 1) * pag,
            limit: per_pag,
            //distinct: 'true' // untuk menghapus data double
            order: [['distrik', 'ASC'], ['kampung', 'ASC']]
        });
        //console.log('pagi', count, "rows", rows)

        const result = pagination({ data: data.rows, count: data.count, page: pag, per_page: per_pag });
        if (data.count <= 0) {
            res.status(404).send({
                info: 'data tidak ditemukan'
            })
        }
        res.status(200).send({
            status: 'berhasil',
            result
        });
    } catch (e) { res.json({ info: e.message }) }
};

export const getAllAggaranB = async (req, res) => {
    const { distrik, kampung, kd_kampung, page, size,
        tgl_spp, tgl_spm, tgl_sp2d, kd_advis,
    } = req.query;
    const where = {}
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 5;

    try {
        if (distrik) where.distrik = { [Op.like]: `${distrik}` }
        if (kd_kampung) where.kd_kampung = { [Op.eq]: `${kd_kampung}` }
        if (kampung) where.kampung = { [Op.like]: `${kampung}` }
        if (tgl_spp) where.tgl_spp = { [Op.eq]: `${tgl_spp}` }
        if (tgl_spm) where.tgl_spm = { [Op.eq]: `${tgl_spm}` }
        if (tgl_sp2d) where.tgl_sp2d = { [Op.eq]: `${tgl_sp2d}` }
        if (kd_advis) where.kd_advis = { [Op.like]: `${kd_advis}` }

        const data = await v_anggaranB_qry.findAndCountAll({
            where,
            offset: (pag - 1) * pag,
            limit: per_pag,
            order: [['distrik', 'ASC'], ['kampung', 'ASC']]
        });

        const result = pagination({ data: data.rows, count: data.count, page: pag, per_page: per_pag });
        if (data.count <= 0) {
            res.status(404).send({
                info: 'data tidak ditemukan'
            })
        }
        res.status(200).send({
            status: 'berhasil',
            result
        });

    } catch (e) { res.json({ info: e.message }) }
};

export const getAnggaranById = async (req, res) => {
    console.log('Query App', req.query)
    const { sts, kd_keg } = req.query;
    const kd_kampung = req.params.id;
    const where = {}
    try {
        if (sts) where.sts = { [Op.eq]: `${parseInt(sts)}` }
        if (kd_keg) where.kd_keg = { [Op.eq]: `${parseInt(kd_keg)}` }
        if (kd_kampung) where.kd_kampung = { [Op.eq]: `${kd_kampung}` }
        const datauser = await v_anggaran_qry.findAll(
            { where });
        res.send(datauser);
    } catch (error) { res.json({ info: error.message }) }
};
export const getAnggaranByI = async (req, res) => {
    console.log('Query App', req.query)
    const { sts, kd_keg, sts_spp } = req.query;
    const kd_kampung = req.params.id;
    const where = {}
    try {
        if (sts) where.sts = { [Op.eq]: `${parseInt(sts)}` }
        if (sts_spp) where.sts_spp = { [Op.eq]: `${parseInt(sts_spp)}` }
        if (kd_keg) where.kd_keg = { [Op.eq]: `${parseInt(kd_keg)}` }
        if (kd_kampung) where.kd_kampung = { [Op.eq]: `${kd_kampung}` }
        const datauser = await v_anggaranB_qry.findAll(
            { where });
        res.send(datauser);
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