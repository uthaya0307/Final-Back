const mongoose=require('mongoose');


const loginTemplate = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },

        email:{
            type:String,
            required:true,
        },
        contact:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true,
        },
        Date:{
            type:Date,
            default:Date.now,
        },
    }
)

module.exports=mongoose.model('Loginform',loginTemplate) //colection name : sample table