module.exports = (sequelize, DataTypes) => {
  const Galeria = sequelize.define('galeria', {
    url_imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proyecto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'proyectos',
        key: 'id',
      },
    },
  }, {
    timestamps: false,  // Desactivar timestamps automáticos
  });

  Galeria.associate = models => {
    Galeria.belongsTo(models.proyectos, { foreignKey: 'proyecto_id' });
  };

  return Galeria;
};