import { Op } from "sequelize";
import { v_LD_qry, v_LD_blt_qry, v_LD_reg_qry, v_LD_cov_qry, v_LD_add_qry } from "../models/index.js";
import pagination from './paginate.js';

export const getAllLaporan = async (req, res) => {
    const { kampung, page, size } = req.query;
    let where = {};
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 20;
    if (kampung) where = {
        [Op.or]:
            [
                { kampung: { [Op.iLike]: `%${kampung}%` } },
                { distrik: { [Op.iLike]: `%${kampung}%` } }
            ]
    }
    try {
        const data = await v_LD_qry.findAndCountAll({
            where,
            offset: (pag - 1) * per_pag,
            limit: per_pag,
        });
        const result = pagination({ data: data.rows, count: data.count, page: pag, per_page: per_pag });
        if (data.count = 0) {
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

export const getAllLaporanReg = async (req, res) => {
    const { kampung, page, size } = req.query;
    let where = {};
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 20;
    if (kampung) where = {
        [Op.or]:
            [
                { kampung: { [Op.iLike]: `%${kampung}%` } },
                { distrik: { [Op.iLike]: `%${kampung}%` } }
            ]
    }
    try {
        const data = await v_LD_reg_qry.findAndCountAll({
            where,
            offset: (pag - 1) * per_pag,
            limit: per_pag,
        });
        const result = pagination({ data: data.rows, count: data.count, page: pag, per_page: per_pag });
        if (data.count = 0) {
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

export const getAllLaporanBlt = async (req, res) => {
    const { kampung, page, size } = req.query;
    let where = {};
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 20;
    if (kampung) where = {
        [Op.or]:
            [
                { kampung: { [Op.iLike]: `%${kampung}%` } },
                { distrik: { [Op.iLike]: `%${kampung}%` } }
            ]
    }
    try {
        const data = await v_LD_blt_qry.findAndCountAll({
            where,
            offset: (pag - 1) * per_pag,
            limit: per_pag,
        });
        const result = pagination({ data: data.rows, count: data.count, page: pag, per_page: per_pag });
        if (data.count = 0) {
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

export const getAllLaporanCov = async (req, res) => {
    const { kampung, page, size } = req.query;
    let where = {};
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 20;
    if (kampung) where = {
        [Op.or]:
            [
                { kampung: { [Op.iLike]: `%${kampung}%` } },
                { distrik: { [Op.iLike]: `%${kampung}%` } }
            ]
    }
    try {
        const data = await v_LD_cov_qry.findAndCountAll({
            where,
            offset: (pag - 1) * per_pag,
            limit: per_pag,
        });
        const result = pagination({ data: data.rows, count: data.count, page: pag, per_page: per_pag });
        if (data.count = 0) {
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

export const getAllLaporanAdd = async (req, res) => {
    const { kampung, page, size } = req.query;
    let where = {};
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 20;
    if (kampung) where = {
        [Op.or]:
            [
                { kampung: { [Op.iLike]: `%${kampung}%` } },
                { distrik: { [Op.iLike]: `%${kampung}%` } }
            ]
    }
    try {
        const data = await v_LD_add_qry.findAndCountAll({
            where,
            offset: (pag - 1) * per_pag,
            limit: per_pag,
        });
        const result = pagination({ data: data.rows, count: data.count, page: pag, per_page: per_pag });
        if (data.count = 0) {
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

