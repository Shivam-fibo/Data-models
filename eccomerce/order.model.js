import mongoose from "mongoose";
import { User } from "./user.mode";

const orderItemSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    quantity : {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({

    orderPrice:{
        type : Number,
        required : true
    },
    cutomer:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems :{
        type: [orderItemSchema]
    },
    status:{
        type: String,
        enum:["PENDING" , "CANCELLED" , "DELIVERED"],
        default: "PENDING"
    }
    
}, {timestamps : true})

export const Order = mongoose.model("Order", orderSchema)