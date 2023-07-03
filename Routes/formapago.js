const express = require('express');
const router = express.Router();

const formapagoController = require('../Controller/formapagoController.js'); //Cada punto es entrada a la carpeta
router.get('/', formapagoController.list);
router.post('/add', formapagoController.save);
router.get('/delete/:idfpago', formapagoController.delete);
router.get('/update/:idfpago', formapagoController.edit);
router.post('/update/:idfpago', formapagoController.update);

module.exports = router;