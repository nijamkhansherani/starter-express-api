const express= require('express');
const app = express();
const {categories } = require('./data');
//const router = express.Router();
//router.use(express.json())

app.get ('/',categories)

app.listen(5000);


//module.exports = router