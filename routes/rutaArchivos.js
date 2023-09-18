const express = require('express');
const router = express.Router();

// Importamos los Controladores
const { uploadFile } = require('../controllers/subirArchivo');

// Definimos las rutas
router.post('/', uploadFile);

module.exports = router;