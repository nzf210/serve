import { Sequelize } from "sequelize";

let usr = 'postgres'
let pass = 'qwerty'
if (process.env === 'production') {
    usr = process.env.DBUSER,
        pass = process.env.DBPASS
}

const db = new Sequelize('app', usr, pass,
    {
        host: "127.0.0.1",
        dialect: "postgres", port: 5432
    }
);

export default db;