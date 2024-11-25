import Joia from "../../../assets/landing/joia-3d.svg"
import Play from "../../../assets/landing/play-3d.svg"
import Chat from "../../../assets/landing/chat-3d.svg"


const OCollaborate = () => {
    return (  
    <section className="flex flex-col gap-8">
        <h2 className=" flex items-center justify-center gap-8 text-[64px] text-white font-bold mb-20">
          O que é o <span className="text-[#FF7837]">Collaborate</span>
        </h2>

        <div className="flex items-center justify-between">
            <img className="ml-48" src={Joia} alt="" />
          
          <p className="w-1/2 text-3xl text-white font-medium ">
            É uma plataforma que une pessoas com habilidades técnicas distintas
            a fim de colaborar para um projeto que pode ser usado para <span  className="text-[#FF7837]">aprender
            tecnologias</span> ou como <span  className="text-[#FF7837]">portfólio</span>.
          </p>
        </div>

        <div className="flex w-full gap-40">
          <p className="text-3xl text-white font-medium w-1/2">
          O <span className="text-[#FF7837]">Collaborate</span> nasceu quando percebemos que contribuir para grandes projetos é essencial para aprender novas tecnologias e conhecer pessoas, mas enfrentávamos o <span className="text-[#FF7837]">medo</span> de não dominar certas habilidades e a <span className="text-[#FF7837]">dificuldade de encontrar pessoas</span> para colaborar.
          </p>
          <img src={Play} alt="" />
        </div>
        <div className="flex items-center justify-between">
          <img className="ml-48" src={Chat} alt="" />
          <p className="w-1/2 text-3xl text-white font-medium ">
            Aqui você pode aprender junto com outras pessoas enquanto cria <span className="text-[#FF7837]">projetos reais</span>, ou até mesmo tirar aquela ideia do papel! <span className="text-[#FF7837]">E ai ta pronto para colaborar?</span>
          </p>
        </div>
    </section>
    );
}
 
export default OCollaborate;