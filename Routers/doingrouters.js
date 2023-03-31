const express= require('express');
const protect = require('../Middleware/doingmiddelware')

const { getdoing, postdoing, deletedoing } = require('../Controllers/doingcontrollers');
const router = express.Router(); 
router.use(express.json())


router.get('/',protect,getdoing)    
router.post('/add',protect,postdoing)
router.delete('/:_id',protect,deletedoing)


module.exports = router;