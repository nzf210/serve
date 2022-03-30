import bodyParser from "body-parser";
import express from "express";
import db from "./config/database.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import user, { rkamdis, rbams } from "./routes/index.js";

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
    await db.authenticate();
    //db.sync();
    console.log('Konek DB');
} catch (error) {
    console.log(error);
}

const whitelist = ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:3001', 'http://127.0.0.1:3001', 'http://202.157.176.42:3000', 'http://202.157.176.42:3001', 'http://202.157.176.42:3000',
    'http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://192.168.1.9:3000', 'http://202.157.176.42:3002', 'http://appin.id', 'https://appin.id', 'http://202.157.176.42']


// app.use(cors({ credentials: true, origin: "http://127.0.0.1:3000/" }));

//===========================================
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-with, Content-Type, Accept, Authorization"
//     );
//     if (req.method === 'OPTION') {
//         res.setHeader('Access-Control-Allow-Methods', 'PUT , POST , PATCH , GET , DELETE');
//         return res.status(200).json({});
//     }
//     next();
// })
//===========================================

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Di block Karena CORS'))
        }
    }
}
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', ' GET , POST , PUT , DELETE , PATCH ');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.use(cookieParser());
app.use('/user', cors(corsOptions), user);
app.use('/mkamdis', cors(corsOptions), rkamdis);
app.use('/mbams', cors(corsOptions), rbams);
app.get('/', (req, res) => { res.send('API DPMK'); });

app.listen(3002, () => console.log('Serve http://202.157.176.42:3002'));