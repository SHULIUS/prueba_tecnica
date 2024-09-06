import React from 'react';
import ListaProyectos from '../components/listaproyecto';
import { Header } from '../components/Header';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ListaProyectos />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
