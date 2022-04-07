import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const dt = DataTypes;

const mkamdis_qry = db.define('m_kam_dis', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
    },
    kampung: {
        type: dt.STRING
    },
    kd_kampung: {
        type: dt.INTEGER,
        allowNull: false
    },
    distrik: {
        type: dt.STRING
    },
    kd_distrik: {
        type: dt.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    schema: 'm_dpmk',
    timestamps: false
})

export default mkamdis_qry;