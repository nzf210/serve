import { Sequelize } from "sequelize";
import db from "../config/database.js";


const { DataTypes } = Sequelize;
const dt = DataTypes;

const v_pjbPengesahan_qry = db.define('v_p_pengesahan', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
    },
    kampung: {
        type: dt.STRING
    },
    distrik: {
        type: dt.STRING
    },
    nama: {
        type: dt.STRING
    },
    no_sk: {
        type: dt.STRING
    },
    tgl_sk: {
        type: dt.DATE
    },
    kd_jbtn: {
        type: dt.INTEGER
    },
    kd_kampung: {
        type: dt.INTEGER
    },
    j_kk: {
        type: dt.INTEGER
    },
    distrik: {
        type: dt.STRING
    },
    jabatan: {
        type: dt.STRING
    },
    sts: {
        type: dt.BOOLEAN
    }

}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})


export const t_pjbPengesahan_qry = db.define('t_p_pengesahan', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
    },
    kd_kampung: {
        type: dt.INTEGER
    },
    id_jabatan: {
        type: dt.INTEGER
    },
    nama: {
        type: dt.STRING
    },
    no_sk: {
        type: dt.STRING
    },
    tgl_sk: {
        type: dt.DATE
    },
    sts: {
        type: dt.BOOLEAN,
        defaultValue: false,

    }

}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})


export default v_pjbPengesahan_qry;