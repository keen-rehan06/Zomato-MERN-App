import userModel from "../models/user.model.js";

export const createUserMiddleWare = async (req,res,next) => {
  try {
    const {email} = req.body;

    const find = await userModel.findOne({email});
    if(find){
      return res.status(400).send({message:"User already registered"});
    }

    next();
  } catch(err){
    res.status(500).send({message:"Server error"});
  }
}


export const loginUserMiddleWare = async(req,res,next) => {
  const {email,password} = req.body
    const user = await userModel.findOne({email});
   if(!user) return res.status(401).send({message:"User does not exist"});
   if(!email || !password) return res.status(401).send({message:"All fields are required!!"})
    next()
} 