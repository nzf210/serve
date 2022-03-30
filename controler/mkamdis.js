import { mkamdis_qry } from "../models/index.js";

export const getAllKamdis = async (req, res) => {
    try {
        const datauser = await mkamdis_qry.findAll();
        res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};

export const getKamdisById = async (req, res) => {
    try {
        const datauser = await mkamdis_qry.findAll(
            { where: { id: req.params.id } });
        res.json(datauser[0]);
    } catch (error) { res.json({ info: error.message }) }
};

