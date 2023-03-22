 
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
    res.status(200).json(data)

}

const deleteaddress = async(req,res)=>{
    const findid = await address.findById(req.params._id)
    if(!findid){
        res.status(400),
        res.status(400).json({ message: "user not found" })

    }

    await findid.remove();

    res.status(200).json({message : `delete data ${req.params.id}`});

}

module.exports = {
    getaddress,
    postaddress,
    deleteaddress
}