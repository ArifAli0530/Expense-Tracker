const transaction = require("../models/transaction.js");


exports.getTransactions=async (req,res)=>{
    try {
        const transactions = await transaction.find();
        res.send({transactions,msg:"All Transactions"})

    } catch (error) {
        console.log(error);
    }
  
}

exports.addTransaction=async (req,res)=>{
    try {
        const updatedTrans = new transaction(req.body);
       const added= await updatedTrans.save();
        res.send({added,msg:" New transaction Added.."})
    } catch (error) {
        console.log(error);
        
    }
   
}

// // exports.deleteTransaction=async (req,res)=>{
// //     try {
// //         await transaction.findByIdAndDelete(req.params.id);
// //         res.send(" Transaction deleted")
        
// //     } catch (error) {
// //         console.log(error);
        
// //     }
    
// }