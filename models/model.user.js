import { Sequelize } from "sequelize";
import db from "../config/database.js";
//import mkampung_qry from "./model.mKampung.js";
//import mdistrik_qry from "./model.mDistrik.js";
import mkamdis_qry from "./model.mKamDis.js";


const { DataTypes } = Sequelize;
const dt = DataTypes;

const user_qry = db.define('m_user', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
    },
    nama: {
        type: dt.STRING,
        allowNull: false
    },
    username: {
        type: dt.STRING,
        allowNull: false
    },
    password: {
        type: dt.STRING,
        allowNull: false
    },
    nohp: {
        type: dt.STRING,
        allowNull: false
    },
    email: {
        type: dt.STRING
    },
    kd_lvl1: {
        type: dt.INTEGER,
        allowNull: false
    },
    kd_lvl2: {
        type: dt.INTEGER,
        allowNull: false
    },
    kd_kampung: {
        type: dt.INTEGER,
        allowNull: false
    },
    kd_distrik: {
        type: dt.INTEGER,
        allowNull: false
    },
    refresh_token: {
        type: dt.TEXT
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
    schema: 'web_dpmk'
})

user_qry.hasOne(mkamdis_qry, { foreignKey: 'kd_kampung' });
user_qry.belongsTo(mkamdis_qry, { foreignKey: 'kd_kampung' });
// user_qry.hasOne(mkampung_qry, { foreignKey: 'kd_kampung' });
// user_qry.belongsTo(mkampung_qry, { foreignKey: 'kd_kampung' });
// user_qry.hasOne(mdistrik_qry, { foreignKey: 'kd_distrik' });
// user_qry.belongsTo(mdistrik_qry, { foreignKey: 'kd_distrik' });

export default user_qry;