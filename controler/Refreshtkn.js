import { user_qry } from "../models/index.js"
import jwt from "jsonwebtoken";

export const refsToken = async (req, res) => {

    try {
        const refreshtoken = req.cookies.refreshtoken;
        console.log(refreshtoken);
        if (!refreshtoken) return res.sendStatus(401);
        const user = await user_qry.findAll({
            where: { refresh_token: refreshtoken }
        });

        if (!user[0]) return res.sendStatus(403);

        jwt.verify(refreshtoken, process.env.REFRESH_TOKEN, (e, decoded) => {
            if (e) return res.sendStatus(403);
            const userId = user[0].id;
            const nama = user[0].nama;
            const username = user[0].username;
            const email = user[0].email;
            const nohp = user[0].nohp;
            const kd_lvl1 = user[0].kd_lvl1;
            const kd_lvl2 = user[0].kd_lvl2;
            const kd_kampung = user[0].kd_kampung;
            const kd_distrik = user[0].kd_distrik;
            const accestoken = jwt.sign({ userId, nama, username, email, nohp, kd_lvl1, kd_lvl2, kd_distrik, kd_kampung }, process.env.ACCES_TOKEN, { expiresIn: '15s' });

            res.json({ accestoken });
        });
    } catch (e) { console.log(e); res.json({ e }) }
}

