import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const dt = DataTypes;

const mlvluser_qry = db.define('m_lvl_user', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dt.INTEGER
    },
    level: {
        type: dt.STRING
    },
    kd_lvl2: {
        type: dt.INTEGER,
        allowNull: false
    }

}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})

export default mlvluser_qry;