const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product_name: {
         type: String,
          required: true,
          trim:true 
        },
    category: {
         type: String,
            required: true,
            trim:true 
        },
    price: {
        type:Number,
        required:true,
        trim:true
    },
    quantity: {
        type:Number,
        required:true,
        trim:true
    },
    active: {
        type:Boolean,
        required:true
    }
});

module.exports = mongoose.model('User', productSchema);