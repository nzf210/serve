import express from "express";
import { getNoDok, getNoDokById } from "../controler/index.js";

const nodok = express();
nodok.get('/', getNoDok);
nodok.get('/:id', getNoDokById);

export default nodok;