import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import dbConnect from "./db/db.js"
import userRoute from "./routes/user.routes.js"
import partnerRoute from "./routes/partner.routes.js"

dotenv.config("./.env");

(async()=>{
    try {
        await dbConnect();
    } catch (error) {
        console.log("MongoDb connection Failed: ",error)
    }
})()
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/user",userRoute)
app.use("/partner",partnerRoute)

app.get("/",function(req,res){
    res.send("Hello world!");
})

app.listen(process.env.PORT,function(){
    console.log(`App is running on port ${process.env.PORT}`)
});