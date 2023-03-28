const express= require('express');
const {Categories,Deshbord,allSwaiper } = require('../data')

const router = express.Router();

router.use(express.json())


router.get('/',(req,res)=>{
    res.json({status:true,Categories})
})   
router.get('/Deshbord',(req,res)=>{
    res.json({status:true,Deshbord})
})     


router.get('/allSwaiper',(req,res)=>{
    res.json({status:true,allSwaiper})
})   


module.exports = router;

