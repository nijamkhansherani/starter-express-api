const express= require('express');
const Categories = require('../data')

const router = express.Router();

router.use(express.json())


router.get('/',(req,res)=>{
    res.json({status:true,data:Categories})
})    


module.exports = router;