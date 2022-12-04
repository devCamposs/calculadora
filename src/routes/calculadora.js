var express = require('express')
var router = express.Router()
var calculadoraController = require('../controllers/calculadoraController')

router.get('/', calculadoraController.index)

module.exports = router
