import React, { useState } from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
  SiTypescript,
  SiCanva,
  SiAdobeillustrator,
  SiBlender
} from "react-icons/si";

// Data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <SiNextdotjs key="nextjs" />,
          <SiTailwindcss key="tailwind" />,
          <SiTypescript key="typescript" />,
        ],
      },
      {
        title: 'Graphic Design',
        icons: [
          <FaFigma key="figma" />,
          <SiCanva key="canva" />,
          <SiAdobephotoshop key="photoshop" />,
          <SiAdobeillustrator key="illustrator" />,
          <SiBlender key="blender" />
        ],
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Brainic High School - Private',
        stage: '2013 - 2022',
      },
      {
        title: 'Intermediate - GDC Jamia-e-milia',
        stage: '2022 - 2024',
      },
      {
        title: 'Generative AI - Governor House',
        stage: '2024 - Present',
      },
       {
        title: 'BSCS',
        stage: '2025 - Present',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Intership - GOA Teach',
        stage: '2024 - 2025',
      },
      {
        title: 'Teaching Tech - Live Session',
        stage: '2023 - Present',
      },
      {
        title: 'Fronted Development - TechWev',
        stage: '2025 - Present',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* Avatar */}
      <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial="hidden" 
        animate="show" 
        exit='hidden' 
        className="hidden xl:flex absolute top-[8px] -left-[190px]">
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* Text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit='hidden' 
            className="text-[18px] md:text-base lg:text-lg xl:text-5xl xl:gap-2 font-bold">
            Great designs come from <span className='text-accent'>inspiring</span> stories.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit='hidden' 
            className='text-[12px] xl:text-[18px] max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-1 z-0'>
            I started freelancing as a graphic designer and developer three years ago. Over the past year, I&apos;ve worked remotely with companies, collaborating on digital products for business and consumer solutions.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn('right', 0.3)} 
            initial="hidden" 
            animate="show" 
            exit='hidden' 
            className='hidden md:flex md:max-w-xl xl:max-w-none xl-max-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-4'>
              {/* Experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={8} />+
                </div>
                <div className='text-[9px] xl:text-[12px] uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
              </div>
              {/* Clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl  xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={46} duration={5} />+
                </div>
                <div className='text-[9px] xl:text-[12px] uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
              </div>
              {/* Projects */}
              <div className='relative flex-1 after:w-[1px]'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={6} duration={5} />+
                </div>
                <div className='text-[9px] xl:text-[12px] uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Input */}
        <motion.div
          variants={fadeIn('left', 0.3)} 
          initial="hidden" 
          animate="show" 
          exit='hidden' 
          className='mt-[22px] flex flex-col w-full xl:max-w-[48%] h-[350px]'>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              const isActive = index === itemIndex;
              return (
                <div
                  key={itemIndex}
                  className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                    isActive
                      ? "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                      : ""
                  }`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl-py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  {/* Title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* Icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return <div key={iconIndex} className='text-2xl'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
