import React from 'react';
import { Link } from 'react-scroll';
import { navigation } from '../data'


const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, je m'appelle Paul! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Développeur Full Stack.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
             Titulaire d'un diplôme de développeur web (BTS). J'ai acquis des compétences en React, NodeJS, MySQL et Tailwind. Je suis à la recherche de ma première expérience.
            </p>
            <Link 
              to="portfolio" 
              activeClass='active' 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70} 
              className='transition-all duration-300'
              >
              <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
                Mes projets
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;