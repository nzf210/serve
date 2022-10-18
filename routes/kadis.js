import express from "express";
import { getKadis } from "../controler/index.js";

const kadis = express();
kadis.get('/', getKadis);

export default kadis;