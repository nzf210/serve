import { v_no_qry, v_no_kamp_qry, v_no_sp2ddds_qry } from "../models/index.js";


export const getNoDok = async (req, res) => {
    const { kd_keg } = req.query;
    try {
        const no = await v_no_qry.findAll({
            where: { kd_keg }
        });
        res.json(no);
    } catch (e) { res.json({ info: e.message }) }
};
export const getNoDokById = async (req, res) => {
    const { kd_keg } = req.query;
    try {
        const no = await v_no_kamp_qry.findAll({
            where: { kd_kampung: req.params.id, kd_keg }
        });
        res.json(no);
    } catch (e) { res.json({ info: e.message }) }
};
export const getNoSp2d_gab = async (req, res) => {
    // const { kd_keg } = req.query;
    try {
        const no = await v_no_sp2ddds_qry.findAll();
        res.json(no);
        console.log(no);
    } catch (e) { res.json({ info: e.message }) }
};
