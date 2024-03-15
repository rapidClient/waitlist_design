const InputComponent = ({
  type,
  label,
  error,
  register,
  accept,
}) => {
  return (
    <div className="grid gap-1">
      <p className='text-[#596480] font-semibold text-[14px] md:text-lg leading-6 md:leading-8'>{label}</p>
      <div className="grid gap-1">
        <div
          className={
            error
              ? 'relative flex items-center bg-transparent border-b border-red-600 rounded-sm text-[#35480D] outline-none mb-4'
              : 'relative flex items-center bg-transparent border-b rounded-sm text-[#35480D] outline-none border-[#596480] mb-4'
          }
        >
          <input
            className="border-b border-[#596480] text-base p-1 outline-none text-[#596480] w-full bg-transparent rounded-sm no-number-arrows focus:border-none"
            type={type}
            {...register}
            accept={accept}
          />
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
