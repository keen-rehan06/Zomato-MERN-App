import foodModel from "../models/food.model.js";
import partnerModel from "../models/partner.model.js"
import { uploadFunc } from "../services/storage.service.js";
import { v4 as uuid } from "uuid";

const id = uuid(); 

export const foodItem = async (req,res) => {
  try {
      const uploadFile = await uploadFunc(req.file.buffer,uuid());
    const {name,description,video,FoodPartner} = req.body;
    const foodItem = await foodModel.create({
      name,
      description,
      video:uploadFile.url,
      FoodPartner:req.user.id
    })
    res.status(200).send({message:"food Created SuccessFully!!",data:foodItem})
  } catch (error) {
    return res.status(500).send({message:"Server Error.",error})
  }
}

export const getFoodItems = async (req,res) => {
    try {
         const food = await foodModel.find();
     res.status(200).send({message:"foodItem Fetched Successfully!!",success:true,data:food})
    } catch (error) {
     res.status(500).send({message:"Failed to Fetched foodItem!!",success:false,error})
    }
}
