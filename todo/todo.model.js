import mongoose from 'mongoose'

const todoModel = new mongoose.Schema({
    name:{
        typeof: String,
        require:True
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})