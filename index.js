import bodyParser from "body-parser";
import express from "express";
import db from "./config/database.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import user, { rkamdis, rbams, pjbtPengesahan, anggaran, nodok } from "./routes/index.js";

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3002
if (process.env === 'production') {
    app.set('trust proxy', 1) // trust first proxy
}
// if (process.env === 'production') {
//     app.set('trust proxy', 1) // trust first proxy
// }


try {
    await db.authenticate();
    //db.sync();
    console.log('Konek DB');
} catch (error) {
    console.log(error);
}

const whitelist = ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:3001', 'http://127.0.0.1:3001', 'http://202.157.176.42:3000', 'http://202.157.176.42:3001', 'http://202.157.176.42:3000',
    'http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://192.168.1.9:3000', 'http://202.157.176.42:3002', 'http://appin.id', 'https://appin.id', 'http://202.157.176.42',
    'https://dpmk.nzf.my.id/', 'https://dpmkapp-nzf210.vercel.app/', 'https://dpmkapp-nzf210.vercel.app', 'https://dpmkapp.vercel.app/', 'https://dpmkapp.vercel.app', 'https://dpmkapp-8w4ka9yx1-nzf210.vercel.app/', 'https://dpmkapp-8w4ka9yx1-nzf210.vercel.app'

]

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
app.use('/ppengesahan', cors(corsOptions), pjbtPengesahan);
app.use('/anggaran', cors(corsOptions), anggaran);
app.use('/nodok', cors(corsOptions), nodok);
app.get('/', (req, res) => { res.send('API DPMK'); });

app.listen(port, () => console.log(`Serve Run !!! di Port ${port}`));