import express from "express";
import { getAllAggaran, getAnggaranById, updateAnggaran, deleteAnggaran, createAnggaran, getAllAggaranB, getAnggaranByI } from "../controler/index.js";

const anggaran = express();
anggaran.get('/', getAllAggaran);
anggaran.get('/add', getAllAggaranB);
anggaran.get('/add/:id', getAnggaranByI);
anggaran.get('/:id', getAnggaranById);
anggaran.post('/', createAnggaran);
anggaran.patch('/', updateAnggaran);
anggaran.delete('/', deleteAnggaran);

export default anggaran;