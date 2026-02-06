import express from "express";
import {isLoggedIn} from "../middlewares/auth.middleware.js"
import { foodItem } from "../controllers/food.controller.js";

const app = express.Router();

app.post('/create',isLoggedIn,foodItem);

export default app;