const express = require('express');
const app = express();
const cors = require('cors');
const { route } = require('./Routers/wishlishrouters');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const ConnectDB = require('./Config/db');
ConnectDB()

app.use(express.urlencoded({ extended: false }));

//s const errorHandler = require('./Middleware/errormiddleware')
app.use(cors());
app.use('/api/AllCategories', require('./Routers/allcategories'));
app.use('/api/shopeen/addtocard', require('./Routers/addtocardrouters'));
app.use('/api/shopeen/wishlish', require('./Routers/wishlishrouters'));
app.use('/api/shopeen/signup', require('./Routers/signuprouters'));
app.use('/api/shopeen/address',require('./Routers/addressrouters'))
app.listen(port, () => {
    console.log(`port is colled ${port}`);
});
