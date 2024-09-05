const TablaProyectos = require('./proyectos');
const tablaGaleria = require('./galeria');

const createTables = async () => {
  try {
    await TablaProyectos();  
    await tablaGaleria();   
    console.log('Tablas creadas exitosamente.');
  } catch (error) {
    console.error('Error al crear las tablas:', error.message);
  }
};

module.exports = createTables;
