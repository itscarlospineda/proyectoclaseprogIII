const express = require('../node_modules/express');
const router = express.Router();

const proveedorRController = require('../RController/proveedorRController.js');
router.get('/:idprov', proveedorRController.list);

module.exports = router;