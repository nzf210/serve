import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const dt = DataTypes;

const kadis_qry = db.define('t_kadis', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
    },
    jabatan: {
        type: dt.STRING
    },
    nama: {
        type: dt.STRING
    },
    pangkat: {
        type: dt.STRING
    },
    nip: {
        type: dt.STRING
    },
    dinas: {
        type: dt.STRING
    },
    status: {
        type: dt.BOOLEAN
    }

}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})

export default kadis_qry;