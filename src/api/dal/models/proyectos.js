module.exports = (sequelize, DataTypes) => {
  const Proyecto = sequelize.define(
    'Proyecto',
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      ciudad: DataTypes.STRING,
      pais: DataTypes.STRING,
      valorizacion: DataTypes.INTEGER,
    },
    {
      tableName: 'proyectos',
      timestamps: false,
    }
  );

  Proyecto.associate = function(models) {
    // cada proyecto tiene muchas imagenes de galeria
    Proyecto.hasMany(models.Galeria, {
      foreignKey: 'proyecto_id',
      as: 'galerias', 
    });
  };

  return Proyecto;
};
