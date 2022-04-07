import { Sequelize } from "sequelize";
import db from "../config/database.js";
//import mkampung_qry from "./model.mKampung.js";
//import mdistrik_qry from "./model.mDistrik.js";
import mkamdis_qry from "./model.mKamDis.js";
import mlvluser_qry from "./model.mLevelUser.js";


const { DataTypes } = Sequelize;
const dt = DataTypes;

const v_user_qry = db.define('v_t_user', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
    },
    nama: {
        type: dt.STRING
    },
    username: {
        type: dt.STRING
    },
    password: {
        type: dt.STRING
    },
    nohp: {
        type: dt.STRING
    },
    email: {
        type: dt.STRING
    },
    lvl_user: {
        type: dt.STRING
    },
    lvl_instansi: {
        type: dt.STRING
    },
    kampung: {
        type: dt.STRING
    },
    distrik: {
        type: dt.STRING
    }
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})

export default v_user_qry;