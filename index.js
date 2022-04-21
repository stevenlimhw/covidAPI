const express = require('express')
const dailyRouter = require('./src/routes/daily.route')
const totalRouter = require('./src/routes/total.route')
const connectDB = require('./src/configs/db')

const PORT = 3000
const app = express()

// initialise and connect to the database
connectDB()

// initialise the APIs
app.use("/daily_api", dailyRouter)
app.use("/total_api", totalRouter)

// schedule API


// listener
app.listen(PORT, console.log(`Server is currently running in port ${PORT}`))