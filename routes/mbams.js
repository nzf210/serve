import express from "express";
import { getAllBams, getBamsById, createBams, deleteBams, updateBams } from "../controler/index.js";

const rbams = express();
rbams.get('/', getAllBams);
rbams.get('/:id', getBamsById);
rbams.post('/', createBams);
rbams.patch('/', updateBams);
rbams.delete('/:id', deleteBams);

export default rbams;