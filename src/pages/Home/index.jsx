import Botao from "../../components/Botao";
import Nav from "../../components/Nav";
import Saly from "../../assets/saly-38.svg";
import Joia from "../../assets/joia-3d.svg";
import Play from "../../assets/play-3d.svg";
import Chat from "../../assets/chat-3d.svg";

const Home = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <section className="flex mt-24 items-start h-screen ">
        <div className="flex flex-col gap-6 mt-14">
          <h1 className="text-[64px] text-white font-bold leading-tight">
            Conheça pessoas, desenvolva,{" "}
            <span className="text-[#FF7837]">colabore</span>
          </h1>
          <p className="w-1/2 text-white text-2xl">
            No Collaborate você contribui para projetos reais nas diferentes
            áreas da programação.
          </p>
          <Botao bgColor={"#FF7837"} text={"Explorar"} textColor={"white"} width={"15%"} />
        </div>
        <img src={Saly} alt="" />
      </section>

      <section className="">
        <h2 className=" flex items-center justify-center gap-8 text-[64px] text-white font-bold">
          O que é o <span className="text-[#FF7837]">Collaborate</span>
        </h2>
        <div className="flex items-center ml-[153px]">
          <img src={Joia} alt="" />
          <div style={{ width: "241px" }}></div>
          <p className="w-[636px] h-[200px] text-[30px] text-white font-bold ">
            É uma plataforma que une pessoas com habilidades técnicas distintas
            a fim de colaborar para um projeto que pode ser usado para <span  className="text-[#FF7837]">aprender
            tecnologias</span> ou como <span  className="text-[#FF7837]">portfólio</span>.
          </p>
        </div>
        <div className="flex ml-[29px]">
          <p className=" w-[667px] h-[280px] text-[30px] text-white font-bold ">
          O <span className="text-[#FF7837]">Collaborate</span> nasceu quando percebemos que contribuir para grandes projetos é essencial para aprender novas tecnologias e conhecer pessoas, mas enfrentávamos o <span className="text-[#FF7837]">medo</span> de não dominar certas habilidades e a <span className="text-[#FF7837]">dificuldade de encontrar pessoas</span> para colaborar.
          </p>
          <div style={{ width: "146px" }}></div>
          <img src={Play} alt="" />
        </div>
        <div className="flex items-center ml-[153px]">
          <img src={Chat} alt="" />
          <div style={{ width: "241px" }}></div>
          <p className="w-[595px] h-[200px] text-[30px] text-white font-bold ">
            Aqui você pode aprender junto com outras pessoas enquanto cria <span className="text-[#FF7837]">projetos reais</span>, ou até mesmo tirar aquela ideia do papel! <span className="text-[#FF7837]">E ai ta pronto para colaborar?</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
