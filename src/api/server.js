const express = require('express');
const cors = require('cors');

const pool = require('./config/db.inmobiliaria');

const projectRoutes = require('./routes/proyecto.routes');
const createTables = require('./models');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', projectRoutes);


const checkDbConnection = async () => {
  try {
    await pool.query('SELECT NOW()'); 
    console.log('Conectado a la base de datos PostgreSQL');
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(-1); 
  }
};


const startServer = async () => {
  await checkDbConnection();
  await createTables()

  const port = 5000;
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
};

startServer();
