import React, { useState, useRef } from 'react';
import { landing, mountain } from '../assets/images';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const aboutUsRef = useRef(null); // Referencia para la sección "Sobre Nosotros"

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave a la sección "Sobre Nosotros"
  };

  return (
    <div className='bg-gray-800 w-full min-h-screen'>
      <div className="relative">
        <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white">
          <div className="flex flex-grow basis-0">
            <h1 className="text-white text-2xl font-semibold ml-40">Real Estate</h1>
          </div>
          <nav>
            <ul className="flex text-base [&>li>a]:inline-block [&>li>a]:px-4">
              <li><a href="#" onClick={scrollToAboutUs} className='hover:text-cyan-400 transition-colors duration-300'>Nosotros</a></li>
              <li><a href="" className='hover:text-cyan-400 transition-colors duration-300'>Propiedades</a></li>
              <li><a href="" className='hover:text-cyan-400 transition-colors duration-300'>Servicios</a></li>
              <li><a href="" className='hover:text-cyan-400 transition-colors duration-300'>Contáctanos</a></li>
            </ul>
          </nav>
          <nav className="flex flex-grow justify-end basis-0">
            <ul className="flex text-base [&>li>a]:inline-block [&>li>a]:px-4">
              <li><a href="" ><Link to="/login" className='hover:text-cyan-400 transition-colors duration-300 text-xl'>Ingresar</Link></a></li>
              <li><a href="" ><Link to="/register" className='hover:text-cyan-400 transition-colors duration-300 text-xl'>Registrarse</Link></a></li>
            </ul>
          </nav>
        </header>
        <section className="text-center relative mb-0">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <img src={landing} alt="Imagen de fondo" className="w-full h-95 object-cover object-top" />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">The future is today</h1>
        </section>
      </div>
    
      <div className="mt-4" ref={aboutUsRef}>
        <section className="min-h-screen flex justify-center items-center">
          <div className="max-w-3xl bg-white rounded-lg shadow-md flex">
            <div className="w-full md:w-1/2 pr-4">
              <img src={mountain} alt="Imagen" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <div className="flex flex-col justify-center h-full p-11">
                <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
                <p className="text-gray-700 mb-4">
                  Somos un equipo apasionado comprometido a brindar soluciones innovadoras para nuestros clientes. Con años de experiencia en la industria, estamos listos para ayudarlo a alcanzar sus objetivos.
                </p>
                <p className="text-gray-700">
                  Nuestro enfoque centrado en el cliente y nuestra dedicación al éxito son lo que nos diferencia. Trabajamos incansablemente para ofrecer productos y servicios de la más alta calidad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
