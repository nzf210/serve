import express from "express";
import { getNoDok, getNoDokById, getNoSp2d_gab } from "../controler/index.js";

const nodok = express();
nodok.get('/sp2d', getNoSp2d_gab);
nodok.get('/', getNoDok);
nodok.get('/:id', getNoDokById);

export default nodok;