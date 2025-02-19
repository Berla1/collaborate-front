import React from "react";

import Input from "../../../components/InputEntrar";

const Entrar = () => {
    return (
        <section className="flex justify-center items-center min-h-[300px] my-14 px-2">
            <div className="flex flex-col justify-center items-center text-center lg:w-[1135px] gap-6">
                <h1 className="text-white text-2xl font-bold mb-4 lg:text-5xl">
                    Milhares de mentes criativas encontram no Collaborate seu espaço para <span className="text-[#FF7837]">crescer.</span>
                </h1>
                <p className="text-[#939393] lg:w-[637px]">
                    Seja aprimorando suas habilidades, colaborando em projetos incríveis ou construindo um portfólio forte, o Collaborate é onde você transforma ideias em conquistas. Junte-se à comunidade que conecta talentos e cria futuros.
                </p>
                <Input/>
            </div>
        </section>
    );
}

export default Entrar;
