const express = require('../node_modules/express');
const router = express.Router();

const formapagoRController = require('../RController/formapagoRController.js');
router.get('/:idfpago', formapagoRController.list);

module.exports = router;