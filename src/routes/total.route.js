const express = require('express')
const totalController = require('../controllers/total.controller')

const router = express.Router()

/**
 * Router will invoke totalController when POST request
 * is received from the client.
 */
router.post("/", totalController)

module.exports = router