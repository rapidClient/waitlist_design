import { useForm } from 'react-hook-form';
import InputComponent from './reusables/InputComponent';
import SelectComponent from './reusables/SelectComponent';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify'
// import axios from "axios"

const schema = yup.object().shape({
  companyName: yup.string().required('Company Name field cannot be empty'),
  companyEmail: yup.string().required('Company Email field cannot be empty'),
  companyIndustry: yup.string().required('Company Industry field cannot be empty'),
});
const Form = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {
    getValues,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = async() => {
    try{
        setIsLoading(true)
        const data = getValues();
        console.log('Form Data:',  data);
        // await axios.post("http://localhost:8800/company", data)
        toast.success('Success!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
      })
        setIsLoading(false)
        reset()
    }
    catch(err){
        console.log(err)
        setIsLoading(false)
        toast.error('Please try again', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
      })
    }
    
  };

  return (
    <section className='pt-[3rem] md:pt-[6rem] md:grid lg:flex md:justify-center lg:justify-between md:items-center' id="join_section">
        <div className='md:w-full lg:w-1/2 md:text-start text-center'>
            <h2 className='text-[#004CFF] font-semibold text-[24px] text-3xl md:text-4xl'>Join our Waitlist!</h2>
            <p className='text-[#001547] font-semibold text-base md:text-lg leading-8 pt-4 md:pt-8'>Please fill out the form with your company&#39;s details.</p>
        </div>
        <form className='md:w-full lg:w-1/2' onSubmit={handleSubmit(onSubmit)}>
            <div className='pt-[1.5rem]'>
                <InputComponent 
                    type={'text'} 
                    label={"Company Name"} 
                    error={errors?.companyName?.message}
                    register={register('companyName')}
                />
            </div>
            <div className='pt-[1.5rem]'>
                <InputComponent 
                    type={'email'} 
                    label={"Company Email"} 
                    error={errors?.companyEmail?.message}
                    register={register('companyEmail')}
                />
            </div>
            <div className='pt-[1.5rem]'>
                  <SelectComponent 
                    type={'text'} 
                    elements={['Retail', 'Mining', 'Banking', 'Telecommunication', 'Ecommerce', 'Media', 'Entertainment', 'Technology','Manufacturing']}
                    label={"Company Industry"} 
                    error={errors?.companyIndustry?.message}
                    register={register('companyIndustry')}
                />
            </div>
            <button type="submit" className='bg-[#004CFF] text-[#FFFFFF] font-semibold text-base py-3 rounded-lg w-full mt-8'>
                {isLoading ? (
                    <CircularProgress sx={{ color: 'white' }}
                    thickness={6}
                    size={18} />
                 ) : ('Join the Waitlist!' 
                )}
                </button>            
        </form>
    </section>
  );
};

export default Form;
