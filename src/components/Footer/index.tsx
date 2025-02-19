import React from "react";

import X from "../../assets/footer/icon-x.svg";
import Facebook from "../../assets/footer/icon-facebook.svg";
import Linkedin from "../../assets/footer/icon-linkedin2.svg";
import Youtube from "../../assets/footer/icon-youtube.svg";
import Twitch from "../../assets/footer/icon-twitch.svg";
import Tiktok from "../../assets/footer/icon-tiktok.svg";
import Github from "../../assets/footer/icon-github2.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col text-[#939393] border-[#939393] border-t p-6 lg:flex-row">
      <div className="flex p-6">
        <div>
          <ul className="flex flex-wrap gap-8 mx-10 justify-center text-center lg:flex-row">
            <li className="lg:mr-10">
              <h4>© 2024 Collaborate, Inc.</h4>
            </li>
            <li className="hover:underline hover:cursor-pointer">
              O que é o Collaborate?
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Entre em contato
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Não compartilhar informações pessoais
            </li>
            <li className="hover:underline hover:cursor-pointer">Cookies</li>
          </ul>
        </div>
      </div>
      <div className="flex p-6 justify-center lg:ml-auto">
        <ul className="flex gap-2 ">
          <li>
            <a href="">
              <img className="w-5 h-5" src={X} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Linkedin} alt="" />
            </a>
          </li>
          <li>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=-ZiySPbSk42yO7ch">
              <img src={Youtube} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Twitch} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Tiktok} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Github} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
