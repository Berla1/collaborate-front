import React from "react";

import { Link } from "react-router-dom";
import Logo from '../../assets/landing/logo-grande.svg'
import Botao from "../Botao";

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <Link to={'/'}>
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="flex gap-3">
        <Link to={'/login'}><Botao text={"Entrar"} textColor={"#FF7837"}/></Link> 
        <Botao text={"Cadastrar"} bgColor={"#FF7837"} textColor={"white"}/>
      </div>
    </nav>
  );
};

export default Nav;
