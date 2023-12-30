import {images} from "../assets"
import { Link } from "react-router-dom"

const Navbar = ()=> {
  return (
    <>
      <nav className='flex justify-between items-center px-8 md:px-10 lg:px-24 py-3'>
        <Link to={'/'}>
          <img src={images?.logo} className='cursor-pointer lg:w-[12rem] lg:h-[8rem] md:h-[5rem] md:w-[9rem]' alt=''/>
        </Link>
        <div className='flex justify-between items-center gap-12'>
          <Link to={'/about'}  className='cursor text-[#001547] text-[16px] md:text-[24px] font-medium'>About Us</Link>
        <button className='hidden md:block bg-[#004CFF] text-[#FFFFFF] font-semibold text-[20px] px-5 py-4 rounded-lg'>Join the Waitlist!</button>
        </div>
      </nav>
      <hr />
    </>
  )
}

export default Navbar
