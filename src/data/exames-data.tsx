import biometriaImage from '../assets/images/especialidades/catarata.webp'
import capimetriaImage from '../assets/images/especialidades/cornea.webp'
import curvaImage from '../assets/images/especialidades/glaucoma.webp'
import goniocopiaImage from '../assets/images/especialidades/lentes-contato.webp'
import retinaImage from '../assets/images/especialidades/retina.webp'
import microscopiaImage from '../assets/images/especialidades/cornea.webp'
import paquimetriaImage from '../assets/images/especialidades/glaucoma.webp'
import retinografiaImage from '../assets/images/especialidades/cornea.webp'
import esterospsiaImage from '../assets/images/especialidades/trauma-ocular.webp'
import tomografiaImage from '../assets/images/especialidades/glaucoma.webp'
import tonometriaImage from '../assets/images/especialidades/lentes-contato.webp'
import topografiaImage from '../assets/images/especialidades/plastica-ocular.webp'

interface Exames {
    nome: string;
    imagem: string;
    descricao: string;
}

type arrayExames = Array<Exames>

export const exames:arrayExames = [
    {
        nome: "Biometria Ocular",
        imagem: biometriaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Capimetria Computadorizada",
        imagem: capimetriaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Curva Tensional Diária",
        imagem: curvaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Gonioscopia",
        imagem: goniocopiaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Mapeamento de Retina",
        imagem: retinaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Microscopia Especular da Córnea",
        imagem: microscopiaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Paquimetria",
        imagem: paquimetriaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Retinografia",
        imagem: retinografiaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Teste de Estereospsia",
        imagem: esterospsiaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Tomografia de Coerência Óptica",
        imagem: tomografiaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Tonometria",
        imagem: tonometriaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
    {
        nome: "Topografia Computadorizada da Córnea",
        imagem: topografiaImage,
        descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.",
    },
]