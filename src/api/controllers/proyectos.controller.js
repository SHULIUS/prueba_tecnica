const mapper = require('automapper-js');
const ProyectosDto = require('../dtos/proyectos.dto');

class ProyectosController {
  constructor({ ProyectosService }) {
    this._proyectosService = ProyectosService;
  }

  async getAllProjects(req, res) {
    try {
      let projects = await this._proyectosService.getAllProjects();
      projects = projects.map(project => mapper(ProyectosDto, project));
      res.send({ payload: projects });
    } catch (error) {
      console.error('Error al obtener los proyectos:', error);
      res.status(500).json({ error: 'Error al obtener los proyectos' });
    }
  }

  async getProjectById(req, res) {
    const { id } = req.params;
    try {
      let project = await this._proyectosService.getProjectById(id);
      project = mapper(ProyectosDto, project);
      res.send({ payload: project });
    } catch (error) {
      console.error('Error al obtener el proyecto:', error);
      res.status(500).json({ error: 'Error al obtener el proyecto' });
    }
  }

  async updateProject(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const updatedProject = await this._proyectosService.updateProject(id, body);
      const project = mapper(ProyectosDto, updatedProject);
      res.json({ payload: project });
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error);
      res.status(500).json({ error: 'Error al actualizar el proyecto' });
    }
  }
}

module.exports = ProyectosController;
