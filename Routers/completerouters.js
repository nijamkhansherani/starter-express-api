const express= require('express');
const protect = require('../Middleware/completemiddleware')

const { getcomplete, postcomplete, deletecomplete } = require('../Controllers/completecontrollers');
const router = express.Router(); 
router.use(express.json())


router.get('/',protect,getcomplete)    
router.post('/add',protect,postcomplete)
router.delete('/:_id',protect,deletecomplete)


module.exports = router;