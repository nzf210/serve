import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const dt = DataTypes;

const tddscair_qry = db.define('v_dds_cair', {
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
    timestamps: false
})

export default mlvluser_qry;