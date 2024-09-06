## Dependencias

Este proyecto utiliza las siguientes dependencias principales:

- **Express**: Para el servidor backend.
- **PostgreSQL**: Base de datos relacional utilizada.
- **Sequelize**: ORM para manejar la base de datos.
- **React**: Framework para el frontend.
- **Axios**: Para hacer peticiones HTTP desde el frontend.
- **Tailwind CSS**: Para el diseño del frontend.

### Scripts disponibles

instalar las dependencias 

cd prueba_tecnica
npm install

Configura las variables de entorno:
Crea un archivo .env en la raíz del proyecto con la siguiente información:

DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_base_de_datos


En el archivo `package.json`, tienes los siguientes scripts configurados:

- `npm start`: Ejecuta tanto el frontend como el backend simultáneamente.
- `npm run client`: Inicia solo el frontend.
- `npm run server`: Inicia solo el backend.
- `npm run build`: Crea una versión optimizada del proyecto para producción.
- `npm test`: Ejecuta las pruebas unitarias.