import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { fileURLToPath } from "url";
import path from "path";
import dbConnect from "./db/db.js"
import userRoute from "./routes/user.routes.js"
import partnerRoute from "./routes/partner.routes.js"
import foodRoute from "./routes/food.routes.js"

dotenv.config();

(async()=>{
    try {
        await dbConnect();
    } catch (error) {
        console.log("MongoDb connection Failed: ",error)
    }
})()

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/user",userRoute)
app.use("/partner",partnerRoute)
app.use("/food",foodRoute)

app.get("/",function(req,res){
    res.send("Hello world!");
})

app.listen(process.env.PORT,function(){
    console.log(`App is running on port ${process.env.PORT}`)
});