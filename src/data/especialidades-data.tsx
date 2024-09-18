import catarataImage from '../assets/images/especialidades/catarata.webp'
import corneaImage from '../assets/images/especialidades/cornea.webp'
import glaucomaImage from '../assets/images/especialidades/glaucoma.webp'
import lentesImage from '../assets/images/especialidades/lentes-contato.webp'
import plasticaImage from '../assets/images/especialidades/plastica-ocular.webp'
import retinaImage from '../assets/images/especialidades/retina.webp'
import traumaImage from '../assets/images/especialidades/trauma-ocular.webp'

interface Especialidade {
    nome: string;
    imagem: string;
    descricao: string;
}

type arrayEspecialidades = Array<Especialidade>

export const especialidades:arrayEspecialidades = [
    {
        nome: "Catarata",
        imagem: catarataImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Córnea",
        imagem: corneaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Glaucoma",
        imagem: glaucomaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Lentes de Contato e Refração",
        imagem: lentesImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Plástica Ocular",
        imagem: plasticaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Retina",
        imagem: retinaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Trauma Ocular",
        imagem: traumaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
]