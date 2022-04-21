const mongoose = require('mongoose')

const dailySchema = mongoose.Schema({
    jumlah_positif: Number,
    jumlah_dirawat: Number,
    jumlah_sembuh: Number,
    jumlah_meninggal: Number,
    tanggal: String
})

const Daily = mongoose.model("Daily", dailySchema)
module.exports = Daily