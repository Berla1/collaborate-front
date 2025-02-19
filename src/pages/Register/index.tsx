import React from "react";

import Botao from "../../components/Botao";
import Google from "../../assets/login/redes/google.svg";
import Facebook from "../../assets/login/redes/facebook.svg";
import Github from "../../assets/login/redes/github.svg";
import Foguetinho from "../../assets/login/foguetinho.svg";
import LogoMenor from "../../assets/login/logo-menor.png";
import { Link } from "react-router-dom";
import InputLogin from "../../components/InputLogin";

const Register = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-full py-8 text-white gap-10 lg:h-screen lg:flex-row ">
        <img className="w-[50px] lg:hidden" src={LogoMenor} alt="" />

        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold items-center justify-center lg:text-[64px] lg:w-3/4 lg:leading-tight">
            Bem vindo ao <span className="text-[#FF7837]">Collaborate</span>
          </h1>
          <h2 className="text-sm text-center lg:text-2xl lg:w-2/5 lg:text-left">
            Por favor registre-se para ter acesso ao Collaborate
          </h2>
          <h3 className="mt-6 hidden lg:block">
            Já tem uma conta?{" "}
            <Link to={"/login"} className="text-[#FF7837] hover:underline">
              Entrar
            </Link>
          </h3>
        </div>

        <div>
          <form className="flex flex-col ">
            <h2 className="text-[48px] font-bold mb-5 hidden lg:block">
              Registre-se
            </h2>
            <div className="flex flex-col gap-5 ">
               <InputLogin placeholder={"Insira seu e-mail"} toggleType={"none"}/> 
              <InputLogin placeholder={"Nome de usuário"} toggleType={"none"} />{/* Se quiser o input sem o olho é so colocar o toggleType como 'none'  */}
              <InputLogin placeholder={"Senha"} />
              <InputLogin placeholder={"Confirmar senha"} />
            </div>
            <span className="text-[#FF7837] hover:underline mt-2 mb-10 flex justify-end text-sm">
              Esqueceu sua senha?
            </span>
            <Botao bgColor={"#FF7837"} text={"Entrar"} textColor={"white"} />
            <p className="text-[#939393] flex justify-center py-10">
              ou continue com
            </p>
            <div className="flex justify-center gap-9">
              <img src={Google} alt="Logo Google" className="cursor-pointer" />
              <img
                src={Facebook}
                alt="Logo Facebook"
                className="cursor-pointer"
              />
              <img src={Github} alt="Logo GitHub" className="cursor-pointer" />
            </div>
          </form>
        </div>

        <img
          src={Foguetinho}
          alt=""
          className="absolute left-[32%] bottom-0 w-[30%] hidden lg:block"
        />
        <h3 className="text-[#939393] lg:hidden">
          Já tem uma conta?{" "}
          <Link className="text-[#FF7837] hover:underline" to={"/login"}>
            Entrar
          </Link>
        </h3>
      </section>
    </>
  );
};

export default Register;
