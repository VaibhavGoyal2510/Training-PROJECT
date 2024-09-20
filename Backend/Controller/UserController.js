const { isDecimal } = require('validator');
const User =require('../model/UserModel');
const { use } = require('../routes/UserRoutes');
const bcrypt = require('bcrypt')


exports.signUp = async(req,res,next)=>{
    try {
        const {email}=req.body;
        const isExistingUser = await User.findOne({email});
        console.log(isExistingUser);
        // Checking if user already exists
        if(isExistingUser){
        //    return res.status(404).send("Pehle se hi user hai tu");
        throw new Error("User Already exists");

        }

        // 
        const user = await User.create(req.body)
        if(user){
            res.status(201).json({
                message:"User Registered Successfully",
                data:user
            })
        }
    } catch (error) {
        // return res.status(400).send(error.message)
        next(error);
    }
}


exports.login = async (req,res,next)=>{
    // step1 check if user is registered
    try {
        const {email,password}= req.body;
        const user = await User.findOne({email})
        console.log(user);
        if(!user){
            throw new Error("User is not registered");
        }

        // Check if password is matched
        // const isPasswordMatch = await bcrypt.compare(password,user.password)
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        // console.log(isPasswordMatch);

        if(!isPasswordMatch){
            throw new Error("Password do not match, Please try Again")
        }

        res.status(200).json({
            message:"Login Successfully"
        })

    } catch (error) {
        next(error)
    }
}