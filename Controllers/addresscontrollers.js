 
const jwt = require('jsonwebtoken')
const mongodb = require('mongodb')
const address = require('../Model/addressModel')

const getaddress = async(req,res)=>{
    const data = await address.find({ user_id: req.user})

    if(!data.length){
        res.status(200).json({ status: false, massage:"address is empty"})
    }
    console.log("=====>",data);
    res.status(200).json({ status:true, massage: data})
    
}

const postaddress = async(req,res)=>{
    const { firstName,lastName,phoneNumber,streetAddress,locality,townCity,postCode,state,addresstype } = req.body
    if(!firstName && !lastName && !phoneNumber && !streetAddress && !locality && !townCity && !postCode && !state && !addresstype) {
        res.status(400).json({ massage : "Please add all Filed"})
    }
    let data = await address.create({
        firstName,
        lastName,
        phoneNumber,
        streetAddress,
        locality,
        townCity,
        postCode,
        state,
        addresstype,
        user_id:req.user

    })
    console.log("====>", data);
    res.status(200).json({status:true, data})

}

const deleteaddress=  async(req,res)=>{
   
    let findidss = await address.findById(req.params._id);
    console.log("=======findidss==========>>",findidss);

    console.log("=================>>",req.params._id);
     if(!findidss){
         res.status(400);
         res.send("user not found");
     }
        const deleteResult = await address.deleteMany({ _id:  findidss._id });
       console.log("=======deleteResult======>",deleteResult)
     res.status(200).json({message : `delete data ${req.params._id}`});
  }



module.exports = {
    getaddress,
    postaddress,
    deleteaddress
}