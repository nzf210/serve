import express from "express";
import {
    getAllAggaran, getAnggaranById, updateAnggaran, deleteAnggaran, createAnggaran, getAllAggaranB, getAnggaranByI
    , getAllAggaranReg, getAllAggaranCov, getAllAggaranBlt, getAlldds, addDDSSp2d, getAlldds_, updateDDSSp2d
} from "../controler/index.js";

const anggaran = express();
anggaran.post('/', createAnggaran);
anggaran.post('/dds', addDDSSp2d);
anggaran.patch('/', updateAnggaran);
anggaran.patch('/dds', updateDDSSp2d);
anggaran.delete('/', deleteAnggaran);
anggaran.get('/reg', getAllAggaranReg);
anggaran.get('/blt', getAllAggaranBlt);
anggaran.get('/cov', getAllAggaranCov);
anggaran.get('/add', getAllAggaranB);
anggaran.get('/dds', getAlldds);
anggaran.get('/dds_', getAlldds_);
anggaran.get('/add/:id', getAnggaranByI);
anggaran.get('/', getAllAggaran);
anggaran.get('/:id', getAnggaranById);

export default anggaran;