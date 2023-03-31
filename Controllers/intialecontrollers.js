
const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const intiale = require('../Model/intialeModel');
const asyncHandler = require('express-async-handler');



const getintiale = async (req, res) => {
    let data = await intiale.find({ user_id: req.user});
    
    if(!data.length){
        res.status(200).json({ status: false, massage: "intiale is empty"})
    }
    console.log("====>", data);
    res.status(200).json({ status: true, data})
    
    }
    


const postintiale = async (req, res) => {

    const { title, dis} = req.body
    if (!title && !dis ) {
        res.status(400).json({ message: "Please add all Filed"})
    }
    let data = await intiale.create({ 
        title,
        dis,
        user_id:req.user

    });
    console.log("====>", data);
    res.status(200).json(data)
}

const deleteintiale=  async(req,res)=>{
   
    let findidss = await intiale.findById(req.params._id);
    console.log("=======findidss==========>>",findidss);

    console.log("=================>>",req.params._id);
     if(!findidss){
         res.status(400);
         res.send("user not found");
     }
        const deleteResult = await intiale.deleteMany({ _id:  findidss._id });
       console.log("=======deleteResult======>",deleteResult)
     res.status(200).json({message : `delete data ${req.params._id}`});
  }




module.exports = {
    getintiale, postintiale,deleteintiale
}