const mongoose = require('mongoose')

const totalSchema = mongoose.Schema({
    jumlah_positif: Number,
    jumlah_dirawat: Number,
    jumlah_sembuh: Number,
    jumlah_meninggal: Number,
    tanggal_update: String
})

const Total = mongoose.model("Total", totalSchema)
module.exports = Total