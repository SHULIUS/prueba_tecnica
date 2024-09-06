import React from 'react';
import Galeria from './galeria';

const carta = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">Nombre proyecto</h2>
      <h4>Descripcion proyecto:</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo, laboriosam quisquam neque repellat, impedit error qui voluptatibus, sed veniam atque possimus cumque odit! Deleniti non cupiditate ipsum quos dolorum.</p>
      <p className="text-gray-600">Ubicación: </p>
      <p className="text-gray-600">Valorización:</p>

      <Galeria />
    </div>
  );
};

export default carta;