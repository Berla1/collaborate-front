import Botao from "../../components/Botao";
import Google from "../../assets/redes/google.svg"
import Facebook from "../../assets/redes/facebook.svg"
import Github from "../../assets/redes/github.svg"

const Login = () => {
  return (
    <>
      <section className="flex items-center h-screen px-20 text-white ">
        <div className="flex flex-col gap-5">
          <h1 className=" text-[64px] w-3/4 font-bold leading-tight">
            Bem vindo ao <span className="text-[#FF7837]">Collaborate</span>
          </h1>
          <h2 className="text-2xl w-2/5">
            Por favor faça o login para acessar sua conta
          </h2>
          <h3 className="mt-6">
            Não tem uma conta?{" "}
            <a href="#" className="text-[#FF7837] hover:underline">
              Registre-se
            </a>
          </h3>
        </div>
        <div>
          <form className="flex flex-col ">
            <h2 className="text-[48px] font-bold mb-5">Entrar</h2>
            <div className="flex flex-col gap-5 ">
              <input
                type="text"
                placeholder="Nome de usuário"
                className="rounded-xl py-4 px-3 bg-[#535353] placeholder-[#939393] w-[400px] outline-none"
              />
              <input
                type="password"
                placeholder="Senha"
                className="rounded-xl py-4 px-3 bg-[#535353] placeholder-[#939393] w-[400px] outline-none"
              />
            </div>
            <span className="text-[#FF7837] hover:underline mt-2 mb-10 flex justify-end text-sm">
              Esqueceu sua senha?
            </span>
            <Botao bgColor={"#FF7837"} text={"Entrar"} textColor={"white"} />
            <p className="text-[#939393] flex justify-center py-10">ou continue com</p>
            <div className="flex justify-center gap-9">
                <img src={Google} alt="Logo Google" className="cursor-pointer"/>
                <img src={Facebook} alt="Logo Facebook" className="cursor-pointer"/>
                <img src={Github} alt="Logo GitHub" className="cursor-pointer"/>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
