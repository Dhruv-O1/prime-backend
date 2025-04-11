const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const primeSchema = new Schema({
    name:{
        type: String,
    },
    number:{
        type:Number,
    },
    age:{
        type:Number,
    }
})

module.exports = mongoose.model("prime",primeSchema)