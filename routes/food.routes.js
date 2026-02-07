import express from "express";
import {isLoggedIn} from "../middlewares/auth.middleware.js"
import { foodItem } from "../controllers/food.controller.js";
import upload from "../config/multer.config.js"

const app = express.Router();

app.post('/create',isLoggedIn,upload.single("video"),foodItem);

export default app;