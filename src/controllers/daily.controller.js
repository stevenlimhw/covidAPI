const Daily = require('../models/Daily')
const fetchData = require('../middlewares/fetch')

/* Creates a Daily object and saves it into the database. */
const createDaily = async (req, res) => {
    try {
        // fetch data from the web API
        const data = (await fetchData()).penambahan

        // date that the data is fetched on
        const date = data.tanggal

        // save penambahan (i.e. daily or additional) into the database
        Daily.create(data, (err, daily) => {
            if (err) {
                console.error(err)
                throw err
            }
            console.log("Daily successfully saved into the database.")
        })

        // provide JSON object as the response
        res.json({ daily: data })

    } catch (err) {
        res.json({ message: err.message })
    }
}

module.exports = createDaily