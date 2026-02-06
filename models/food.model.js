import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    video:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    FoodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"partner"
    },
})

const foodModel = new mongoose.model("food",foodSchema);

export default foodModel;