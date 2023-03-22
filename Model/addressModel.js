const mongoose = require('mongoose');
const address = new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    phoneNumber:{type:String},
    streetAddress:{type:String},
    locality:{type:String},
    townCity:{type:String},
    postCode:{type:String},
    state:{type:String},
    addresstype:{type:String},
    user_id:{type:String}

},
{
timestamps:true
});

module.exports = mongoose.model('address',address);
