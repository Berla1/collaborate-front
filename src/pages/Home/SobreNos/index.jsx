import Berla from "../../../assets/foto-berla.svg";
import Vinicius from "../../../assets/foto-vinicius.svg";
import Linkedin from "../../../assets/icon-linkedin.svg";
import Github from "../../../assets/icon-github.svg";

const SobreNos = () => {
  return (
    <section className="flex flex-col text-white font-medium mt-44">
      <h1 className=" flex justify-center mb-10 text-[64px] font-bold">
        Sobre Nós
      </h1>
      <div className="flex gap-7 bg-[#FF7837] py-28 px-10 w-full ">
        <img src={Berla} alt="" />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl">Gustavo Berlanga</h1>
          <p className="text-xl">
            Com 19 anos apaixonado por tecnologia, cursando Engenharia de
            Software na FIAP
          </p>
          <div className="flex ">
            <a href="https://www.linkedin.com/in/gustavo-berlanga/" target="_blank">
              <img className="w-12" src={Linkedin} alt="" />
            </a>
            <a href="https://github.com/Berla1" target="_blank">
              <img className="w-12" src={Github} alt="" />
            </a>
          </div>
        </div>
        <img src={Vinicius} alt="" />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl">Vinicius Gardim</h1>
          <p className="text-xl">
            Com 19 anos apaixonado por tecnologia, cursando Engenharia de
            Software na FIAP
          </p>
          <div className="flex">
            <a href="https://www.linkedin.com/in/vinicius-gardim-756085251/" target="_blank">
              <img className="w-12" src={Linkedin} alt="" />
            </a>
            <a href="https://github.com/gardim1" target="_blank">
              <img className="w-12" src={Github} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
