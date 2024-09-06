const pool = require('../config/db.inmobiliaria');

class GaleriaService {
  async updateImage(id, url_imagen) {
    const result = await pool.query(`
      UPDATE galeria
      SET url_imagen = $1
      WHERE id = $2 RETURNING *;
    `, [url_imagen, id]);

    if (result.rowCount === 0) {
      throw new Error('Imagen no encontrada');
    }
    return result.rows[0];
  }

  async getAllImages() {
    const result = await pool.query('SELECT * FROM galeria');
    return result.rows;
  }

  async getImagesByProjectId(proyecto_id) {
    const result = await pool.query('SELECT * FROM galeria WHERE proyecto_id = $1', [proyecto_id]);

    if (result.rows.length === 0) {
      throw new Error('No se encontraron imágenes para este proyecto');
    }
    return result.rows;
  }
}

module.exports = GaleriaService;
