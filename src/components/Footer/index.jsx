import Input from "../../components/Input";

const Footer = () => {
    return (
        <footer className="flex justify-center items-center min-h-[300px]  mt-14 ">
            <div className="flex flex-col justify-center items-center text-center w-[1135px] gap-6">
                <h1 className="text-white text-5xl font-bold mb-4 ">
                    Milhares de mentes criativas encontram no Collaborate seu espaço para crescer.
                </h1>
                <p className="text-[#8F9FA3] w-[637px]">
                    Seja aprimorando suas habilidades, colaborando em projetos incríveis ou construindo um portfólio forte, o Collaborate é onde você transforma ideias em conquistas. Junte-se à comunidade que conecta talentos e cria futuros.
                </p>
                <Input/>
            </div>
        </footer>
    );
}

export default Footer;
