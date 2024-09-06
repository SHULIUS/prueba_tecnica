const db = require('../dal/models');

class GaleriaService {
  async getAllImages() {
    try {
      return await db.Imagen.findAll();
    } catch (error) {
      throw new Error('Error al obtener todas las imágenes: ' + error.message);
    }
  }

  async getImageById(id) {
    try {
      return await db.Imagen.findByPk(id);
    } catch (error) {
      throw new Error('Error al obtener la imagen por ID: ' + error.message);
    }
  }

  async addImage(data) {
    try {
      return await db.Imagen.create(data);
    } catch (error) {
      throw new Error('Error al agregar una imagen: ' + error.message);
    }
  }

  async updateImage(id, data) {
    try {
      const image = await db.Imagen.findByPk(id);
      if (!image) {
        throw new Error('Imagen no encontrada');
      }
      return await image.update(data);
    } catch (error) {
      throw new Error('Error al actualizar la imagen: ' + error.message);
    }
  }
}

module.exports = GaleriaService;
