const db = require('../dal/models');  

class ProyectosService {
  async getAllProjects() {
    try {
      // Solo se obtiene la información de la tabla 'proyectos'
      return await db.proyectos.findAll();
    } catch (error) {
      throw new Error('Error al obtener todos los proyectos: ' + error.message);
    }
  }

  async getProjectById(id) {
    try {
      // Solo se obtiene la información de un proyecto específico
      return await db.proyectos.findByPk(id);
    } catch (error) {
      throw new Error('Error al obtener el proyecto por ID: ' + error.message);
    }
  }

  async updateProject(id, data) {
    try {
      const project = await db.proyectos.findByPk(id);
      if (!project) {
        throw new Error('Proyecto no encontrado');
      }
      // Actualiza el proyecto con los datos proporcionados
      return await project.update(data);
    } catch (error) {
      throw new Error('Error al actualizar el proyecto: ' + error.message);
    }
  }
}

module.exports = ProyectosService;
