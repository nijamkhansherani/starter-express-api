const mongoose = require('mongoose');
const complete = new mongoose.Schema({
    title: {  type: String },
    dis: { type: String },
    user_id:{type: String}
    
}, 
{
    timestamps: true
});

module.exports = mongoose.model('complete', complete);