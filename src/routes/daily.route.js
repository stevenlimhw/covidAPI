const express = require('express')
const dailyController = require('../controllers/daily.controller')

const router = express.Router()

/**
 * Router will invoke dailyController when POST request
 * is received from the client.
 */
router.post("/", dailyController)

module.exports = router