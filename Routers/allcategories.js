const express= require('express');
const {Categories,Deshbord, Swaiper1,Swaiper2,Swaiper3,Swaiper4,Swaiper5,Swaiper6 } = require('../data')

const router = express.Router();

router.use(express.json())


router.get('/',(req,res)=>{
    res.json({status:true,Categories})
})   
router.get('/Deshbord',(req,res)=>{
    res.json({status:true,Deshbord})
})     


router.get('/Swaiper1',(req,res)=>{
    res.json({status:true,Swaiper1})
})   
router.get('/Swaiper2',(req,res)=>{
    res.json({status:true,Swaiper2})
})   
router.get('/Swaiper3',(req,res)=>{
    res.json({status:true,Swaiper3})
})   
router.get('/Swaiper4',(req,res)=>{
    res.json({status:true,Swaiper4})
})   
router.get('/Swaiper5',(req,res)=>{
    res.json({status:true,Swaiper5})
})   
router.get('/Swaiper6',(req,res)=>{
    res.json({status:true,Swaiper6})
})   


module.exports = router;

