
class ProyectosDto {
  static mapToDto(proyecto) {
    return {
      id: proyecto.id,
      nombre: proyecto.nombre,
      descripcion: proyecto.descripcion,
      ciudad: proyecto.ciudad,
      pais: proyecto.pais,
      valorizacion: proyecto.valorizacion,
      
    };
  }
}

module.exports = ProyectosDto;
