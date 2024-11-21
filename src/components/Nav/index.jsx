import Logo from "../../assets/logo-grande.svg";
import Botao from "../Botao";

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <a href="#">
        <img src={Logo} alt="Logo" />
      </a>
      <div className="flex gap-3">
        <Botao text={"Entrar"} textColor={"#FF7837"}/>
        <Botao text={"Cadastrar"} bgColor={"#FF7837"} textColor={"white"}/>
      </div>
    </nav>
  );
};

export default Nav;
