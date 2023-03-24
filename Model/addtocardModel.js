const mongoose = require('mongoose');
const addtocard = new mongoose.Schema({
    title: {  type: String },
    Image: {type: String},
    disPrice: { type: String },
    sellingPrice: {type: String},
    disPrsent:{type:String},
    color:{type: String},
    COD: {type: String},
    Status: { type: String},
    size:{ type:String },
    quentity:{type:String},
    user_id:{type:String}
}, 
{
    timestamps: true
});

module.exports = mongoose.model('addtocard', addtocard);