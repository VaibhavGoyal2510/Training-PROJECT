const { isDecimal } = require('validator');
const User =require('../model/UserModel')


exports.signUp = async(req,res)=>{
    try {
        const {email}=req.body;
        const isExistingUser = await User.findOne({email});
        console.log(isExistingUser);
        // Checking if user already exists
        if(isExistingUser){
           return res.status(404).send("Pehle se hi user hai tu");

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
        return res.status(400).send(error.message)
    }
}