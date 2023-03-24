
const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const addtocard = require('../Model/addtocardModel');
const asyncHandler = require('express-async-handler');



const getaddtocard = async (req, res) => {
let data = await addtocard.find({ user_id: req.user});

if(!data.length){
    res.status(400).json({ status: false, massage: "cart is empty"})
}
console.log("====>", data);
res.status(200).json({ status: true, massage: data})

}



const postaddtocard = async (req, res) => {

    const { title, Image, disPrice, sellingPrice,disPrsent,color,COD,Status,size, quentity } = req.body
    if (!title && !Image && !disPrice && !sellingPrice && disPrsent && color && !COD && !Status && !size && !quentity ) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await addtocard.create({ 
        title,
        Image,
        disPrice,
        sellingPrice,
        disPrsent,
        color,
        COD,
        Status,
        size,
        quentity,
        user_id:req.user

    });
    console.log("====>", data);
    res.status(200).json(data)
}


const deleteaddtocard=  async(req,res)=>{
   
    let findidss = await addtocard.findById(req.params._id);
    console.log("=======findidss==========>>",findidss);

    console.log("=================>>",req.params._id);
     if(!findidss){
         res.status(400);
         res.send("user not found");
     }
        const deleteResult = await addtocard.deleteMany({ _id:  findidss._id });
       console.log("=======deleteResult======>",deleteResult)
     res.status(200).json({message : `delete data ${req.params._id}`});
  }




module.exports = {
    getaddtocard, postaddtocard, deleteaddtocard
}