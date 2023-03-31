const express= require('express');
const protect = require('../Middleware/intialemiddleware')

const { getintiale,postintiale,deleteintiale } = require('../Controllers/intialecontrollers');
const router = express.Router(); 
router.use(express.json())


router.get('/',protect,getintiale)    
router.post('/add',protect,postintiale)
router.delete('/:_id',protect,deleteintiale)


module.exports = router;