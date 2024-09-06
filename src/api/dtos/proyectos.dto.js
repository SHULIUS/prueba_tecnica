
class ProyectosDto {
  static mapToDto(proyecto) {
    return {
      id: proyecto.id,
      nombre: proyecto.nombre,
      descripcion: proyecto.descripcion,
      ciudad: proyecto.ciudad,
      pais: proyecto.pais,
      valorizacion: proyecto.valorizacion,
      
      galeria: proyecto.galerias ? proyecto.galerias.map(g => g.url_imagen) : []
    };
  }
}

module.exports = ProyectosDto;
