class ProyectosDto {
    constructor({ id, nombre, descripcion, ciudad, pais, valorizacion, galeria }) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.ciudad = ciudad;
      this.pais = pais;
      this.valorizacion = valorizacion;
      this.galeria = galeria;
    }
  }
  
  module.exports = ProyectosDto;
  