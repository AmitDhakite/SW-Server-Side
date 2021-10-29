import express from "express";
const router = express.Router();

import { register } from "../controllers/user.controller.js";

//USER
router.post("/register", register);
// router.get("/register", getUsers);

export default router;
