module.exports = (sequelize, DataTypes) => {
  const Proyecto = sequelize.define('proyectos', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valorizacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,  
  });

  Proyecto.associate = models => {
    Proyecto.hasMany(models.galeria, { foreignKey: 'proyecto_id' });
  };

  return Proyecto;
};
