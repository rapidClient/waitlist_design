import {images} from "../assets"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const Navbar = ()=> {
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav className='fixed -top-1 left-0 right-0 flex bg-slate-100 home-container shadow-sm justify-between items-center px-6 md:px-10 lg:px-24 z-40 py-3 md:py-4'>
        <Link to={'/'} onClick={scrollToTop}>
          <img src={images?.logo} className='cursor-pointer lg:w-[180px] lg:h-[60px] md:h-[50px] md:w-[180px] h-[40px] w-[130px]' alt='logo'/>
        </Link>
        <div className='flex justify-between items-center gap-12'>
          <HashLink smooth to="/#join_section">
            <button className='hidden md:block bg-[#004CFF] text-[#FFFFFF] font-semibold text-base px-5 py-3 rounded-lg'>Join the Waitlist!</button>
          </HashLink>
        </div>
      </nav>
      <hr />
    </>
  )
}

export default Navbar
