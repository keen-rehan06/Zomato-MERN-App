import userModel from "../models/user.model.js";
import partnerModel from "../models/partner.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import generateTokens from "../config/generateToken.js";


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
    const token = generateTokens(user);
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
         
        const token = generateTokens(user);
        res.cookie("token",token);
        res.status(200).send({message:"User Logged In Successfully!",data:newUser})    
    })
}

export const logoutUser = async (req,res) => {
    res.clearCookie("token")
    res.status(200).send({message:"User Logout Successfully!!"})
}

export const createPartner = async(req,res) => {
try {
    const {name,email,password} = req.body;
    const hash = await bcrypt.hash(password,10)
    const partner = await partnerModel.create({
        name,
        email,
        password:hash
    })
     const newPartner = await partnerModel
   .findById(partner._id)
   .select("-password");
    const token =  generateTokens(partner);
     res.cookie("token",token);
     res.status(201).send({message:`Partner Has Been Created SuccessFully!!`,succcess:true,data:newPartner});
} catch (error) {
    return res.status(500).send({message:"Failed To Create Partner Account!!",success:false})
}
}

export const loginPartner = async(req,res) => {
   try {
    const {email,password} = req.body;
   const partner = await partnerModel.findOne({email});
      const isMatch = await bcrypt.compare(password,partner.password);
    if(!isMatch){
        return res.status(401).send({
            message:"Password Incorrect!",
            success:false
        });
    }
       const newPartner = await partnerModel
   .findById(partner._id)
   .select("-password");
       const token = generateTokens(partner);
       res.cookie("token",token);
       res.status(200).send({message:`${partner.email} loggedIn SuccessFully!!`,success:true,data:newPartner})
   } catch (error) {
    return res.status(500).send({message:"Failed To Login Partner Account!!",success:false})
   }
}

export const logOutPartner = async(req,res) => {
   try {
     res.clearCookie("token");
     res.status(200).send({ message:"User Logout Successfully!!",})
   } catch (error) {
    return res.send("Logout failed")
   }
}