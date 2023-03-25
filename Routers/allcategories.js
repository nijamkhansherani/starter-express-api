const express= require('express');
const {Categories,Westerndresscollections,Specialsareecollections, StylishKurtiCollections,TrendingKurtiCollections,FashionSareeCollections,TopSellingKurti  } = require('../data')

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
router.get('/SKC',(req,res)=>{
    res.json({status:true,StylishKurtiCollections})
})  
router.get('/TKC',(req,res)=>{
    res.json({status:true,TrendingKurtiCollections})
}) 
 router.get('/FSC',(req,res)=>{
    res.json({status:true,FashionSareeCollections})
}) 
 router.get('/TSK',(req,res)=>{
    res.json({status:true,TopSellingKurti})
})  

module.exports = router;