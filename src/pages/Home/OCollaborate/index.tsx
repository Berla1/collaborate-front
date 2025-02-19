import React from "react";

import Joia from "../../../assets/landing/joia-3d.svg"
import Play from "../../../assets/landing/play-3d.svg"
import Chat from "../../../assets/landing/chat-3d.svg"


const OCollaborate = () => {
    return (  
    <section className="flex flex-col justify-center items-center gap-8 mt-56">
        <h2 className=" text-3xl text-white font-bold mb-10 lg:text-[64px] lg:mb-20">
          O que é o <span className="text-[#FF7837]">Collaborate?</span>
        </h2>

        <div className="flex items-center justify-between">
            <img className="ml-48 hidden lg:block" src={Joia} alt="" />
          
          <p className="text-xl text-white font-medium lg:w-1/2 lg:text-3xl">
            É uma plataforma que une pessoas com habilidades técnicas distintas
            a fim de colaborar para um projeto que pode ser usado para <span  className="text-[#FF7837]">aprender
            tecnologias</span> ou como <span  className="text-[#FF7837]">portfólio</span>.
          </p>
        </div>

        <div className="flex w-full gap-40">
          <p className="text-xl text-white font-medium lg:w-1/2 lg:text-3xl">
          O <span className="text-[#FF7837]">Collaborate</span> nasceu quando percebemos que contribuir para grandes projetos é essencial para aprender novas tecnologias e conhecer pessoas, mas enfrentávamos o <span className="text-[#FF7837]">medo</span> de não dominar certas habilidades e a <span className="text-[#FF7837]">dificuldade de encontrar pessoas</span> para colaborar.
          </p>
          <img src={Play} className="hidden lg:block" alt="" />
        </div>

        <div className="flex items-center justify-between">
          <img className="ml-48 hidden lg:block" src={Chat} alt="" />
          <p className="text-xl text-white font-medium lg:w-1/2 lg:text-3xl">
            Aqui você pode aprender junto com outras pessoas enquanto cria <span className="text-[#FF7837]">projetos reais</span>, ou até mesmo tirar aquela ideia do papel! <span className="text-[#FF7837]">E ai ta pronto para colaborar?</span>
          </p>
        </div>
    </section>
    );
}
 
export default OCollaborate;