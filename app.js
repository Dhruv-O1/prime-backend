const express = require("express"); //express....
const mongoose = require("mongoose");
const cors = require("cors")



const app = express()
app.use(express.json())

app.use(cors())

const formRoutes = require("./routes/formRoutes")
app.use("/form",formRoutes)









mongoose.connect("mongodb://127.0.0.1:27017/prime").then(()=>{
    console.log("Database connected ....");
    
}).catch((err) => {
    console.log(err);
    console.log("Database not connected...");
    
    
})

const PORT = 3011
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
    
})