const express = require('../node_modules/express');
const router = express.Router();

const areas_trabajoRController = require('../RController/areas_trabajoRController.js');
router.get('/:idarea', areas_trabajoRController.list);

module.exports = router;