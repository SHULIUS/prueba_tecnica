const db = require('../dal/models');

class ProyectosService {
  async getAllProjects() {
    try {
      return await db.Proyecto.findAll({
        include: [
          {
            model: db.Galeria,
            attributes: ['url_imagen'],
            as: 'galerias' 
          }
        ],
      });
    } catch (error) {
      throw new Error('Error al obtener todos los proyectos: ' + error.message);
    }
  }

  async getProjectById(id) {
    try {
      return await db.Proyecto.findByPk(id, {
        include: [
          {
            model: db.Galeria,
            attributes: ['url_imagen'],
            as: 'galerias' 
          }
        ],
      });
    } catch (error) {
      throw new Error('Error al obtener el proyecto por ID: ' + error.message);
    }
  }
}

module.exports = ProyectosService;
