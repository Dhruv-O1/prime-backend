const formModel = require("../models/formModel")

const addData = async (req,res) => {
    const addedData = await formModel.create(req.body)
    console.log(addedData);
    res.status(201).json({
        message:"Data added succesfully",
        data: addedData
    })
    
}
const getData = async (req,res) => {
    const gettedData = await formModel.find()
    console.log(gettedData);
    res.status(201).json({
        message:"Data fetched succesfully",
        data: gettedData
    })
    
}

module.exports = {addData, getData}