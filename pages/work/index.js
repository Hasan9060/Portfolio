// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center relative overflow-hidden">
      <Circles />
      <div className="container mx-auto">
        <div className="xl:flex xl:flex-row gap-x-8">
          {/* Text Section with Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center flex flex-col xl:w-[30vw] lg:text-left mb-8 xl:mb-0"
          >
            <h2 className="mt-[50px] xl:mt-[180px] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My Work <span className="text-accent">.</span>
            </h2>
            <p className="text-[12px] sm:text-base max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-2 xl:mb-12">
              I have worked on creating websites, designing graphic posters, and developing intuitive UI/UX designs that enhance user experience.
            </p>
          </motion.div>

          {/* Slider Section with Slide-In Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="w-full xl:max-w-[60%] xl:mt-20"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>

      {/* Bulb with Floating Animation */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Bulb />
      </motion.div>
    </div>
  );
};

export default Work;
