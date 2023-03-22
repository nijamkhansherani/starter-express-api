const express = require('express')
const protect = require('../Middleware/addressmiddleware')

const { getaddress, postaddress, deleteaddress } = require('../Controllers/addresscontrollers');
const router = express.Router();

router.use(express.json())

router.get('/',protect,getaddress)
router.post('/',protect,postaddress)
router.delete('/:_id',protect,deleteaddress)

module.exports = router