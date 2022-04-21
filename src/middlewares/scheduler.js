const scheduler = require('node-schedule')
const axiosPost = require('./axiosPost')

/**
 * Function that supplies a job.
 * 
 * @returns A job that involves calling the daily_api
 * and total_api every day at 23:59 (or 11:59PM)
 */
const jobSupplier = () => scheduler.scheduleJob(
    '59 23 * * *',
    () => {
        axiosPost("http://localhost:3000/daily_api")
        axiosPost("http://localhost:3000/total_api")
    }
)

module.exports = jobSupplier