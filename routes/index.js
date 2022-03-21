import express from "express";
// import {
//     getAllUser, createUser, getUserById,
//     updateUser, deleteUser, Register, Login
// } from "../controler/user.js";
import {
    getAllUser, getUserById, Login, Refreshtkn, updateUser, Register, Logout
} from "../controler/index.js";
import { verfToken as vrf } from "../middleware/VerifyToken.js";

const router = express();
router.post('/login', Login);
router.get('/token', Refreshtkn);
router.get('/', vrf, getAllUser);
router.get('/:id', vrf, getUserById);
router.post('/', Register);
router.patch('/:id', updateUser);
router.delete('/logout', Logout);

export default router;