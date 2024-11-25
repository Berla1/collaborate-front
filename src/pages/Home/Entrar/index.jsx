import Input from "../../../components/Input";

const Entrar = () => {
    return (
        <section className="flex justify-center items-center min-h-[300px]  my-14 ">
            <div className="flex flex-col justify-center items-center text-center w-[1135px] gap-6">
                <h1 className="text-white text-5xl font-bold mb-4 ">
                    Milhares de mentes criativas encontram no Collaborate seu espaço para <span className="text-[#FF7837]">crescer.</span>
                </h1>
                <p className="text-[#939393] w-[637px]">
                    Seja aprimorando suas habilidades, colaborando em projetos incríveis ou construindo um portfólio forte, o Collaborate é onde você transforma ideias em conquistas. Junte-se à comunidade que conecta talentos e cria futuros.
                </p>
                <Input/>
            </div>
        </section>
    );
}

export default Entrar;
