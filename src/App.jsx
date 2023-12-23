// import { useState } from 'react'
import './App.css'
import {images} from "./assets"

function App() {

  return (
    <main className='home-container bg-[#F2F6FF]'>
      <nav className='flex justify-between items-center px-8 md:px-10 lg:px-24 py-3'>
        <img src={images?.logo} className='cursor-pointer lg:w-[12rem] lg:h-[8rem] md:h-[5rem] md:w-[9rem]' alt=''/>
        <div className='flex justify-between items-center gap-12'>
        <a href="#" className='cursor text-[#001547] text-[16px] md:text-[24px] font-medium'>About Us</a>
        <button className='hidden md:block bg-[#004CFF] text-[#FFFFFF] font-semibold text-[20px] px-5 py-4 rounded-lg'>Join the Waitlist!</button>
        </div>
      </nav>
      <hr />

      <section className='px-8 md:px-10 lg:px-24 pb-20'>
        <section className='sm:grid md:flex justify-between'>
          <div className='pt-8 lg:pt-12 md:w-[60%] lg:w-1/2'>
            <h1 className='text-[40px] md:text-[56px] lg:text-[64px] font-bold text-[#001547] leading-[48px] md:leading-[64px] lg:leading-[72px] pb-6 mb:pb-10'>Let <span className='text-[#004CFF]'>AI</span> Handle Your Company&#39;s Customer Care Line</h1>
            <p  className='text-[16px] md:text-[20px] font-semibold text-[#596480] leading-6 md:leading-8 pb-12'>Automate your customer care line with our multilingual AI. Train our base model with your company&#39;s data and have rapidClient manage all your customer calls.</p>
            <div className='flex justify-center items-center gap-10 pb-6'>
              <button className='bg-transparent text-[#596480] font-semibold text-[16px] md:text-[20px] px-5 py-4 rounded-lg hover:text-[#004CFF] border border-solid border-[#596480] border-1'>Join the Waitlist!</button>
              <p className='text-[#004CFF] font-semibold text-[16px] md:text-[20px] leading-8'>No more call queues.</p>
            </div>
          </div>
          <img src={images?.heroImage} alt='' className='hidden md:block md:w-[40%]'/>
        </section>

        <section className='pt-[3rem] md:pt-[6rem] md:grid lg:flex md:justify-center lg:justify-between md:items-center'>
          <div className='md:w-full lg:w-1/2'>
            <h2 className='text-[#004CFF] font-semibold text-[24px] md:text-[48px] leading-[32px] md:leading-[56px]'>Join our Waitlist!</h2>
            <p className='text-[#001547] font-semibold text-[16px] md:text-[20px] leading-8 pt-8'>Please fill out the form with your company&#39;s details.</p>
          </div>
          <form className='md:w-full lg:w-1/2'>
            <div className='pt-[1.5rem]'>
              <label htmlFor='name' className='text-[#596480] font-semibold text-[14px] md:text-[20px] leading-6 md:leading-8'>Company Name</label>
              <input type="text" name="name" className='w-full border-b border-[#596480] bg-transparent text-[16px] md:text-[24px] p-1 outline-none text-[#596480]'/>
            </div>
            <div className='pt-[1.5rem]'>
              <label htmlFor='email' className='text-[#596480] font-semibold text-[14px] md:text-[20px] leading-8'>Company Email</label>
              <input type="text" name="email" className='w-full border-b border-[#596480] bg-transparent text-[16px] md:text-[24px] p-1 outline-none text-[#596480]'/>
            </div>
            <div className='pt-[1.5rem]'>
              <label htmlFor='industry' className='text-[#596480] font-semibold text-[14px] md:text-[20px] leading-8'>Company Industry</label>
              <input type="text" name="industry" className='w-full border-b border-[#596480] bg-transparent text-[16px] md:text-[24px] p-1 outline-none text-[#596480]'/>
            </div>
            <p className='text-[#596480] font-semibold text-[16px] md:text-[20px] leading-8 pt-6'>Want to try out Beta Version for free?<input type='checkbox' className='h-[1.2rem] w-[2rem] outline-none'></input></p>
            <button className='bg-[#004CFF] text-[#FFFFFF] font-semibold text-[20px] px-5 py-4 rounded-lg w-full mt-6'>Join</button>            
          </form>
        </section>
      </section>

      <footer className='bg-[#001547] px-8 md:px-10 lg:px-24 py-10 flex-col md:flex md:flex-row-reverse justify-center md:justify-between items-center'>
        <div className='flex items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-1 cursor-pointer'>
            <img src={images?.email} alt=""/>
            <p className='text-[#596480] font-semibold text-[16px] md:text-[20px] leading-8'>Email</p>
          </div>
          <div className='flex items-center justify-center gap-1 cursor-pointer'>
            <img src={images?.x} alt=""/>
            <p className='text-[#596480] font-semibold text-[16px] md:text-[20px] leading-8'>X</p>
          </div>
          <div className='flex items-center justify-center gap-1 cursor-pointer'>
            <img src={images?.linkedin} alt=""/>
            <p className='text-[#596480] font-semibold text-[16px] md:text-[20px] leading-8'>LinkedIn</p>
          </div>
        </div> 
        <div className='mt-8'>
          <img src={images?.whiteLogo} className='w-[10rem] md:w-full cursor-pointer'/>
          <p className='text-[#596480] font-semibold text-[16px] md:text-[20px] leading-8 mt-6'>&copy; Copyright 2023</p>
        </div>       
      </footer>
    </main>
  )
}

export default App
