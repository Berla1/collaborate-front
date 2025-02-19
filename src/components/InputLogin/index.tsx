import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface IInputLogin {
  toggleType?: string; 
  placeholder: string;
}

const InputLogin: React.FC<IInputLogin> = ({ toggleType, placeholder }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const togglePassword = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative">
      <input
        type={toggle || toggleType === 'none' ? "text" : "password"}
        placeholder={placeholder}
        className="rounded-xl py-4 px-3 bg-[#535353] placeholder-[#939393] outline-none w-[300px] lg:w-[400px]"
      />
      <div style={{ display: toggleType }}>
        {toggle ? (
          <FaRegEye
            color="#FF7837"
            onClick={togglePassword}
            className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2"
          />
        ) : (
          <FaRegEyeSlash
            color="#FF7837"
            onClick={togglePassword}
            className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2"
          />
        )}
      </div>
    </div>
  );
};

export default InputLogin;
