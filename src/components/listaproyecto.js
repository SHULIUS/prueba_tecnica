import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => {
        setProyectos(response.data.payload);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los proyectos:', error);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Proyectos inmobiliarios</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                {/* Mostrar la primera imagen de la galería */}
                {proyecto.galeria.length > 0 ? (
                  <img
                    alt={proyecto.nombre}
                    src={proyecto.galeria[0]} 
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-300">
                    <span>No hay imagen</span>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-700">
                  {proyecto.nombre}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaProyectos;
