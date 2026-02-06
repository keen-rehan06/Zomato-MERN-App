import userModel from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const createUser = async (req,res) => {
     try {
          const {name,username,email,password} = req.body;
    const hash = await bcrypt.hash(password,12); 
    const user = await userModel.create({
        name,
        username,
        email,
        password:hash 
    })
    const newUser = await userModel
   .findById(user._id)
   .select("-password");
    const token = jwt.sign({id:user._id,email:user.email},process.env.SECRET_TOKEN);
    res.cookie("token",token);
    res.status(201).send({message:"User created Successfully!",data:newUser })

     } catch (error) {
        res.status(500).send({message:"Error",data:error})
     }  
}

export const loginUser = async (req,res) => {
    const {email,password} = req.body
    const user = await userModel.findOne({email});
     const newUser = await userModel
   .findById(user._id)
   .select("-password");
    bcrypt.compare(password,user.password,function(err,result){
        if(err) return res.status(500).send({message:"Something went wrong!!",err});
        if(!result) return res.status(500).send({message:"Incorrect password!!"})
         
        const token = jwt.sign({email:user.email,id:user._id},process.env.SECRET_TOKEN);
        res.cookie("token",token);
        res.status(200).send({message:"User Logged In Successfully!",data:newUser})    
    })
}

