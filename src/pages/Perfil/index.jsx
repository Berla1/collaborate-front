import Zé from "../../assets/perfil/ze-do-caxao.svg";
import TagTecnologia from "../../components/TagTecnologia";
import React from "../../assets/perfil/react-icon.svg";
import CardColaboracoes from "../../components/CardColaboracoes";
import { FaArrowRightLong } from "react-icons/fa6";

const Perfil = () => {
  return (
    <>
      <header className="border-[#535353] border-b">
        <div className="h-32 bg-[#FF7837]">
          <img
            src={Zé}
            alt="Foto de perfil"
            className="absolute left-5 top-20 "
          />
        </div>

        <div className="p-5 mt-8 text-white">
          <h1 className="font-bold text-3xl">Zé da silva sauro</h1>
          <h2 className="font-light text-sm mt-1">
            Pequena descrição do zé da silva
          </h2>
          <div className="mt-6 flex gap-5">
            <p className="text-[#939393] font-light text-sm">
              Washington, Estados unidos
            </p>
            <p className="font-bold text-[#FF7837]">1.203 seguidores</p>
          </div>
        </div>
      </header>

      <section className="text-white p-5">
        <h2 className="text-2xl font-bold mb-5">Principais tecnologias</h2>
        <TagTecnologia tecnologia={"React"} imagemTecnologia={React} />
      </section>

      <section className="text-white p-5 ">
        <h2 className="text-2xl font-bold mb-5">Sobre</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi iste
          placeat architecto veritatis eaque eligendi saepe doloremque
          perspiciatis a aut eveniet reprehenderit laborum autem eos, quas,
          soluta vero in maiores. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptas itaque, quod quae iusto maiores repudiandae
          at ad ex natus et vitae cupiditate eveniet. Quasi rem, magnam
          obcaecati inventore odio id?
        </p>
      </section>

      <section className="text-white p-5">
        <h2 className="text-3xl font-bold mb-5">Colaborações</h2>

        <CardColaboracoes />
        <h3 className="flex justify-center mt-5 items-center gap-2">Exibir todas as colaborações <FaArrowRightLong size={18}/></h3>
      </section>
    </>
  );
};

export default Perfil;
