import express from "express"
import { createUser,loginUser } from "../controllers/auth.controller.js";
import { createUserMiddleWare,loginUserMiddleWare } from "../middlewares/auth.middleware.js"

const app = express.Router();

app.post("/create",createUserMiddleWare,createUser);
app.post("/login",loginUserMiddleWare,loginUser)

export default app