const express = require('express');
const router = express.Router();
const ProyectosService = require('../services/proyectos.service');
const ProyectosController = require('../controllers/proyectos.controller');

const proyectosService = new ProyectosService();
const proyectosController = new ProyectosController({ ProyectosService: proyectosService });

router.get('/projects', (req, res) => proyectosController.getAllProjects(req, res));
router.get('/projects/:id', (req, res) => proyectosController.getProjectById(req, res));
router.put('/projects/:id', (req, res) => proyectosController.updateProject(req, res));

module.exports = router;
