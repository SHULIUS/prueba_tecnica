const mapper = require('automapper-js');
const GaleriaDto = require('../dtos/galeria.dto');

class GaleriaController {
  constructor({ GaleriaService }) {
    this._galeriaService = GaleriaService;
  }

  async getAllImages(req, res) {
    try {
      let images = await this._galeriaService.getAllImages();
      images = images.map(image => mapper(GaleriaDto, image));
      res.send({ payload: images });
    } catch (error) {
      console.error('Error al obtener todas las imágenes:', error);
      res.status(500).json({ error: 'Error al obtener todas las imágenes' });
    }
  }

  async getImagesByProjectId(req, res) {
    const { proyecto_id } = req.params;
    try {
      let images = await this._galeriaService.getImagesByProjectId(proyecto_id);
      images = images.map(image => mapper(GaleriaDto, image));
      res.send({ payload: images });
    } catch (error) {
      console.error('Error al obtener las imágenes del proyecto:', error);
      res.status(500).json({ error: 'Error al obtener las imágenes del proyecto' });
    }
  }

  async updateImage(req, res) {
    const { id } = req.params;
    const { url_imagen } = req.body;
    try {
      const updatedImage = await this._galeriaService.updateImage(id, url_imagen);
      const image = mapper(GaleriaDto, updatedImage);
      res.json({ payload: image });
    } catch (error) {
      console.error('Error al actualizar la imagen:', error);
      res.status(500).json({ error: 'Error al actualizar la imagen' });
    }
  }
}

module.exports = GaleriaController;
