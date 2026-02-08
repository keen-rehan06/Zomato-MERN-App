import express from "express";
import { LoginPartnerMiddleWare,createUserMiddleWare,isLoggedIn } from "../middlewares/auth.middleware.js";
import { loginPartner,createPartner,logoutUser } from "../controllers/auth.controller.js";

const app = express.Router();

app.post("/create",createUserMiddleWare,createPartner);
app.post("/login",LoginPartnerMiddleWare,loginPartner);
app.post("/logout",isLoggedIn,logoutUser);

export default app; 