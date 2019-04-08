const mongoose = require('mongoose');
const { Schema } = mongoose;

const BikeSchema = new Schema ({
    name: String,
    kms: Number,
    description: String,
    inStation: Boolean
})

module.exports = mongoose.model('Bike', BikeSchema);