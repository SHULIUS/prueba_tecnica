const db = require('../dal/models');

class ProyectosService {
  async getAllProjects() {
    try {
      return await db.proyectos.findAll({
        include: [
          {
            model: db.galeria,
            attributes: ['url_imagen'] 
          }
        ],
      });
    } catch (error) {
      throw new Error('Error al obtener todos los proyectos: ' + error.message);
    }
  }

  async getProjectById(id) {
    try {
      return await db.proyectos.findByPk(id, {
        include: [
          {
            model: db.galeria, 
            attributes: ['url_imagen'] 
          }
        ],
      });
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
      return await project.update(data);
    } catch (error) {
      throw new Error('Error al actualizar el proyecto: ' + error.message);
    }
  }
}

module.exports = ProyectosService;