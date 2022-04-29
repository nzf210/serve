import express from "express";
import {
    getAllAggaran, getAnggaranById, updateAnggaran, deleteAnggaran, createAnggaran, getAllAggaranB, getAnggaranByI
    , getAllAggaranReg, getAllAggaranCov, getAllAggaranBlt
} from "../controler/index.js";

const anggaran = express();
anggaran.get('/', getAllAggaran);
anggaran.get('/add', getAllAggaranB);
anggaran.get('/reg', getAllAggaranReg);
anggaran.get('/blt', getAllAggaranBlt);
anggaran.get('/cov', getAllAggaranCov);
anggaran.get('/add/:id', getAnggaranByI);
anggaran.get('/:id', getAnggaranById);
anggaran.post('/', createAnggaran);
anggaran.patch('/', updateAnggaran);
anggaran.delete('/', deleteAnggaran);

export default anggaran;