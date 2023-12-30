
const CompanyDescription = () => {
    const data = ["Amidst all the “AI frenzy”, wouldn’t it be cool, if there was an AI capable of taking care of your company’s customer phone calls, allowing your customer care agents to focus on resolving tickets? This question brought a group of three friends together. And we’re on a mission to define a new field of application for AI, and I’m sure you wouldn’t want to miss out. But the good news is that we got you, just provide us with the needed details and sign up to become one of our first users after the product launches. Oh, wait, lest we forget. We know it’s an awesome idea, and if you do believe so too and can’t wait till the product launches to start using it, please indicate by clicking “yes” on the “want to try out beta version for free” question. Thanks, we look forward to working with you and your company."]
    
  return (
    <div className='grid gap-8 md:gap-12 lg:flex justify-between items-center'>
        <h1 className='lg:w-1/2 text-[32px] md:text-[48px] lg:text-[56px] font-semibold text-[#001547] leading-[40px] md:leading-[56px] lg:leading-[64px] pt-6 mb:pt-10 text-center'>We&#39;re Building an AI Customer Care Agent for Companies.</h1>
        <p className= "lg:w-1/2 text-[16px] md:text-[20px] font-semibold text-[#313131] leading-[32px] p-2 md:p-8 rounded-xl border border-[#001547]">{data}</p>
    </div>
  )
}

export default CompanyDescription
