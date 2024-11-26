import Botao from "../../components/Botao";
import Google from "../../assets/login/redes/google.svg";
import Facebook from "../../assets/login/redes/facebook.svg";
import Github from "../../assets/login/redes/github.svg";
import Foguetinho from "../../assets/login/foguetinho.svg";
import LogoMenor from '../../assets/login/logo-menor.png'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [toggle, useToggle] = useState(false);

  function togglePassord() {
    useToggle(!toggle);
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center h-full py-8 text-white gap-10 lg:h-screen lg:flex-row ">
        <img className="w-[50px] lg:hidden" src={LogoMenor} alt="" />

        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold items-center justify-center lg:text-[64px] lg:w-3/4 lg:leading-tight">
            Bem vindo ao <span className="text-[#FF7837]">Collaborate</span>
          </h1>
          <h2 className="text-sm text-center lg:text-2xl lg:w-2/5 lg:text-left">
            Por favor faça o login para acessar sua conta
          </h2>
          <h3 className="mt-6 hidden lg:block">
            Não tem uma conta?{" "}
            <a href="#" className="text-[#FF7837] hover:underline">
              Registre-se
            </a>
          </h3>
        </div>

        <div>
          <form className="flex flex-col ">
            <h2 className="text-[48px] font-bold mb-5 hidden lg:block">Entrar</h2>
            <div className="flex flex-col gap-5 ">
              <input
                type="text"
                placeholder="Nome de usuário"
                className="rounded-xl py-4 px-3 bg-[#535353] placeholder-[#939393] w-[300px] outline-none lg:w-[400px]"
              />
              <div className="relative">
                <input
                  type={toggle ? "text" : "password"}
                  placeholder="Senha"
                  className="rounded-xl py-4 px-3 bg-[#535353] placeholder-[#939393] w-full outline-none"
                />
                {toggle ? (
                  <FaRegEye
                    color="#FF7837"
                    onClick={togglePassord}
                    className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2"
                  />
                ) : (
                  <FaRegEyeSlash
                    color="#FF7837"
                    onClick={togglePassord}
                    className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2"
                  />
                )}
              </div>
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
          Não tem uma conta? <Link className="text-[#FF7837] hover:underline" to={'/register'}>Registre-se</Link>
        </h3>
      </section>
    </>
  );
};

export default Login;
