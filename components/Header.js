import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center ">
            <Image 
              src="/logo.png"
              width={50}
              height={40}
              alt="Vectonix Logo"
              priority={true}
            />
            <h1 className="text-[16px] font-semibold mt-[18px]">ECTONIX</h1>
          </Link>
          
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;