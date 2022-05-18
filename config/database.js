import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

let usr = 'postgres'
let pass = 'qwerty'
let host = '127.0.0.1'
let dbnm = 'app'
console.log('env', process.title)
if (process.title !== 'node') {
    usr = process.env.DBUSER
    pass = process.env.DBPASS
    host = process.env.DBHOST
    dbnm = process.env.DBNM
}

const db = new Sequelize(dbnm, usr, pass,
    {
        host: host,
        dialect: "postgres", port: 5432
    }
);

export default db;