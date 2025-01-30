import Image from "next/image";

const Bulb = () => {
  return( 
    <div className="absolute left-0 right-[622px] top-[460px] flex justify-center z-10">
      <div className="rotate-12 mix-blend-color-dodge animate-pulse duration-75 w-[100px] xl:w-[200px] opacity-45">
        <Image 
          src={'/bulb.png'}
          width={260} 
          height={200} 
          alt='Light Bulb' 
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Bulb;
