const express = require('../node_modules/express');
const router = express.Router();

const empresaRController = require('../RController/empresaRController.js');
router.get('/:idempresa', empresaRController.list);

module.exports = router;