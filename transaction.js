const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
        
    },
    amount:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
        
    }
})

const transaction = mongoose.model("transaction",transactionSchema);
module.exports = transaction;