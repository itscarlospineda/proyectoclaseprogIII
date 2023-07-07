const express = require('../node_modules/express');
const router = express.Router();

const tipousuarioRController = require('../RController/tipousuarioRController.js');
router.get('/:idtpusuario', tipousuarioRController.list);

module.exports = router;