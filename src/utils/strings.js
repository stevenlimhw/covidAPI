/**
 * This file contains the string constants that are likely to be
 * frequently used or changed.
 */

const db = "mongodb://localhost:27017/covidAPI"
const url = "https://data.covid19.go.id/public/api/update.json"
const dailyAPI = "http://localhost:3000/daily_api"
const totalAPI = "http://localhost:3000/total_api"
const cron = "59 23 * * *"

module.exports = {
    db: db,
    url: url,
    dailyAPI: dailyAPI,
    totalAPI: totalAPI,
    cron: cron
}