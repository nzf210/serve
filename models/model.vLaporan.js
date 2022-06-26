import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const dt = DataTypes;

const v_LD_qry = db.define('v_L_d_gab', {
    kd_kampung: {
        type: dt.INTEGER
    },
    kd_distrik: {
        type: dt.INTEGER
    },
    distrik: {
        type: dt.STRING
    },
    kampung: {
        type: dt.STRING
    },
    thp_1: {
        type: dt.STRING
    },
    thp_2: {
        type: dt.STRING
    },
    thp_3: {
        type: dt.STRING
    },
    s1: {
        type: dt.STRING
    },
    s2: {
        type: dt.STRING
    },
    s3: {
        type: dt.STRING
    }
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})

export default v_LD_qry;

export const v_LD_reg_qry = db.define('v_L_d_reg', {
    kd_kampung: {
        type: dt.INTEGER
    },
    kd_distrik: {
        type: dt.INTEGER
    },
    distrik: {
        type: dt.STRING
    },
    kampung: {
        type: dt.STRING
    },
    pagu_thp1: {
        type: dt.INTEGER
    },
    pagu_thp2: {
        type: dt.INTEGER
    },
    pagu_thp3: {
        type: dt.INTEGER
    },
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})
export const v_LD_cov_qry = db.define('v_L_d_cov', {

    kd_kampung: {
        type: dt.INTEGER
    },
    kd_distrik: {
        type: dt.INTEGER
    },
    distrik: {
        type: dt.STRING
    },
    kampung: {
        type: dt.STRING
    },
    pagu_thp1: {
        type: dt.INTEGER
    }
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})
export const v_LD_blt_qry = db.define('v_L_d_blt', {

    kd_kampung: {
        type: dt.INTEGER
    },
    kd_distrik: {
        type: dt.INTEGER
    },
    distrik: {
        type: dt.STRING
    },
    kampung: {
        type: dt.STRING
    },
    pagu_thp1: {
        type: dt.INTEGER
    },
    pagu_thp2: {
        type: dt.INTEGER
    },
    pagu_thp3: {
        type: dt.INTEGER
    },
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})
v_LD_qry.removeAttribute('id');
export const v_LD_add_qry = db.define('v_L_add', {

    kd_kampung: {
        type: dt.INTEGER
    },
    kd_distrik: {
        type: dt.INTEGER
    },
    distrik: {
        type: dt.STRING
    },
    kampung: {
        type: dt.STRING
    },
    pagu_thp1: {
        type: dt.INTEGER
    },
    pagu_thp2: {
        type: dt.INTEGER
    },
    pagu_thp3: {
        type: dt.INTEGER
    },
    pagu_thp4: {
        type: dt.INTEGER
    },
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})
v_LD_reg_qry.removeAttribute('id');
v_LD_blt_qry.removeAttribute('id');
v_LD_cov_qry.removeAttribute('id');
v_LD_add_qry.removeAttribute('id');

