const express= require('express');
const protect = require('../Middleware/wishmiddleware')

const { getwishlish, postwishlish, deletewishlish } = require("../Controllers/wishlishcontrollers");
const router = express.Router(); 
router.use(express.json())


router.get('/',protect,getwishlish)    
router.post('/add',protect,postwishlish)
router.delete('/:_id',protect,deletewishlish)


module.exports = router;