const express= require('express');
const {Categories,Westerndresscollections,Specialsareecollections, StylishKurtiCollections,TrendingKurtiCollections,FashionSareeCollections,TopSellingKurti,TopSareeCollectins,BridalWeddingCollection,Dressesforyou,WesternDressesForWomen,StellarStylesForHim  } = require('../data')

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
router.get('/TSC',(req,res)=>{
    res.json({status:true,TopSareeCollectins})
})   
router.get('/BWC',(req,res)=>{
    res.json({status:true,BridalWeddingCollection})
})   
router.get('/DFU',(req,res)=>{
    res.json({status:true,Dressesforyou})
})   
router.get('/WDFW',(req,res)=>{
    res.json({status:true,WesternDressesForWomen})
})   
router.get('/SSF',(req,res)=>{
    res.json({status:true,StellarStylesForHim})
})   

module.exports = router;