const express = require('express');
const app = express();
const multer = require('multer');

const { route } = require('./Routers/wishlishrouters');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const path = require('path');
app.use("/uploads/images", express.static(path.join("uploads", "images")));


const ConnectDB = require('./Config/db');
const cors=require("cors");
const fileUpload = require('./Utils/fileUpload');
ConnectDB()
const corsOptions ={
   origin:'*', 
   credentials:true,optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }));

app.use('/api/AllCategories', require('./Routers/allcategories'));
app.use('/api/shopeen/addtocard', require('./Routers/addtocardrouters'));
app.use('/api/shopeen/wishlish', require('./Routers/wishlishrouters'));
app.use('/api/shopeen', require('./Routers/signuprouters'));
app.use('/api/shopeen/address',require('./Routers/addressrouters'))
app.use('/api/malefaction',require('./Routers/productrouter'))
app.use('/api/intiale',require('./Routers/intialerouters'))
app.use('/api/todo',require('./Routers/todorouters'))
app.use('/api/doing',require('./Routers/doingrouters'))
app.use('/api/complete',require('./Routers/completerouters'))



app.listen(port, () => {
    console.log(`port is colled ${port}`);
});


app.post(
    "/create",
    fileUpload("profile").array("photo", 5),

    (req, res) => {
        console.log("====dddd.body==>>", req.body);
        console.log("------->>>", req.files);
        res.json({ message: "image added...", image: `https://awsnodejs.onrender.com/uploads/images/profile/${req.files[0].filename}` })
    }
);