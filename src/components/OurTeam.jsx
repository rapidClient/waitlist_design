import { images } from "../assets";

const teamMembers = [
  {
    name: 'Collins Eze',
    role: 'Cofounder/CEO',
    image: images?.collins,
    linkedin: images?.linkedin,
    xBlack: images?.x_black,
  },
  {
    name: 'Nnadozie Chinedu',
    role: 'Cofounder/Frontend Engineer',
    image: images?.oscar,
    linkedin: images?.linkedin,
    xBlack: images?.x_black,
  },
  {
    name: 'Wisdom Ahaneku',
    role: 'Cofounder/Designer',
    image: images?.wisdom,
    linkedin: images?.linkedin,
    xBlack: images?.x_black,
  },
];

const OurTeam = () => {
  return (
    <>
      <div>
        <p className="text-[24px] md:text-[40px] text-center font-semibold text-[#001547] leading-[32px] md:leading-[48px] mt-14 lg:mt-40">
          The Team behind <span className='bg-gradient-to-r from-[#001547] to-[#004CFF] text-transparent bg-clip-text'>rapidClient</span>.
        </p>
      </div>
      <section className='grid gap-8 md:flex flex-wrap items-center md:justify-around lg:justify-between p-4 md:p-12 text-center'>
        {teamMembers.map((member, index) => (
          <div key={index} className='flex flex-col items-center gap-4'>
            <div className='bg-[#CCDBFF] rounded-[50%] px-5'>
              <img src={member.image} alt={member.name} className='rounded-full' />
            </div>
            <h3 className="text-[24px] font-semibold text-[#001547]">{member.name}</h3>
            <h4 className="text-[16px] text-[#596480]">{member.role}</h4>
            <div className='flex gap-8'>
              <img src={member.linkedin} alt="LinkedIn" />
              <img src={member.xBlack} alt="X" />
            </div>
          </div>
        ))}
      </section>
    </>    
  );
};

export default OurTeam;
