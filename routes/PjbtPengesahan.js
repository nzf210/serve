import express from "express";

import { getAllPjbtPengesahan, getPjbtPengesahanById, updatePjbtPengesahan, deletePjbtPengesahan, createPjbtPengesahan } from "../controler/index.js";

const pjbtPengesahan = express();
pjbtPengesahan.get('/', getAllPjbtPengesahan);
pjbtPengesahan.get('/:id', getPjbtPengesahanById);
pjbtPengesahan.post('/', createPjbtPengesahan);
pjbtPengesahan.patch('/', updatePjbtPengesahan);
pjbtPengesahan.delete('/', deletePjbtPengesahan);

export default pjbtPengesahan;