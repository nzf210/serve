import {
    getAllUser, getUserById, Login, createUser,
    updateUser, deleteUser, Register, Logout
} from "./user.js";
import { getAllKamdis, getKamdisById } from "./mkamdis.js";
import { refsToken } from './Refreshtkn.js';
import { getAllBams, getBamsById, createBams, updateBams, deleteBams } from './mbams.js';


export {
    getAllUser, getUserById, Login, createUser, Register,
    updateUser, deleteUser, refsToken as Refreshtkn, Logout, getAllKamdis, getKamdisById, getAllBams, getBamsById, createBams, updateBams, deleteBams
}

