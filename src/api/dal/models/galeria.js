module.exports = (sequelize, DataTypes) => {
  const Galeria = sequelize.define(
    'Galeria',
    {
      url_imagen: DataTypes.STRING,
      proyecto_id: DataTypes.INTEGER
    },
    {
      tableName: 'galeria',
      timestamps: false
    }
  );

  Galeria.associate = function(models) {
    // cada imagen que hay en galeria le pertecene a un proyecto
    Galeria.belongsTo(models.Proyecto, {
      foreignKey: 'proyecto_id',
      as: 'proyecto'
    });
  };

  return Galeria;
};
