import { v_no_qry, v_no_kamp_qry } from "../models/index.js";


export const getNoDok = async (req, res) => {
    try {
        const no = await v_no_qry.findAll();
        res.json(no);
    } catch (e) { res.json({ info: e.message }) }
};
export const getNoDokById = async (req, res) => {
    try {
        const no = await v_no_kamp_qry.findAll({
            where: { kd_kampung: req.params.id }
        });
        res.json(no);
    } catch (e) { res.json({ info: e.message }) }
};
