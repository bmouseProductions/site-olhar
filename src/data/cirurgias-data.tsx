import catarataImage from '../assets/images/especialidades/catarata.webp'
import glaucomaImage from '../assets/images/especialidades/glaucoma.webp'
import refrativaImage from '../assets/images/especialidades/refrativa.webp'
import intraImage from '../assets/images/especialidades/intra-contato.webp'
import plasticaImage from '../assets/images/especialidades/plastica-ocular.webp'
import pterigioImage from '../assets/images/especialidades/pterigio.webp'

interface Cirurgia {
    nome: string;
    imagem: string;
    descricao: string;
}

type arrayCirurgias = Array<Cirurgia>

export const cirurgias:arrayCirurgias = [
    {
        nome: "Cirurgia de Catarata",
        imagem: catarataImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Cirurgia de Glaucoma",
        imagem: glaucomaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Cirurgias Refrativas",
        imagem: refrativaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Injeções Intra-Vítreas",
        imagem: intraImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Plástica Ocular",
        imagem: plasticaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Pterígio",
        imagem: pterigioImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
]