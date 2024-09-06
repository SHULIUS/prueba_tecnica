const pool = require('../config/db.inmobiliaria');

class ProyectosService {
  async getAllProjects() {
    const result = await pool.query(`
      SELECT p.id, p.nombre, p.descripcion, p.ciudad, p.pais, p.valorizacion, 
      json_agg(json_build_object('url_imagen', g.url_imagen)) AS galeria
      FROM proyectos p
      LEFT JOIN galeria g ON p.id = g.proyecto_id
      GROUP BY p.id;
    `);
    return result.rows;
  }

  async getProjectById(id) {
    const result = await pool.query(`
      SELECT p.id, p.nombre, p.descripcion, p.ciudad, p.pais, p.valorizacion, 
      json_agg(json_build_object('url_imagen', g.url_imagen)) AS galeria
      FROM proyectos p
      LEFT JOIN galeria g ON p.id = g.proyecto_id
      WHERE p.id = $1
      GROUP BY p.id;
    `, [id]);

    if (result.rows.length === 0) {
      throw new Error('Proyecto no encontrado');
    }
    return result.rows[0];
  }

  async updateProject(id, data) {
    const { nombre, descripcion, ciudad, pais, valorizacion } = data;
    const result = await pool.query(`
      UPDATE proyectos
      SET nombre = $1, descripcion = $2, ciudad = $3, pais = $4, valorizacion = $5
      WHERE id = $6 RETURNING *;
    `, [nombre, descripcion, ciudad, pais, valorizacion, id]);

    if (result.rowCount === 0) {
      throw new Error('Proyecto no encontrado');
    }
    return result.rows[0];
  }
}

module.exports = ProyectosService;
