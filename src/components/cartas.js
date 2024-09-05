import React from 'react';
import Galeria from './galeria';

const carta = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">Name</h2>
      <p></p>
      <p className="text-gray-600">Ubicación: </p>
      <p className="text-gray-600">Valorización:</p>

      <Galeria />
    </div>
  );
};

export default carta;