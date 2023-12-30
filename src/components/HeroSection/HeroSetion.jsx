import { images } from "../../assets";
import TypewriterAnimation from "./TypewriterAnimation"

const HeroSection = () => {
  const words = ['No more call queues.', '24/7 Availability.', 'Faster response time.', 'Highly Scalable.', 'Increased efficiency.', 'Reduced costs.'];
  const { text, cursor } = TypewriterAnimation(words);

  return (
    <section className='sm:grid md:flex justify-between'>
      <div className='pt-8 lg:pt-12 md:w-[60%] lg:w-1/2'>
        <h1 className='text-[40px] md:text-[56px] lg:text-[64px] font-bold text-[#001547] leading-[48px] md:leading-[64px] lg:leading-[72px] pb-6 mb:pb-10'>
          Let <span className='text-[#004CFF]'>AI</span> Handle Your Company&#39;s Customer Care Line
        </h1>
        <p className='text-[16px] md:text-[20px] font-semibold text-[#596480] leading-6 md:leading-8 pb-12'>
          Automate your customer care line with our multilingual AI. Train our base model with your company&#39;s data and have rapidClient manage all your customer calls.
        </p>
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-5 md:gap-10 pb-6'>
          <button className='bg-transparent text-[#596480] font-semibold text-[16px] md:text-[20px] px-5 py-4 rounded-lg hover:text-[#004CFF] border border-solid border-[#596480] border-1'>
            Join the Waitlist!
          </button>
          <p className='text-[#004CFF] font-semibold text-[16px] md:text-[20px] leading-8'>
            {text}
            {cursor && '|'}
          </p>
        </div>
      </div>
      <img src={images?.heroImage} alt='' className='hidden md:block md:w-[40%]' />
    </section>
  );
};

export default HeroSection;
