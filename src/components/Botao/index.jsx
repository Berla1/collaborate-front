const Botao = ({ text, bgColor, textColor }) => {
    return (
        <button style={{ backgroundColor: bgColor, color: textColor }} className="px-4 py-2 rounded-lg border-2 border-[#FF7837]">{text}</button>
      );
}
 
export default Botao;