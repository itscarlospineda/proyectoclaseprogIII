const express = require('../node_modules/express');
const router = express.Router();

const sucursalesRController = require('../RController/sucursalesRController.js');
router.get('/:idsuc', sucursalesRController.list);

module.exports = router;