import kadis_qry from "../models/model.kadis.js";

// Path: controler\kadis.js

export const getKadis = async (req, res) => {
    try {
        const dataKadis = await kadis_qry.findAll(
            { where: { status: true } });
        res.json(dataKadis[0]);
    } catch (error) { res.json({ info: error.message }) }
};