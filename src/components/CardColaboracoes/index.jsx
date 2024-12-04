import Zé from "../../assets/perfil/ze-do-caxao.svg";

const CardColaboracoes = () => {
  return (
    <>
      <div className="border-[#535353] border-2 rounded-lg p-4">
        <div className="flex gap-3 ">

          <div>
            <img src={Zé} alt="Foto de perfil" className="w-16"/>
          </div>
          <div>
            <h2 className="font-bold text-xl">Nome do carniça</h2>
            <p className="font-light text-sm">Descriçao do carniça</p>
          </div>

        </div>
        <div>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus, odio mollitia deserunt assumenda quaerat eum natus non et, esse suscipit quo illo ipsam quis rem veniam magnam? Eveniet, reiciendis.</p>

            <div className="flex items-center justify-center bg-[#FF7837] h-52 ">Imagem do projeto</div>
        </div>
      </div>
    </>
  );
};

export default CardColaboracoes;
