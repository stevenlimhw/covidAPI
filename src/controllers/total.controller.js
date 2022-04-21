const Total = require('../models/Total')
const fetchData = require('../middlewares/fetch')

const totalController = async (req, res) => {
    try {
        // fetch data from the web API
        const data = (await fetchData()).total

        // date that the data is fetched on
        const date = data.tanggal

        // save penambahan (i.e. daily or additional) into the database
        Total.create(data, (err, total) => {
            if (err) {
                console.error(err)
                throw err
            }
            console.log("Total successfully saved into the database.")
        })

        // provide JSON object as the response
        res.json({ total: {
                ...data,
                tanggal_update: date
            }
        })

    } catch (err) {
        res.json({ message: err.message })
    }
}

module.exports = totalController