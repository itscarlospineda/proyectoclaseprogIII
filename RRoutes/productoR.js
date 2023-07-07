const express = require('../node_modules/express');
const router = express.Router();

const productoRController = require('../RController/productoRController.js');
router.get('/:num_prod', productoRController.list);

module.exports = router;