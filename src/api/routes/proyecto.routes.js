const express = require('express');
const { getAllProjects } = require('../models/proyectos');
const router = express.Router();


router.get('/entidades', async (req, res) => {
  try {
    const projects = await getAllProjects();
    res.json(projects);
  } catch (error) {
    console.error('Error al obtener los proyectos:', error);
    res
    .status(500)
    .json({ error: 'Error al obtener los proyectos' });
  }
});

module.exports = router;