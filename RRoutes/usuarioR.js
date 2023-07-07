const express = require('../node_modules/express');
const router = express.Router();

const usuarioRController = require('../RController/usuarioRController.js');
router.get('/:userid', usuarioRController.list);

module.exports = router;