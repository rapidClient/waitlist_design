import {images} from "../assets"
import { Link } from "react-router-dom"

const socialMediaItems = [
  { icon: images?.email, text: 'Email', link: 'mailto:support@rapidclient.com.ng' },
  { icon: images?.x, text: 'X', link: 'https://x.com/rapidclient' },
  { icon: images?.linkedin, text: 'LinkedIn', link: 'https://www.linkedin.com/company/rapidclient' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='bg-[#001547] px-6 md:px-10 lg:px-24 py-10 flex-col md:flex md:flex-row-reverse justify-center md:justify-between items-center'>
      <div className='flex items-center justify-between gap-10'>
        {socialMediaItems.map((item, index) => (
          <a target="_blank" rel="noreferrer" href={item.link} key={index} className='flex items-center justify-center gap-1 cursor-pointer'>
            <img src={item.icon} alt="socials"/>
            <p className='text-[#596480] font-semibold text-[16px] md:text-[20px] leading-8'>{item.text}</p>
          </a>
        ))}
      </div>
      <div className='mt-8'>
        <Link to='/' onClick={scrollToTop}>
          <img src={images?.whiteLogo}  className='cursor-pointer lg:w-[180px] lg:h-[60px] md:h-[50px] md:w-[180px] h-[40px] w-[130px]'alt="Logo" />
        </Link>
        <p className='text-[#596480] font-semibold text-[16px] md:text-[20px] leading-8 mt-6'>&copy; Copyright 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
