import React from "react";

import Berla from "../../../assets/landing/sobrenos/foto-berla.svg"
import Vinicius from "../../../assets/landing/sobrenos/foto-vinicius.svg";
import Linkedin from "../../../assets/landing/sobrenos/icon-linkedin.svg"
import Github from "../../../assets/landing/sobrenos/icon-github.svg"

const SobreNos = () => {
  return (
    <section className="flex flex-col text-white font-medium mt-44">
      <h1 className=" flex justify-center mb-10 text-3xl font-bold lg:text-[64px]">
        Sobre Nós
      </h1>
      <div className="flex flex-col items-center gap-7 bg-[#FF7837] py-28 px-10 w-full lg:flex-row ">
        <img src={Berla} className="w-2/3 lg:w-1/2" alt="Foto Gustavo" />
        <div className="flex flex-col gap-3 text-center items-center lg:items-start lg:text-left">
          <h1 className="text-2xl font-bold">Gustavo Berlanga</h1>
          <p className="text-xl">
            Com 19 anos apaixonado por tecnologia, cursando Engenharia de
            Software na FIAP
          </p>
          <div className="flex ">
            <a href="https://www.linkedin.com/in/gustavo-berlanga/" target="_blank">
              <img className="lg:w-12" src={Linkedin} alt="" />
            </a>
            <a href="https://github.com/Berla1" target="_blank">
              <img className="lg:w-12" src={Github} alt="" />
            </a>
          </div>
        </div>
        <img src={Vinicius} className="w-2/3 lg:w-1/2" alt="Foto Vinicius" />
        <div className="flex flex-col gap-3 text-center items-center lg:items-start lg:text-left">
          <h1 className="text-2xl font-bold">Vinicius Gardim</h1>
          <p className="text-xl">
            Com 19 anos apaixonado por tecnologia, cursando Engenharia de
            Software na FIAP
          </p>
          <div className="flex">
            <a href="https://www.linkedin.com/in/vinicius-gardim-756085251/" target="_blank">
              <img className="lg:w-12" src={Linkedin} alt="" />
            </a>
            <a href="https://github.com/gardim1" target="_blank">
              <img className="lg:w-12" src={Github} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
