import express from "express";
import { getAllLaporan, getAllLaporanReg, getAllLaporanBlt, getAllLaporanCov, getAllLaporanAdd } from "../controler/index.js";

const vLaporan = express();
vLaporan.get('/', getAllLaporan);
vLaporan.get('/reg', getAllLaporanReg);
vLaporan.get('/blt', getAllLaporanBlt);
vLaporan.get('/cov', getAllLaporanCov);
vLaporan.get('/add', getAllLaporanAdd);

export default vLaporan;