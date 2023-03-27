const mongoose = require('mongoose');
const ConnectDB= async()=>{
    try{
        const connect = await mongoose.connect('mongodb+srv://nijamakhan373:zJ1xO3xWnwEDene3@nijam.zrcpiun.mongodb.net/test')
        console.log(connect);

    }
    catch(error){
 console.log("======>",error);
        process.exit(1)
    }
}

module.exports = ConnectDB;