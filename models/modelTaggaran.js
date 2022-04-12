import { Sequelize } from "sequelize";
import db from "../config/database.js";


const { DataTypes } = Sequelize;
const dt = DataTypes;

const v_anggaran_qry = db.define('v_t_anggaran', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
    },
    kd_keg: {
        type: dt.INTEGER
    },
    pagu: {
        type: dt.INTEGER
    },
    kd_kampung: {
        type: dt.STRING
    },
    sts: {
        type: dt.BOOLEAN
    },
    id_thp: {
        type: dt.INTEGER
    },
    tgl: {
        type: dt.DATE
    },
    sts_spd: {
        type: dt.BOOLEAN,
        defaultValue: false,
    },
    no_spd: {
        type: dt.STRING
    },
    tgl_spd: {
        type: dt.DATE
    },
    sts_spp: {
        type: dt.BOOLEAN,
        defaultValue: false,
    },
    no_spp: {
        type: dt.STRING
    },
    tgl_spp: {
        type: dt.DATE
    },
    sts_spm: {
        type: dt.BOOLEAN,
        defaultValue: false,
    },
    no_spm: {
        type: dt.STRING
    },
    tgl_spm: {
        type: dt.DATE
    },
    sts_sp2d: {
        type: dt.BOOLEAN,
        defaultValue: false,
    },
    no_sp2d: {
        type: dt.STRING
    },
    tgl_sp2d: {
        type: dt.DATE
    },
    no_sp2d: {
        type: dt.STRING
    },

    tahap: {
        type: dt.STRING
    },

    thp_cair: {
        type: dt.STRING
    },
    no_sp2d: {
        type: dt.STRING
    },
    persen: {
        type: dt.STRING
    },
    thp_advis: {
        type: dt.STRING
    },
    opt1: {
        type: dt.STRING
    },
    opt2: {
        type: dt.STRING
    },
    opt3: {
        type: dt.STRING
    },
    kampung: {
        type: dt.STRING
    },
    distrik: {
        type: dt.STRING
    },
    j_kk: {
        type: dt.INTEGER
    }

}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})


export const t_anggaran_qry = db.define('t_keg', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
    },
    kd_keg: {
        type: dt.INTEGER
    },
    pagu: {
        type: dt.INTEGER
    },
    kd_kampung: {
        type: dt.STRING
    },
    sts: {
        type: dt.BOOLEAN
    },
    id_thp: {
        type: dt.INTEGER
    },
    tgl: {
        type: dt.DATE
    },
    sts_spd: {
        type: dt.BOOLEAN,
        defaultValue: false,
    },
    no_spd: {
        type: dt.STRING
    },
    tgl_spd: {
        type: dt.DATE
    },
    sts_spp: {
        type: dt.BOOLEAN,
        defaultValue: false,
    },
    no_spp: {
        type: dt.STRING
    },
    tgl_spp: {
        type: dt.DATE
    },
    sts_spm: {
        type: dt.BOOLEAN,
        defaultValue: false,
    },
    no_spm: {
        type: dt.STRING
    },
    tgl_spm: {
        type: dt.DATE
    },
    sts_sp2d: {
        type: dt.BOOLEAN,
        defaultValue: false,
    },
    no_sp2d: {
        type: dt.STRING
    },
    tgl_sp2d: {
        type: dt.DATE
    }
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})


export default v_anggaran_qry;