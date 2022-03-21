import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const dt = DataTypes;

const mkampung_qry = db.define('m_kampung', {
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
    }
}, {
    freezeTableName: true,
    schema: 'web_dpmk',
    timestamps: false
})

export default mkampung_qry;