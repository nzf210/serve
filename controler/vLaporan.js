import { v_LD_qry, v_LD_blt_qry, v_LD_reg_qry, v_LD_cov_qry, v_LD_add_qry } from "../models/index.js";

export const getAllLaporan = async (req, res) => {
    try {
        const datauser = await v_LD_qry.findAll();
        res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};

export const getAllLaporanReg = async (req, res) => {
    try {
        const datauser = await v_LD_reg_qry.findAll();
        res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};

export const getAllLaporanBlt = async (req, res) => {
    try {
        const datauser = await v_LD_blt_qry.findAll();
        res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};

export const getAllLaporanCov = async (req, res) => {
    try {
        const datauser = await v_LD_cov_qry.findAll();
        res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};

export const getAllLaporanAdd = async (req, res) => {
    try {
        const datauser = await v_LD_add_qry.findAll();
        res.json(datauser);
    } catch (e) { res.json({ info: e.message }) }
};

