import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProjects = () => {
  const [proyectos, setProyectos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProyectos(response.data.payload);
      } catch (err) {
        setError('Hubo un error al obtener los proyectos.');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return { proyectos, error };
};

export default useFetchProjects;