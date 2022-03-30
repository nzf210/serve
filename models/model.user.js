import { Sequelize } from "sequelize";
import db from "../config/database.js";
//import mkampung_qry from "./model.mKampung.js";
//import mdistrik_qry from "./model.mDistrik.js";
import mkamdis_qry from "./model.mKamDis.js";
import mlvluser_qry from "./model.mLevelUser.js";


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
        defaultValue: '0'
    },
    kd_distrik: {
        type: dt.INTEGER,
        defaultValue: '0'
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

//user_qry.hasOne(mkamdis_qry, { foreignKey: 'kd_kampung' });
user_qry.belongsTo(mkamdis_qry, { foreignKey: 'kd_kampung' });
// mkamdis_qry.hasOne(user_qry, { foreignKey: 'kd_kampung' });
// user_qry.belongsTo(mkamdis_qry, { foreignKey: 'kd_kampung' });
// mkamdis_qry.belongsTo(user_qry, { foreignKey: 'kd_kampung' });
// mkamdis_qry.hasOne(user_qry, { foreignKey: 'kd_kampung' });
//user_qry.hasOne(mlvluser_qry, { foreignKey: 'kd_lvl2' });
user_qry.belongsTo(mlvluser_qry, { foreignKey: 'kd_lvl2' });
//user_qry.hasOne(mlvluser_qry, { foreignKey: 'kd_lvl2' });
//user_qry.hasOne(mkamdis_qry, { foreignKey: 'kd_lvl2' });
// user_qry.belongsTo(mkamdis_qry, { foreignKey: 'kd_lvl2' });
// user_qry.belongsToMany(mkamdis_qry, { through: 'm_user_' });
// mkamdis_qry.belongsToMany(user_qry, { through: 'm_user_' });
export default user_qry;