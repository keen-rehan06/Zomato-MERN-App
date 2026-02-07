import foodModel from "../models/food.model.js";
import { uploadFunc } from "../services/storage.service.js";

export const foodItem = async (req,res) => {
    const uploadFile = await uploadFunc(req.file.buffer);
    console.log(uploadFile);
    res.status(200).send("Done!!")
}
