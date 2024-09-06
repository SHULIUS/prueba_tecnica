const GaleriaDto = require('../dtos/galeria.dto');

class GaleriaController {
  constructor({ GaleriaService }) {
    this._galeriaService = GaleriaService;
  }

  async getAllImages(req, res) {
    try {
      let images = await this._galeriaService.getAllImages();
      images = images.map(image => GaleriaDto.mapToDto(image));
      res.send({ payload: images });
    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
      res.status(500).json({ error: 'Error al obtener las imágenes' });
    }
  }

  async getImageById(req, res) {
    const { id } = req.params;
    try {
      let image = await this._galeriaService.getImageById(id);
      image = GaleriaDto.mapToDto(image);
      res.send({ payload: image });
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
      res.status(500).json({ error: 'Error al obtener la imagen' });
    }
  }

  async addImage(req, res) {
    const { body } = req;
    try {
      const newImage = await this._galeriaService.addImage(body);
      const image = GaleriaDto.mapToDto(newImage);
      res.status(201).json({ payload: image });
    } catch (error) {
      console.error('Error al agregar la imagen:', error);
      res.status(500).json({ error: 'Error al agregar la imagen' });
    }
  }

  async updateImage(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const updatedImage = await this._galeriaService.updateImage(id, body);
      const image = GaleriaDto.mapToDto(updatedImage);
      res.json({ payload: image });
    } catch (error) {
      console.error('Error al actualizar la imagen:', error);
      res.status(500).json({ error: 'Error al actualizar la imagen' });
    }
  }
}

module.exports = GaleriaController;
