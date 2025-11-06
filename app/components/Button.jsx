import React from "react";

const Button = ({ title, backgound, border, textcolor }) => {
  return (
    <button
      className={`${backgound} ${border} ${textcolor} w-[130px] h-[50px] rounded-[30px] text-[15px]`}
    >
      {title}
    </button>
  );
};

export default Button;
