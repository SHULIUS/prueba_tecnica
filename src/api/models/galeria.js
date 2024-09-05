const pool = require('../config/db.inmobiliaria');

const tablaGaleria = async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS galeria (
        id SERIAL PRIMARY KEY,
        proyecto_id INT REFERENCES proyectos(id) ON DELETE CASCADE,
        url_imagen TEXT
        
      );
    `);
  } catch (error) {
    console.error('Error al crear la tabla "galeria":', error.message);
  }
};

module.exports = tablaGaleria;