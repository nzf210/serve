import express from "express";
import { getAllAggaran, getAnggaranById, updateAnggaran, deleteAnggaran, createAnggaran } from "../controler/index.js";

const anggaran = express();
anggaran.get('/', getAllAggaran);
anggaran.get('/:id', getAnggaranById);
anggaran.post('/', createAnggaran);
anggaran.patch('/', updateAnggaran);
anggaran.delete('/', deleteAnggaran);

export default anggaran;