import userModel from "../models/user.model.js";
import partnerModel from "../models/partner.model.js"
import jwt from "jsonwebtoken";

export const createUserMiddleWare = async (req, res, next) => {
  try {
    const { email } = req.body;

    const find = await userModel.findOne({ email });
    if (find) {
      return res.status(400).send({ message: "User already registered" });
    }

    next();
  } catch (err) {
    res.status(500).send({ message: "Server error" });
  }
}

export const loginUserMiddleWare = async (req, res, next) => {
  const { email, password } = req.body
  const user = await userModel.findOne({ email });
  if (!user) return res.status(401).send({ message: "User does not exist" });
  if (!email || !password) return res.status(401).send({ message: "All fields are required!!" })
  next()
}

export const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized! Please login first."
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next()
  } catch (error) {
     res.status(500).send({message:"something went wrong!!",success:false,error})
  }
}

export const createPartnerMiddleWare = async (req, res, next) => {
  try {
     const { name, email, password } = req.body;
  const partner = await partnerModel.findOne({ email });
  if (partner) return res.status(500).send("User Already Exist!");
  if (!name || !email || !password) return res.status(500).send({ message: "All fields are required!!",success:true});
  next();
  } catch (error) {
    res.status(500).send({message:"Failed to Create Partner Account!!",success:false},error)
  }
}

export const LoginPartnerMiddleWare = async (req,res,next) => {
  try {
    const {email,password} = req.body;
  const partner = await partnerModel.findOne({email});
   if(!partner) return res.status(401).send({message:"User doesn't Exist",success:false});
   if(!email || !password) return res.status(500).send({message:"All fields are required!",success:false})
  next()
  } catch (error) {
  return res.status(500).send({message:"Failed to Login!!",success:false});  
  }
}

