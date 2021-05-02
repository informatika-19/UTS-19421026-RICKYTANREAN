const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kameraSchema = new Schema({
    namapenyewa:{
        type: String
        },
        hargasewa:{
            type: String
        },
        lamasewa:{
            type: String
        },
        totalharga :{
            type: String
            
        }
})
module.exports =mongoose.model('kamera',kameraSchema)