import express from "express";

import { getAllKamdis, getKamdisById } from "../controler/index.js";

const rkamdis = express();
rkamdis.get('/', getAllKamdis);
rkamdis.get('/:id', getKamdisById);



export default rkamdis;