import React from "react";

interface Props {
  buttonText: string;
  padding: string;
}

const Button1: React.FC<Props> = ({ buttonText, padding }) => {
  return (
    <div>
      <button
        className={`bg-light-green px-5 text-lg rounded-xl border-[1px] border-[#2aeaaaa5] ${padding}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button1;
