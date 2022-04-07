import express from "express";
import {
    getAllUser, getUserById, Login, Refreshtkn, updateUser, Register, Logout, deleteUser, getUserId
} from "../controler/index.js";
import { verfToken as vrf } from "../middleware/VerifyToken.js";

const user = express();
user.post('/login', Login);
user.get('/token', Refreshtkn);
user.get('/', getAllUser);
user.get('/usr', getUserId);
user.get('/:id', getUserById);
user.post('/', Register);
user.patch('/:id', updateUser);
user.delete('/logout', Logout);
user.delete('/:id', deleteUser);



export default user;