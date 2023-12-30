// import { useEffect } from 'react';
import {images} from "../assets"
import { Link } from "react-router-dom"

const socialMediaItems = [
  { icon: images?.email, text: 'Email' },
  { icon: images?.x, text: 'X' },
  { icon: images?.linkedin, text: 'LinkedIn' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='bg-[#001547] px-8 md:px-10 lg:px-24 py-10 flex-col md:flex md:flex-row-reverse justify-center md:justify-between items-center'>
      <div className='flex items-center justify-between gap-10'>
        {socialMediaItems.map((item, index) => (
          <div key={index} className='flex items-center justify-center gap-1 cursor-pointer'>
            <img src={item.icon} alt=""/>
            <p className='text-[#596480] font-semibold text-[16px] md:text-[20px] leading-8'>{item.text}</p>
          </div>
        ))}
      </div>
      <div className='mt-8'>
        <Link to='/' onClick={scrollToTop}>
          <img src={images?.whiteLogo} className='w-[10rem] md:w-full cursor-pointer' alt="Logo" />
        </Link>
        <p className='text-[#596480] font-semibold text-[16px] md:text-[20px] leading-8 mt-6'>&copy; Copyright 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
