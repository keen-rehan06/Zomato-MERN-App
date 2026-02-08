import express from "express"
import { createUser,loginUser, logoutUser } from "../controllers/auth.controller.js";
import { createUserMiddleWare,isLoggedIn,loginUserMiddleWare } from "../middlewares/auth.middleware.js"

const app = express.Router();

app.post("/create",createUserMiddleWare,createUser);
app.post("/login",loginUserMiddleWare,loginUser)
app.post("/logout",isLoggedIn,logoutUser)

export default app