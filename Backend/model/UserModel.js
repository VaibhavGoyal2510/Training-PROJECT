// Name // Email //phone //password 
const { kMaxLength } = require('buffer');
const mongoose =require('mongoose');
const validator = require('validator');
const bcrypt= require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is Required"],
        maxLength:[20,"Name cannot exceed40 characters"]
    },
    email:{
        type: String,
        required:[true,"Email is required"],
        unique:true,
        validate:{
            validator: function(value){
                return validator.isEmail(value);
            },
            message:"Please Enter a Valid Email"
        }
    },
    phone: {
    
            type: String,
            required: [true, "Phone no. is required"],
            unique: true,
            validate: {
                validator: function (value) {
                    return validator.isMobilePhone(value, 'any'); // Use 'any' to support various phone formats
                },
                message: "Please Enter a Valid Phone Number"
            }
        
        
    },
    password:{
        type:String,
        required:[true,"Password is Required"],
        validate:{
            validator:function (value){
                return validator.isStrongPassword(value,{
                    minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
                })
            },
            message:"Password must contain 1 lowercase 1uppercase 1number and 1 symbol"
        }
    }
})

userSchema.pre('save',async function(next){
    console.log('Document Saved');
   
    if(!this.isModified('password'))
    {
        return next()
    }
        // next()
        this.password= await bcrypt.hash(this.password,12);
        next();
})

const User = mongoose.model("User",userSchema);

module.exports=User;



// Role