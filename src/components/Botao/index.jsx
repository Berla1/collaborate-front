const Botao = ({ text, bgColor, textColor, width }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor, width: width}}
      className="px-4 py-2 rounded-lg border-2 border-[#FF7837] hover:transition-all hover:shadow-glow"
    >
      {text}
    </button>
  );
};

export default Botao;
