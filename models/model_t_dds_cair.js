import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;
const dt = DataTypes;

const tddscair_qry = db.define('v_a3', {

    kd_kampung: {
        type: dt.INTEGER,
        allowNull: false
    },
    j_kk: {
        type: dt.INTEGER,
        allowNull: false
    },
    kampung: {
        type: dt.STRING,
        allowNull: false
    },
    distrik: {
        type: dt.STRING,
        allowNull: false
    },
    nama: {
        type: dt.STRING,
        allowNull: false
    },
    no_sk: {
        type: dt.STRING,
        allowNull: false
    },
    no_sk_kepala: {
        type: dt.STRING,
        allowNull: false
    },
    tgl_sk: {
        type: dt.DATE,
        allowNull: false
    },
    nama_kepala: {
        type: dt.STRING,
        allowNull: false
    },
    tgl_sk_kepala: {
        type: dt.DATE,
        allowNull: false
    },
    bank: {
        type: dt.STRING,
        allowNull: false
    },
    rek: {
        type: dt.STRING,
        allowNull: false
    },
    no_rek: {
        type: dt.STRING,
        allowNull: false
    },
    opt1: {
        type: dt.STRING,
        allowNull: false
    },
    sub: {
        type: dt.TEXT,
        allowNull: false
    }
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false,
    // conversationId: {
    //     type: dt.STRING,
    //     references: 'n_code', // or "conversations"? This is a table name
    //     referencesKey: 'n_code' // the PK column name
    // }
})
tddscair_qry.removeAttribute('id');

export default tddscair_qry;


export const sub_tddscair_qry = db.define('v_a2', {

    id_s: {
        type: dt.INTEGER,
        allowNull: true


    },
    ids: {
        allowNull: false,
        type: dt.INTEGER
    },
    // kd_kampung: {
    //     type: dt.INTEGER,
    //     allowNull: false
    // },
    id_thp: {
        type: dt.INTEGER,
        allowNull: false
    },
    pagu: {
        type: dt.FLOAT,
        allowNull: false
    },
    thp_advis: {
        type: dt.STRING,
        allowNull: false
    },
    tahap: {
        type: dt.STRING,
        allowNull: false
    },
    opt1: {
        type: dt.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false,
    // conversationId: {
    //     type: dt.INTEGER,
    //     references: 'n_code', // or "conversations"? This is a table name
    //     referencesKey: 'n_code' // the PK column name
    // }
})
//sub_tddscair_qry.removeAttribute('id');
// sub_tddscair_qry.hasMany(tddscair_qry, { references: 'n_code' });
// tddscair_qry.hasOne(sub_tddscair_qry, { foreignKey: 'id_s' });
// sub_tddscair_qry.belongsTo(tddscair_qry, { foreignKey: 'n_code' });
// tddscair_qry.hasOne(sub_tddscair_qry, { foreignKey: 'id_s' });
// tddscair_qry.belongsTo(sub_tddscair_qry, { foreignKey: 'n_code' });
//sub_tddscair_qry.hasOne(tddscair_qry);
// sub_tddscair_qry.hasOne(tddscair_qry, { foreignKey: 'n_code' });
// tddscair_qry.belongsTo(sub_tddscair_qry, { foreignKey: 'n_code' });

export const tambah_ddscair_qry = db.define('t_dds_sp2d', {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
    },
    kd_kampung: {
        type: dt.INTEGER,
        allowNull: false
    },
    j_kk: {
        type: dt.INTEGER,
        allowNull: false
    },
    kampung: {
        type: dt.STRING,
        allowNull: false
    },
    distrik: {
        type: dt.STRING,
        allowNull: false
    },
    nama: {
        type: dt.STRING,
        allowNull: false
    },
    no_sk: {
        type: dt.STRING,
        allowNull: false
    },
    no_sk_kepala: {
        type: dt.STRING,
        allowNull: false
    },
    tgl_sk: {
        type: dt.DATE,
        allowNull: false
    },
    nama_kepala: {
        type: dt.STRING,
        allowNull: false
    },
    thp_select: {
        type: dt.STRING
    },
    tgl_sk_kepala: {
        type: dt.DATE,
        allowNull: false
    },
    tgl_sp2d: {
        type: dt.DATE
    },
    no_sp2d: {
        type: dt.STRING
    },
    bank: {
        type: dt.STRING,
        allowNull: false
    },
    rek: {
        type: dt.STRING,
        allowNull: false
    },
    no_rek: {
        type: dt.STRING,
        allowNull: false
    },
    opt1: {
        type: dt.STRING,
        allowNull: false
    },
    sub: {
        type: dt.TEXT,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: dt.DATE,
        defaultValue: Date.now()
    },
    updatedAt: {
        allowNull: false,
        type: dt.DATE,
        defaultValue: Date.now()
    }
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    //timestamps: false,
    // conversationId: {
    //     type: dt.STRING,
    //     references: 'n_code', // or "conversations"? This is a table name
    //     referencesKey: 'n_code' // the PK column name
    // }
})