const mongoose = require('mongoose');
const { Schema } = mongoose;

const stationSchema = new Schema({
    name: {type: String, required: true},
    state: String,
    description: String,
    bikes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bike'}]
})

module.exports = mongoose.model('Station', stationSchema);

