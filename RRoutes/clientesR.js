const express = require('../node_modules/express');
const router = express.Router();

const clientesRController = require('../RController/clientesRController.js');
router.get('/:num_clie', clientesRController.list);

module.exports = router;