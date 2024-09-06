class GaleriaDto {
  constructor(galeria) {
    this.id = galeria.id;
    this.url_imagen = galeria.url_imagen;
    this.proyectoId = galeria.proyectoId;
  }

  static mapToDto(galeria) {
    return new GaleriaDto(galeria);
  }
}

module.exports = GaleriaDto;
