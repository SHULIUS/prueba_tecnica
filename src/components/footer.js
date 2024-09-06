import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Mi Empresa</h3>
          <p className="text-sm">© {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">Sobre Nosotros</a>
          <a href="#" className="hover:text-gray-400">Servicios</a>
          <a href="#" className="hover:text-gray-400">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
