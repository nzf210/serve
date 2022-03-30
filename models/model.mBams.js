import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const dt = DataTypes;

const mbams_qry = db.define('m_bamuskam', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
    },
    distrik: {
        type: dt.STRING
    },
    kampung: {
        type: dt.STRING
    },
    jabatan: {
        type: dt.STRING
    },
    no_sk: {
        type: dt.STRING
    },
    tgl_sk: {
        type: dt.STRING
    },
    nama: {
        type: dt.STRING
    },
    id_j: {
        type: dt.STRING
    }

}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})

export default mbams_qry;