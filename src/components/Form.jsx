
const Form = () => {
  return (
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
  )
}

export default Form
