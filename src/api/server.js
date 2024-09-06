const express = require('express');
const cors = require('cors');
const db = require('./dal/models');  

const projectRoutes = require('./routes/proyecto.routes');
const galeriaRoutes = require('./routes/galeria.routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', projectRoutes);
app.use('/api', galeriaRoutes);

// sincroniza la base de datos y luego inicia el server
const startServer = async () => {
  try {
    // sincroniza los modelos con la base de datos (sin borrar datos existentes)
    await db.sequelize.sync({ force: false });

    console.log('Conexión a la base de datos PostgreSQL establecida y modelos sincronizados.');

    const port = 5000;
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(-1); 
  }
};

startServer();
