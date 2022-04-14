import { v_no_qry } from "../models/index.js";


export const getNoDok = async (req, res) => {
    try {
        const no = await v_no_qry.findAll();
        res.json(no);
    } catch (e) { res.json({ info: e.message }) }
};
