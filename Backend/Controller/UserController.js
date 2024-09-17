const User =require('../model/UserModel')


exports.signUp = async(req,res)=>{
    try {
        const {email}=req.body;
        const isExistingUser = await User.findOne({email});
        console.log(isExistingUser)
    } catch (error) {
        res.status(400)
    }
}