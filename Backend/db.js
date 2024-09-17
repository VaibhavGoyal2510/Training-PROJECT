const { default: mongoose } = require("mongoose")

const colors=require('colors');  // For customize colors in console


const dbConnect= async()=>{
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/Ecommerce');
        console.log(colors.blue("Successful Connection.."))
    } catch (error) {
        console.log(colors.red(error));
    }
}

module.exports = dbConnect;