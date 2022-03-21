import json from "body-parser";
import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Konek DB');
} catch (error) {
    console.log(error);
}

// app.use(cors());
// app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
app.use('/user', router);
app.get('/', (req, res) => {
    res.send('API DPMK');
});

app.listen(3002, () => console.log('Serve http://127.0.0.1:3002'));