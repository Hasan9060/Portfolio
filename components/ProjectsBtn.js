import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

const ProjectsBtn = () => {
  return (
    <div className="relative  w-[120px] h-[120px] flex justify-center items-center group">
      <Link
        href={'/work'}
        className="relative w-full h-full flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat"
      >
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt="Rounded Text"
          className="animate-spin-slow w-full h-full max-w-[100px] max-h-[105px]"
        />
        <HiArrowRight className="absolute text-4xl transform transition-all duration-300  group-hover:translate-x-2" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
