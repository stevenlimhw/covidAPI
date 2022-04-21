const mongoose = require('mongoose')
const db = 'mongodb://localhost:27017/app2'

/**
 * Asynchronous function to connect to the database.
 */
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(
            db,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log(`Database successfully connected at ${connect.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB