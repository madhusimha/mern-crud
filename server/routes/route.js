import express from "express";
import { addUsercontroller, getUser, getUsers, updateUser, deleteUser, updateUser2 } from "../controller/user-controller.js";


const router = express.Router();

router.post("/add", addUsercontroller)
router.get("/allusers", getUsers)
router.get("/user/:id", getUser)
router.post("/updateuser/:id", updateUser)
router.post("/updateuser2/:id", updateUser2)
router.delete("/deleteuser/:id", deleteUser)

export default router;