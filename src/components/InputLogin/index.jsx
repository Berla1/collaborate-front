import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const InputLogin = ({ toggleType, placeholder }) => {
  const [toggle, useToggle] = useState(false);

  function togglePassord() {
    useToggle(!toggle);
  }
  return (
    <div className="relative">
      <input
        type={toggle || toggleType == 'none' ? "text" : "password"}
        placeholder={placeholder}
        className="rounded-xl py-4 px-3 bg-[#535353] placeholder-[#939393]  outline-none w-[300px] lg:w-[400px]"
      />
      <div style={{ display: toggleType }}>
        {toggle ? (
          <FaRegEye
            color="#FF7837"
            onClick={togglePassord}
            className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2"
          />
        ) : (
          <FaRegEyeSlash
            color="#FF7837"
            onClick={togglePassord}
            className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2"
          />
        )}
      </div>
    </div>
  );
};

export default InputLogin;
