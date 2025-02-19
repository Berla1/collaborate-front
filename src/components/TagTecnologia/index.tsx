import React from "react";

interface ITagTecologia {
    tecnologia: string;
    imagemTecnologia: string;
}

const TagTecnologia: React.FC<ITagTecologia> = ({ tecnologia, imagemTecnologia }) => {
    return ( 
        <div className="flex bg-[#535353] rounded-lg justify-center w-fit gap-3 py-1 px-3">
            <h5>{tecnologia}</h5>
            <img src={imagemTecnologia} alt="Imagem tecnologia" />
        </div>
     );
}
 
export default TagTecnologia;