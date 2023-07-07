const express = require('../node_modules/express');
const router = express.Router();

const tipoproductoRController = require('../RController/tipoproductoRController.js');
router.get('/:idtpprod', tipoproductoRController.list);

module.exports = router;