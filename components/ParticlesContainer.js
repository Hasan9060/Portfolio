import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import React, {useCallback} from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async(engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async ()=> {}, []);


  return( 
  <Particles
  className='w-ful h-full ml-[311px] absolute translate-z-0'
   id='tsparticles' 
   init={particlesInit} 
   loaded={particlesLoaded}
   options={{
    fullScreen: {enable: false},
    background: {
      color: {
        value: '',
      },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes:{
          push: {
            quantity: 90
          },
          repulse:{
            distance: 200,
            duration: 0.4
          },
        },
    },
    particles:{
      color: {
        value: ["#ff7e5f", "#feb47b", "#86a8e7", "#7f7fd5"],
      },
      links: {
        color: '#f5d393',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density:{
          enable: true,
          area: 800
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: {min: 1, max: 5}
      },
    },
    detectRetina: true,
  }}/>


  );
};

export default ParticlesContainer;
