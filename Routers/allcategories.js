const express= require('express');
const {Categories,Westerndresscollections,Specialsareecollections, StylishKurtiCollections,TrendingKurtiCollections,FashionSareeCollections,TopSellingKurti,TopSareeCollectins,BridalWeddingCollection,Dressesforyou,
    WesternDressesForWomen,StellarStylesForHim,WomenSareecollections,LongKurtiCollections,NewArrivalsTrousers ,
    Swaiper1,Swaiper2,Swaiper3,Swaiper4,Swaiper5,Swaiper6 } = require('../data')

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
router.get('/WSC',(req,res)=>{
    res.json({status:true,WomenSareecollections})
})   
router.get('/LKC',(req,res)=>{
    res.json({status:true,LongKurtiCollections})
})   
router.get('/NAT',(req,res)=>{
    res.json({status:true,NewArrivalsTrousers})
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

