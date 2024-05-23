
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    userInput:
    {
        type:String,
        required:true
    },

    userOwner:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }

})

const todoModel = mongoose.model("todoInput",todoSchema)
module.exports = todoModel