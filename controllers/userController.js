import User from "../models/User.js"
import { registerUser } from './userController';

// @desc Register User
//@path /api/v1/users/register
//@acccess Public


export const registerUser=async(req,res)=>{
    try{
       const {fullName,email,password}=req.body
       const existingUser=await User.findone({email:email})
         if (existingUser){
            return res.json({
              message:"user exists already please login"
            })


         }
         const user=await User.create({
           fullName,
           email,
           password
         })
          res.status(201).json({
            status:"success",
            message:"user registered",
          })


          export const loginUser=async (req,res)=>{
          try{
            const {email,password}=req.body
            const existingUser=await.User.findone({email:email})
          

          }





          }

       


    }











