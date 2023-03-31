
const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const doing = require('../Model/doingModel');
const asyncHandler = require('express-async-handler');



const getdoing = async (req, res) => {
    let data = await doing.find({ user_id: req.user});
    
    if(!data.length){
        res.status(200).json({ status: false, massage: "doing is empty"})
    }
    console.log("====>", data);
    res.status(200).json({ status: true, data})
    
    }
    


const postdoing = async (req, res) => {

    const { title, dis} = req.body
    if (!title && !dis ) {
        res.status(400).json({ message: "Please add all Filed"})
    }
    let data = await doing.create({ 
        title,
        dis,
        user_id:req.user

    });
    console.log("====>", data);
    res.status(200).json(data)
}

const deletedoing=  async(req,res)=>{
   
    let findidss = await doing.findById(req.params._id);
    console.log("=======findidss==========>>",findidss);

    console.log("=================>>",req.params._id);
     if(!findidss){
         res.status(400);
         res.send("user not found");
     }
        const deleteResult = await doing.deleteMany({ _id:  findidss._id });
       console.log("=======deleteResult======>",deleteResult)
     res.status(200).json({message : `delete data ${req.params._id}`});
  }




module.exports = {
    getdoing, postdoing,deletedoing
}