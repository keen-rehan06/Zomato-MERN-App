import foodModel from "../models/food.model.js";

export const foodItem = async (req,res) => {
    console.log(req.user)
    res.status(200).send("Done!!")
}