import express from "express";
import { getallKadis } from "../controler/index.js";

const kadis = express();
kadis.post('/', getallKadis);

export default kadis;