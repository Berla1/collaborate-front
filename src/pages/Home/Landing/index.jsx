import Botao from "../../../components/Botao";
import Saly from '../../../assets/landing/saly-38.svg'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


const Landing = () => {
  return (
    <section className="flex mt-24 items-start h-screen ">
      <div className="flex flex-col gap-6 mt-14">
        <h1 className="text-[64px] text-white font-bold leading-tight">
          Conheça pessoas, desenvolva,{" "}
          <span className="text-[#FF7837]">colabore</span>
        </h1>
        <p className="w-1/2 text-white text-2xl">
          No Collaborate você contribui para projetos reais nas diferentes áreas
          da programação.
        </p>
        <Botao
          bgColor={"#FF7837"}
          text={"Explorar"}
          textColor={"white"}
          width={"15%"}
        />
      </div>
      <img src={Saly} alt="" />
      <MdOutlineKeyboardDoubleArrowDown className="absolute left-1/2 bottom-10 animate-bounce" size={50} color="#FF7837"/>


    </section>
    
  );
};

export default Landing;
