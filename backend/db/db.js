import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log("MongoDb Connected Successfully!!")
    } catch (error) {
        console.log("MongoDb connection Failed: ",error)
    }
}

export default dbConnect;