const Total = require('../models/Total')
const fetchData = require('../middlewares/fetch')

/* Creates a Total object and saves it into the database. */
const createTotal = async (req, res) => {
    try {
        // fetch data from the web API
        const data = await fetchData()

        // date that the data is fetched on
        const date = data.penambahan.tanggal

        // save penambahan (i.e. daily or additional) into the database
        Total.create({ ...data.total, tanggal_update: date }, (err, total) => {
            if (err) {
                console.error(err)
                throw err
            }
            console.log("Total successfully saved into the database.")
        })

        // provide JSON object as the response
        res.json({ total: {
                ...data.total,
                tanggal_update: date
            }
        })

    } catch (err) {
        res.json({ message: err.message })
    }
}

module.exports = createTotal