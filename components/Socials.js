import Link from "next/link";
import {RiLinkedinLine, RiInstagramLine, RiFacebookLine,RiWhatsappLine, RiBehanceLine, RiDiscordLine} from 'react-icons/ri'

const Socials = () => {
  return( 
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.linkedin.com/in/hasanrafay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className='hover:text-[#0077B5] transition-all duration-300'>
    <RiLinkedinLine />
    </Link>
    <Link href={'https://www.instagram.com/syed_zada9060?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=='} className='hover:text-[#d62976] transition-all duration-300'>
    <RiInstagramLine />
    </Link>
    <Link href={'https://www.facebook.com/ArtrizGS?mibextid=rS40aB7S9Ucbxw6v'} className='hover:text-[#3b5998] transition-all duration-300'>
    <RiFacebookLine />
    </Link>
    <Link href={'https://api.whatsapp.com/send/?phone=%2B923184017664&text&type=phone_number&app_absent=0'} className='hover:text-[#25D366] transition-all duration-300'>
    <RiWhatsappLine />
    </Link>
    <Link href={'https://www.behance.net/syedhasanrafay/projects'} className='hover:text-[#fbff0c] transition-all duration-300'>
    <RiBehanceLine />
    </Link>
    <Link href={'http://discordapp.com/users/1212413904718925875'} className='hover:text-[#3877ff] transition-all duration-300'>
    <RiDiscordLine />
    </Link>
  </div>
);
};

export default Socials;
