import React, { useState } from 'react';

const Carta = ({ proyecto }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold mb-2">Nombre del Proyecto: {proyecto.nombre}</h2>
      <h4 className="text-xl font-semibold mb-2">Descripción del Proyecto:</h4>
      <p className="mb-4">{proyecto.descripcion}</p>
      <p className="text-gray-700 mb-2">Ubicación: {proyecto.ciudad}, {proyecto.pais}</p>
      <p className="text-gray-700 mb-4">Valorización: {proyecto.valorizacion}</p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Galería de Fotos</h3>
        <div className="grid grid-cols-2 gap-4">
          {proyecto.galeria.length > 0 ? (
            proyecto.galeria.map((foto, index) => (
              <div
                key={index}
                className="w-full h-40 overflow-hidden rounded-lg bg-gray-200 cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => handleImageClick(foto)}
              >
                <img
                  src={foto}
                  alt={`Galería ${index}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No hay fotos disponibles</p>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl max-h-[80vh] overflow-hidden">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-800 text-2xl hover:text-gray-600 transition-colors"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carta;
