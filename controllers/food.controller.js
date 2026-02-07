import foodModel from "../models/food.model.js";
import { uploadFunc } from "../services/storage.service.js";
import { v4 as uuid } from "uuid";

const id = uuid(); 

export const foodItem = async (req,res) => {
    const uploadFile = await uploadFunc(req.file.buffer,uuid());
    
    res.status(200).send("Done!!")
}
