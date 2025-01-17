import React from 'react'

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onclick,
  onkeypress,
  href
}) => {''
  return (
    <button
    href={href}
    onClick={onclick}
    onkeypress={onkeypress}
      className={`flex justify-center items-center gap-2 px-7 py-4 font-bold border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-md ${fullWidth && "w-full"} hover:opacity-50 transition-all`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;