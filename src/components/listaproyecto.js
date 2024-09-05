import React, { useEffect, useState } from 'react';
import Cartas from './cartas';
import { getProjects } from '../services/api';

const ProjectList = () => {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Proyectos Inmobiliarios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
          <Cartas/>
       
      </div>
    </div>
  );
};

export default ProjectList;
