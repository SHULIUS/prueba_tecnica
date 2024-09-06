import React, { useState } from 'react';
import useFetchProjects from '../hooks/useFetchProjects.js';
import useCarousel from '../hooks/useCarousel';
import Carta from './proyectos.js';

const ListaProyectos = () => {
  const { proyectos, error } = useFetchProjects();
  const { containerRef, handleScroll } = useCarousel(340);
  const [selectedProject, setSelectedProject] = useState(null);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const carouselProyectos = proyectos ? [...proyectos, ...proyectos] : [];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="relative">
          
          <button
            onClick={() => handleScroll('left')}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded z-10"
          >
            &lt;
          </button>
          
          <button
            onClick={() => handleScroll('right')}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded z-10"
          >
            &gt;
          </button>
          <div
            ref={containerRef}
            className="overflow-hidden w-full"
          >
            <div
              className="flex"
              style={{ scrollBehavior: 'smooth' }}
            >
              {carouselProyectos.map((proyecto) => (
                <div
                  key={proyecto.id}
                  className="inline-block px-2 relative"
                  onClick={() => setSelectedProject(proyecto)}
                >
                  <div className="w-80 h-80 overflow-hidden rounded-md bg-gray-200 cursor-pointer transition-transform transform hover:scale-105">
                    {proyecto.galeria.length > 0 ? (
                      <img
                        alt={proyecto.nombre}
                        src={proyecto.galeria[0]}
                        className="h-full w-full object-cover object-center"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gray-300">
                        <span>No hay imagen</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-sm text-gray-700">{proyecto.nombre}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-4 w-11/12 max-w-3xl relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-gray-700"
              >
                &times;
              </button>
              <Carta proyecto={selectedProject} />
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ListaProyectos;
