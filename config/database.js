import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

let usr = 'postgres'
let pass = 'qwerty'
// Ganti IP Host Sesuai Dengan IP Server Contoh '192.168.43.143'
let host = '127.0.0.1' // <==== 
//================
let dbnm = 'app'
console.log('env ===', process.title, process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
    usr = process.env.DBUSER
    pass = process.env.DBPASS
    host = process.env.DBHOST
    dbnm = process.env.BDNM
}

const db = new Sequelize(dbnm, usr, pass,
    {
        host: host,
        dialect: "postgres", port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
);

export default db;