import React from 'react';
import { mountain } from '../../assets/images';

export const AboutUs = React.forwardRef((props, ref) => {
    return (
        <div className="mt-4" ref={ref}>
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
    );
});
