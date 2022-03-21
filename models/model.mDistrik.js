import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const dt = DataTypes;

const mdistrik_qry = db.define('m_distrik', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
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
    schema: 'web_dpmk',
    timestamps: false
})

export default mdistrik_qry;