import X from "../../assets/icon-x.svg";
import Facebook from "../../assets/icon-facebook.svg";
import Linkedin from "../../assets/icon-linkedin2.svg";
import Youtube from "../../assets/icon-youtube.svg";
import Twitch from "../../assets/icon-twitch.svg";
import Tiktok from "../../assets/icon-tiktok.svg";
import Github from "../../assets/icon-github2.svg";

const Footer = () => {
  return (
    <footer className="flex text-[#939393] border-[#939393] border-t p-6 ">
      <div className="flex p-6">
        <div>
          <h4>© 2024 Collaborate, Inc.</h4>
        </div>
        <div>
          <ul className="flex gap-8 mx-10">
            <li className="hover:underline hover:cursor-pointer">
              O que é o Collaborate?
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Entre em contato
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          <h4>Cookies</h4>
          <h4>Não compartilhar informações pessoais</h4>
        </div>
      </div>
      <div className="flex p-6  ml-auto">
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
