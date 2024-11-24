import Botao from "../../../components/Botao";
import Saly from "../../../assets/saly-38.svg";

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
    </section>
  );
};

export default Landing;
