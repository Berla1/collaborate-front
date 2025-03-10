import React from "react";

interface IBotao {
  text: string;
  bgColor?: string;
  textColor: string;
  width?: string;
}

const Botao: React.FC<IBotao> = ({ text, bgColor, textColor, width }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      className={`px-4 py-2 rounded-lg border-2 border-[#FF7837] ${width || ''} hover:transition-all hover:shadow-glow`}
    >
      {text}
    </button>
  );
};

export default Botao;