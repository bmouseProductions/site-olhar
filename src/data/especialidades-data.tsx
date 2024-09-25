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
        descricao: "A catarata é uma lesão ocular que atinge e torna opaco o cristalino (lente natural situada atrás da íris, cuja transparência permite que os raios de luz o atravessem e alcancem a retina para formar a imagem), o que compromete a visão.",
    },
    {
        nome: "Córnea",
        imagem: corneaImage,
        descricao: "A córnea é um tecido transparente, fino e resistente localizado na parte anterior do olho. É a primeira interface que a luz atravessa. Ela permite a entrada da luz e executa dois terços das tarefas de foco.",
    },
    {
        nome: "Glaucoma",
        imagem: glaucomaImage,
        descricao: "Glaucoma é uma doença ocular que tem como principal fator de risco a elevação da pressão intra-ocular, o que provoca lesões no nervo ótico e, como consequência, o comprometimento visual.",
    },
    {
        nome: "Lentes de Contato e Refração",
        imagem: lentesImage,
        descricao: "Lente de contato é uma lente oftálmica corretiva utilizada sobre a córnea. Embora usada principalmente por quem não deseja usar óculos, as lentes de contato podem ser bem indicadas quando existe diferença de grau importante entre os olhos ou uma córnea com irregularidades (como no Ceratocone).",
    },
    {
        nome: "Plástica Ocular",
        imagem: plasticaImage,
        descricao: "A plástica ocular é uma especialidade da oftalmologia que visa avaliar e se necessário efetuar cirurgias para correções de alterações congênitas (de nascimento) ou adquiridas das pálpebras.",
    },
    {
        nome: "Retina",
        imagem: retinaImage,
        descricao: "A retina é uma camada fina de tecido nervoso sensível à luz localizada no interior do olho. É o tecido que transforma luz em estímulo nervoso e o envia ao cérebro. O tratamento de doenças vítreo-retinianas tem avançado rapidamente nos últimos anos.",
    },
    {
        nome: "Trauma Ocular",
        imagem: traumaImage,
        descricao: "Os traumas do globo ocular podem, com maior ou menor intensidade, afetar a córnea, esclera, cristalino, vítreo, retina, coróide, nervo óptico e músculos oculares. Todas estas são estruturas dos olhos e se traumatizadas podem levar a sequelas irreversíveis, tanto na estética quanto na função dos olhos.",
    },
]