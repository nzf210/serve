import { v_dds_qry, tambah_ddscair_qry } from "../models/index.js";
import { Op } from "sequelize";
import pagination from './paginate.js';

export const getAlldds = async (req, res) => {
    const { kampung, page, size } = req.query;
    //console.log('query', page, 'size', size, 'kampung', kampung, 'distrik', distrik, 'agReg')
    let where = {};
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 20;

    if (kampung) where = {
        [Op.or]:
            [
                { kampung: { [Op.iLike]: `%${kampung}%` } },
                { distrik: { [Op.iLike]: `%${kampung}%` } },
                { opt1: { [Op.iLike]: `%${kampung}%` } },
            ]
    }
    try {
        const data = await v_dds_qry.findAndCountAll({
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
        //        res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};
export const getAlldds_ = async (req, res) => {
    const { distrik, kampung, kd_kampung, page, size, no_sp2d } = req.query;
    //console.log('query', page, 'size', size, 'kampung', kampung, 'distrik', distrik, 'agReg')
    let where = {};
    const pag = page ? parseInt(page) : 1;
    const per_pag = size ? parseInt(size) : 20;

    //if (kd_kampung) where.kd_kampung = { [Op.eq]: `${kd_kampung}` }
    //if (kd_keg) where.kd_keg = { [Op.eq]: `${kd_keg}` }
    console.log('no sp2d => ', no_sp2d)
    if (no_sp2d) where.no_sp2d = { [Op.ne]: null }
    if (kampung) where = {
        [Op.or]:
            [
                { kampung: { [Op.iLike]: `%${kampung}%` } },
                { distrik: { [Op.iLike]: `%${kampung}%` } },
                //{ no_sp2d: { [Op.iLike]: `%${kampung}%` } },
                //{ tgl_sp2d: { [Op.iLike]: `%${kampung}%` } },
                { opt1: { [Op.iLike]: `%${kampung}%` } },

            ],
        [Op.and]: { no_sp2d: { [Op.ne]: null } }

    }
    // if (sts) where.sts = { [Op.eq]: `${sts}` }
    // if (sts_spp) where.sts_spp = { [Op.eq]: `${sts_spp}` }
    // if (sts_spm) where.sts_spm = { [Op.eq]: `${sts_spm}` }
    // if (sts_sp2d) where.sts_sp2d = { [Op.eq]: `${sts_sp2d}` }
    try {
        const data = await tambah_ddscair_qry.findAndCountAll({
            where,
            offset: (pag - 1) * per_pag,
            limit: per_pag,
        });

        //console.log('data === >', data)

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
        // res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};

export const addDDSSp2d = async (req, res) => {
    const {
        kd_kampung, j_kk, kampung, distrik, nama, no_sk, no_sk_kepala,
        tgl_sk, nama_kepala, tgl_sk_kepala, bank, rek, no_rek, opt1, tgl_sp2d, no_sp2d, sub
    } = req.body;
    try {
        await tambah_ddscair_qry.create({
            kd_kampung, j_kk, kampung, distrik, nama, no_sk, no_sk_kepala,
            tgl_sk, nama_kepala, tgl_sk_kepala, bank, rek, no_rek, opt1, tgl_sp2d, no_sp2d, sub
        });
        //console.log('reg Body', req.body)
        res.json({ info: "Data Baru Berhasil di Tambah ... " });
    } catch (error) { res.json({ info: error.message }) }
};

export const updateDDSSp2d = async (req, res) => {
    const { tgl_sp2d, no_sp2d, id } = req.body;
    try {
        await tambah_ddscair_qry.update({
            tgl_sp2d, no_sp2d
        },
            {
                where: { id }
            });
        //console.log('reg Body', req.body)
        res.json({ info: "Data Berhasil di Ubah ... " });
    } catch (error) { res.json({ info: error.message }) }
};