import mongoose, { model } from 'mongoose'

const userData = new mongoose.Schema(
    {
        email:{
            typeof : String,
            require : true,
            unique: true
        },
        password : {
            typeof: String,
            require: true
        }
     }
) 

export const User = mongoose.model("User", userData) 
 