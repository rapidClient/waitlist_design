const SelectComponent = ({ disabled, label, error, register, elements }) => {
  return (
    <div className="grid gap-1 w-full">
      <p className="text-[#596480] font-semibold text-[14px] md:text-lg leading-6 md:leading-8">
        {label}
      </p>
      <div className="grid gap-1">
        <div
          className={
            error
              ? 'relative flex items-center outline-none border-b border-red-600 text-[#596480] text-base w-full mb-2'
              : 'relative w-full border-b border-[#596480] outline-none text-[#596480] flex items-center text-base mb-2'
          }
        >
          <select
            className="w-full py-2 px-3 outline-none bg-transparent border-none no-number-arrows cursor-pointer"
            {...register}
            disabled={disabled}
          >
            {elements?.map((element, index) => (
              <option key={index} className="bg-white">
                <p className="hover:bg-[#533054] cursor-pointer">
                  {element?.country || element}
                </p>
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
