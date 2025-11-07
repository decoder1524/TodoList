import userModel from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const registerController = async (req,res)=>{
    try {
        const {username,email,password}  = req.body
        if(!username|| !email || !password){
            return res.status(500).send({
                success:false,
                message:'Please provide all fields'
            })
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(409).send({
                success:false,
                message:'User Already Exist'
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new userModel({username,email,password:hashedPassword})
        await newUser.save()
        res.status(200).send({
            success:true,
            message:"User Registration Successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Register API',
            error
        })
        
    }
}
const loginController = async (req,res)=>{
    try {
         console.log("✅ Login API hit");
    console.log("📦 Request body:", req.body);
        const {email,password}  = req.body
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Invalid email and password'
            })
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(500).send({
                success:false,
                message:"Invalid Credentials"
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
        res.status(200).send({
            success:true,
            message:"User login Successfully",
            token,
            user : {
                id:user._id,
                email:user.email,
                username : user.username
            }
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Login API',
            error:error.message
        })
        
    }
}

export {registerController,loginController}