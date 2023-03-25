const express = require('express');
const app = express();

const { route } = require('./Routers/wishlishrouters');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const ConnectDB = require('./Config/db');
const cors=require("cors");
app.use(cors());
// const corsOptions ={
//    origin:'*', 
//    credentials:true,   optionSuccessStatus:200,
// }

//app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }));

//s const errorHandler = require('./Middleware/errormiddleware')
app.use('/api/AllCategories', require('./Routers/allcategories'));
app.use('/api/shopeen/addtocard', require('./Routers/addtocardrouters'));
app.use('/api/shopeen/wishlish', require('./Routers/wishlishrouters'));
app.use('/api/shopeen', require('./Routers/signuprouters'));
app.use('/api/shopeen/address',require('./Routers/addressrouters'))
app.use('/api/malefaction',require('./Routers/productrouter'))
app.listen(port, () => {
    console.log(`port is colled ${port}`);
});
