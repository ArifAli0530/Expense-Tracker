const port = 8000;
const express= require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const transactionRouter = require("./routes/transactions");
const app=express();

const connectDb = async()=>{
    try {
        const connect = await mongoose.connect("mongodb+srv://aa9884433:mk1234@cluster0.legpiyo.mongodb.net/")
        if(connect){
            console.log(" Your mongoDb is connected successful..")
        }

    } catch (error) {
        console.log(error);
    }

}
connectDb();

app.use(cors()) 

app.use(bodyparser.json({
    limit : '100mb',
    extended: true
}))

app.use(bodyparser.urlencoded({
    limit : '100mb',
    extended: true
}));

app.get("/",(req,res)=>{
    res.send("Heyy buddy")
})

app.use("/transaction",transactionRouter);

app.listen(port,()=>{
    console.log('server is running kaifu...');
})