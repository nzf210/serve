import { Sequelize } from "sequelize";
import db from "../config/database.js";


const { DataTypes } = Sequelize;
const dt = DataTypes;

const v_no_qry = db.define('v_no_dok', {

    no_spd: {
        type: dt.INTEGER
    },
    no_spp: {
        type: dt.INTEGER
    },
    no_spm: {
        type: dt.INTEGER
    },
    no_sp2d: {
        type: dt.INTEGER
    }

}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})
v_no_qry.removeAttribute('id');

export default v_no_qry;

export const v_no_kamp_qry = db.define('v_no_dok_kampung', {

    no_spd: {
        type: dt.INTEGER
    },
    no_spp: {
        type: dt.INTEGER
    },
    no_spm: {
        type: dt.INTEGER
    },
    no_sp2d: {
        type: dt.INTEGER
    },
    kd_kampung: {
        type: dt.INTEGER
    },
    kd_keg: {
        type: dt.INTEGER
    }

}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})
v_no_kamp_qry.removeAttribute('id');

export const v_no_sp2ddds_qry = db.define('v_no_sp2d_gab', {
    no_sp2d_gab: {
        type: dt.INTEGER
    },
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})
v_no_sp2ddds_qry.removeAttribute('id');