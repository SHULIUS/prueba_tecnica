const pool = require('../config/db.inmobiliaria');

const TablaProyectos = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS proyectos (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100),
        descripcion TEXT,
        ciudad VARCHAR(50),
        pais VARCHAR(50),
        valorizacion NUMERIC
      );
    `);
  } catch (error) {
    console.error('Error al crear la tabla "proyectos":', error.message);
  }
};

module.exports = TablaProyectos;