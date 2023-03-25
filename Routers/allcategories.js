const express= require('express');
const {Categories,Westerndresscollections } = require('../data')

const router = express.Router();

router.use(express.json())


router.get('/',(req,res)=>{
    res.json({status:true,Categories})
})    
router.get('/WDC',(req,res)=>{
    res.json({status:true,Westerndresscollections})
})  
router.get('/SSC',(req,res)=>{
    res.json({status:true,Specialsareecollections})
})  


module.exports = router;