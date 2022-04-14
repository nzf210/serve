import express from "express";
import { getNoDok } from "../controler/index.js";

const nodok = express();
nodok.get('/', getNoDok);

export default nodok;