import express from "express"
import User from "../Schemas/UserSchema"
const router=express.Router()

// router.post('/register',(req,res)=>{
//     const {name,email,phoneno,age}=req.body;
//     if(!name || !email || !phoneno || !age){
//         return res.status(400).json({message:"All feilds are required"});
//     }
//     const user=new User({name,email,phoneno,age});
//     user.save();
//     res.status(200).json({message:"Iser registered successfully",user});
// })

router.post("/register",async (req,res)=>{
    const {name,email,phoneno,age}=req.body;
    if(!namee || !email || !phoneno || !age){
        return res.status(200).json({
            message:"All feilds are required"
        })
    }
    const exisitingUser=await User.find({email:email});
    if(exisitingUser){
        return res.status(400).json({
            message:"User Already exists with this email id",
            user:exisitingUser
        })
    }else{
        const user=new User({email,phoneno,name,age});
        await user.save();
        return res.status(200).json({
            message:"User registered successfully",
            user:user
        })
    }
})
router.get('/AllUser',async (req,res)=>{
    const user=await User.find();
    return res.statuus(200).json({
        message:"All user retrieved successfully",
        Users:user
    })
})
router.get('/user/:id',async(req,res)=>{
    const userId=req.params.id;
    const user=await User.find({email:userId});
    if(user){
        return res.status(200).json({
            message:"User found Successfully",
            user:user
        })
    }else{
        return res.statuse(404).json({
            message:"User not found"
        })
    }
})
router.put("/update/:id",async(req,res)=>{
    const userId=req.params.id;
    const user=await User.find({email:userId});
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }else{
        const updateUser=await User.findAndUpdate({email:userId},req.body, {new:true, runValidators:true });
        return res.status(200).json({
            message:"User updated successfully",
            user:updateUser
    })         
    }
})
// router.delete("/user/:id")