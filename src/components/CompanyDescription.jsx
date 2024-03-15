import { HashLink } from "react-router-hash-link"
const CompanyDescription = () => {
    
  return (
    <div className='grid gap-8 md:gap-12 lg:flex justify-between items-center'>
        <h1 className='lg:w-[40%] text-3xl md:text-5xl font-semibold text-[#001547] leading-[40px] md:leading-[56px] lg:leading-[64px] pt-6 mb:pt-0 text-center'>We&#39;re Building an AI Customer Care Agent for Companies.</h1>
        <p className= "lg:w-[60%] text-base font-semibold text-[#313131] leading-[32px] p-2 md:p-8 rounded-xl border-[2px] border-x-[#004CFF] border-y-[#00123D]">Imagine a future where your company&apos;s customer calls are seamlessly handled by cutting-edge AI, empowering your support team to focus exclusively on resolving critical issues. This transformative vision is not just a dream – it&apos;s a mission we&apos;re actively pursuing as a group of passionate friends committed to reshaping the landscape of AI applications. Now, why should you be excited? Because you have the chance to be a trailblazer in this revolution. By joining forces with us, you&apos;re not just adopting a service – you&apos;re becoming a pioneer in a new era of business efficiency. Here&apos;s the deal: we want you on board as one of our first users. You won&apos;t just witness the change; you&apos;ll be at the forefront of it. All we need are some key details from you to ensure you&apos;re part of this groundbreaking experience from day one. Don&apos;t let this opportunity pass you by. Trust us to redefine what&apos;s possible with AI, and let&apos;s make your business a success story together. Your journey to unparalleled efficiency and innovation starts here – <span className="text-[#004CFF]"><HashLink smooth to="/#join_section">sign up now</HashLink></span>, and let&apos;s embark on this exciting adventure together!</p>
    </div>
  )
}

export default CompanyDescription