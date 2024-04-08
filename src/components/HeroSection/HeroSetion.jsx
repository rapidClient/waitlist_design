import { images } from "../../assets";
import BeehivForm from "../BeehivForm";

const HeroSection = () => {
  return (
    <section className='sm:grid md:flex justify-between pt-16'>
      <div className='pt-8 lg:pt-12 md:w-[60%] lg:w-1/2'>
        <h1 className='text-center md:text-start md:text-5xl text-3xl font-bold text-[#001547] leading-[40px] md:leading-[64px] lg:leading-[60px] pb-6 mb:pb-8'>
          Let <span className='bg-gradient-to-r from-[#001547] to-[#004CFF] text-transparent bg-clip-text'>AI</span> Handle Your Company&#39;s Customer Care Line
        </h1>
        <p className='text-center md:text-start text-base md:text-lg font-semibold text-[#596480] leading-6 md:leading-8 pb-8'>
          Automate your customer care line with our multilingual AI. Train our base model with your company&#39;s data and have rapidClient manage all your customer calls.
        </p>
        <div className='flex flex-col-reverse lg:flex-row md:justify-start justify-center items-center gap-4 md:gap-10 pb-4 mb:pb-6'>
          <p className='text-[#004CFF] font-semibold text-xl md:text-2xl leading-8 [text-wrap:balance] bg-clip-text text-transparent md:text-left text-center'>
            <span
              className="text-[#004CFF] inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] overflow-hidden"
            >
              <ul className="block animate-text-slide-5 md:text-left text-center leading-tight [&_li]:block">
                <li>No more call queues.</li>
                <li>24/7 Availability.</li>
                <li>Faster response time.</li>
                <li>Highly Scalable.</li>
                <li>Increased efficiency.</li>
                <li aria-hidden="true">Reduced costs.</li>
              </ul>
            </span>
          </p>
        </div>
        <div className="hidden md:block">
          <BeehivForm />
        </div>
      </div>
      <img src={images?.heroImage} alt='' className='hidden md:block md:w-[35%] lg:w-[40%]' />
    </section>
  );
};

export default HeroSection;
