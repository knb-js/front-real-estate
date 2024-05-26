import React, { useState, useRef } from 'react';
import { Header } from '../components/home/Header';
import { AboutUs } from '../components/home/AboutUs';

export const Home = () => {
  const aboutUsRef = useRef(null);

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-gray-800 w-full min-h-screen'>
      <Header scrollToAboutUs={scrollToAboutUs} />
      <AboutUs ref={aboutUsRef} />
    </div>
  );
};
