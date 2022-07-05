const mongoose = require('mongoose')
const fileSchema = mongoose.Schema({
    filename: {
        type: String, required: true
    },
    path: {type: String, required: true},
    path: {type: Number, required: true},
    uuid: {type: String, required: true},
    sernder: {type: String, required: false},
    receiver: {type: String, required:false}
},{timestamps: true});

module.exports = mongoose.model('File', fileSchema)