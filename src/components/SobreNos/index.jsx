import Berla from "../../assets/foto-berla.svg"
import Vinicius from "../../assets/foto-vinicius.svg"
import Linkedin from "../../assets/icon-linkedin.svg"
import Github from "../../assets/icon-github.svg"

const SobreNos = () =>{
    return(
        <section className="flex flex-col  text-white font-medium" >
            <h1 className=" flex justify-center py-44 text-[64px]">Sobre Nós</h1>
            <div className="flex gap-7 bg-[#FF7837] py-40">
                <img className="ml-14 " src={Berla} alt="" />
                <div className="flex flex-col gap-3">
                    <h1 className="text-[24px]" >Gustavo Berlanga</h1>
                    <p className="text-[19px] w-[270px] h-[134px]" >Com 19 anos apaixonado por tecnologia, cursando Engenharia de Software na FIAP</p>
                    <div className="flex flex-row">
                        <img className="w-[70px] h-[70px]" src={Linkedin} alt="" />
                        <img className="w-[70px] h-[70px]" src={Github} alt="" />
                    </div>
                </div>
                <img className="ml-14" src={Vinicius} alt="" />
                <div className="flex flex-col gap-3">
                    <h1 className="text-[24px]" >Vinicius Gardim</h1>
                    <p className="text-[19px] w-[270px] h-[134px]" >Com 19 anos apaixonado por tecnologia, cursando Engenharia de Software na FIAP</p>
                    <div className="flex flex-row">
                        <img className="w-[70px] h-[70px]" src={Linkedin} alt="" />
                        <img className="w-[70px] h-[70px]" src={Github} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SobreNos;