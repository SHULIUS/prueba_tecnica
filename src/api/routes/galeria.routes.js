const express = require('express');
const router = express.Router();
const GaleriaService = require('../services/galeria.service');
const GaleriaController = require('../controllers/galeria.controller');

const galeriaService = new GaleriaService();
const galeriaController = new GaleriaController({ GaleriaService: galeriaService });

router.get('/galeria', (req, res) => galeriaController.getAllImages(req, res));
router.get('/galeria/:proyecto_id', (req, res) => galeriaController.getImagesByProjectId(req, res));
router.put('/galeria/:id', (req, res) => galeriaController.updateImage(req, res));

module.exports = router;
