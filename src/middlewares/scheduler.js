const scheduler = require('node-schedule')
const axiosPost = require('../utils/axiosPost')
const { dailyAPI, totalAPI, cron } = require('../utils/strings')

/**
 * Function that supplies a job.
 * 
 * @returns A job that involves calling the daily_api
 * and total_api every day at 23:59 (or 11:59PM)
 */
const jobSupplier = () => scheduler.scheduleJob(
    cron,
    () => {
        axiosPost(dailyAPI)
        axiosPost(totalAPI)
    }
)

module.exports = jobSupplier