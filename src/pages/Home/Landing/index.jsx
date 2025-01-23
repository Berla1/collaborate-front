import Botao from "../../../components/Botao";
import Saly from '../../../assets/landing/saly-38.svg'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


const Landing = () => {
  return (
    <section className="flex mt-24 h-auto lg:items-start lg:h-screen">
      <div className="flex flex-col text-center gap-6 mt-6 items-center lg:mt-14 lg:items-start">
        <h1 className="text-3xl text-white font-bold leading-tight lg:text-[64px] lg:text-left">
          Conheça pessoas, desenvolva,{" "}
          <span className="text-[#FF7837]">colabore</span>
        </h1>
        <p className="text-white text-base lg:text-2xl lg:w-1/2 lg:text-left">
          No Collaborate você contribui para projetos reais nas diferentes áreas
          da programação.
        </p>
        <Botao
          bgColor={"#FF7837"}
          text={"Explorar"}
          textColor={"white"}
          width={"lg:w-[20%]"}
        />
      </div>
      <img src={Saly} alt="" className="hidden lg:block w-"/>
      <MdOutlineKeyboardDoubleArrowDown className="absolute justify-center bottom-10 left-1/2 animate-bounce hidden lg:block" size={40} color="#FF7837"/>


    </section>
    
  );
};

export default Landing;
