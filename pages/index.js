import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar'
import ParticlesContainer from '../components/ParticlesContainer'
// framer motion
import { motion } from 'framer-motion';

// 
import {fadeIn} from '../variants';


const Home = () => {
  return( 
  <div className='bg-primary/60 h-full'>
  {/* Text */}
  <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
    <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
      {/* Title */}
      <motion.h1
      variants={fadeIn('down', 0.2)} 
      initial='hidden' 
      animate="show" 
      exit='hidden' 
       className='h1 text-[31px] sm:text-xl lg:text-4xl xl:text-4xl'>
        Transforming Ideas <br/> into <span className='text-accent'>Digital World</span>
      </motion.h1>
      {/* Subtitle */}
      <motion.p 
      variants={fadeIn('down', 0.3)} 
      initial='hidden' 
      animate="show" 
      exit='hidden' 
      className='max-w-sm text-[12px] xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
Hello, I&apos;m Hasan, and I will turn your ideas into digital reality. With creativity and expertise, I transform concepts into functional digital solutions. Whether it&apos;s a website, app, or design, I bring your vision to life. Let&apos;s make your ideas shine in the digital world!   </motion.p>
      {/* btn */}
      <div className='flex mb-24 justify-center xl:hidden relative'>
        <ProjectsBtn />
      </div>
      <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate="show" exit='hidden' className='hidden xl:flex'>
        <ProjectsBtn />
      </motion.div>
    </div>
  </div>
  {/* Image */}
  <div className='w-[1200px] h-full absolute right-0 bottom-0'>
    {/* bg image */}
    <div className="absolute right-20 w-[612px] h-full xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat rotate-180 mix-blend-color-dodge">
    </div>
  {/* particles */}
  <div><ParticlesContainer /></div>
  {/* avatar img */}
  <div className='w-full h-full max-w-[388px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[6%] lg:top-[1%]'>
    <Avatar /></div>
  </div>
  </div>

  );
};

export default Home;
