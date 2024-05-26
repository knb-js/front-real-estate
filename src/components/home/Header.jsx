import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { landing } from '../../assets/images';

export const Header = ({ scrollToAboutUs }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            if (currentPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative">
            <header className={`py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white ${isScrolled ? 'bg-gray-800' : ''}`}>
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
    );
};
