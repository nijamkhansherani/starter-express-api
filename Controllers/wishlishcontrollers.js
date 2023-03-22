
const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const wishlish = require('../Model/wishlishModel');
const asyncHandler = require('express-async-handler');



const getwishlish = async (req, res) => {
    let data = await wishlish.find({ user_id: req.user});
    
    if(!data.length){
        res.status(200).json({ status: false, massage: "cart is empty"})
    }
    console.log("====>", data);
    res.status(200).json({ status: true, massage: data})
    
    }
    


const postwishlish = async (req, res) => {

    const { title, dis, price,img} = req.body
    if (!title && !dis && !price && !img ) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await wishlish.create({ 
        title,
        dis,
        img,
        price,
        user_id:req.user

    });
    console.log("====>", data);
    res.status(200).json(data)
}

const deletewishlish=  async(req,res)=>{
   
    let findidss = await wishlish.findById(req.params._id);
    console.log("=======findidss==========>>",findidss);

    console.log("=================>>",req.params._id);
     if(!findidss){
         res.status(400);
         res.send("user not found");
     }
        const deleteResult = await wishlish.deleteMany({ _id:  findidss._id });
       console.log("=======deleteResult======>",deleteResult)
     res.status(200).json({message : `delete data ${req.params._id}`});
  }




module.exports = {
    getwishlish, postwishlish,deletewishlish
}