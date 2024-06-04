const express = require("express");
const { getTransactions, addTransaction} = require("../controller/transactions");

const transactionRouter = express.Router();

transactionRouter.get("/getallTransactions",getTransactions);
transactionRouter.post("/addTransaction",addTransaction);
// transactionRouter.delete("/delete_transaction:_id",deleteTransaction);

module.exports=transactionRouter;


