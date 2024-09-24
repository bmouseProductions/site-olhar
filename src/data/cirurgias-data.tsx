import catarataImage from '../assets/images/especialidades/catarata.webp';
import glaucomaImage from '../assets/images/especialidades/glaucoma.webp';
import intraImage from '../assets/images/especialidades/glaucoma.webp';
import plasticaImage from '../assets/images/especialidades/plastica-ocular.webp';
import pterigioImage from '../assets/images/especialidades/catarata.webp';

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
        descricao: "É indicada nos casos de opacificação do cristalino e quando há comprometimento da acuidade visual. A visão se torna embaçada, dificultando a realização de atividades como leitura, direção de veículos ou qualquer outra atividade importante para a pessoa.",
    },
    {
        nome: "Cirurgia de Glaucoma",
        imagem: glaucomaImage,
        descricao: "A cirurgia de glaucoma está indicada apenas nos casos em que não há um controle adequado da pressão ocular com o uso de medicamentos ou quando há intolerância aos mesmos.",
    },
    {
        nome: "Cirurgias Refrativas",
        imagem: glaucomaImage,
        descricao: "As cirurgias refrativas tem o objetivo de corrigir os defeitos de refração (miopia, hipermetropia e astigmatismo) quando a pessoa já não se adapta bem aos óculos ou lentes de contato, ou não deseja usá-los mais. Diversas são as técnicas utilizadas, dependendo de cada caso.",
    },
    {
        nome: "Injeções Intra-Vítreas",
        imagem: intraImage,
        descricao: "A injeção intravítrea de anti-angiogênico é utilizada para o tratamento de diferentes doenças que afetam a retina. A medicação é aplicada diretamente no vítreo (região interna e posterior do olho).",
    },
    {
        nome: "Plástica Ocular",
        imagem: plasticaImage,
        descricao: "As plásticas oculares são cirurgias que melhoram a estética e a funcionalidade das pálpebras, aliviando desconfortos e melhorando o campo visual. A remoção de calázios e tumores é crucial para a saúde ocular, tornando essas intervenções essenciais para o bem-estar dos olhos.",
    },
    {
        nome: "Pterígio",
        imagem: pterigioImage,
        descricao: "O pterígio é uma doença ocular caracterizada pelo aparecimento de uma membrana fibrovascular sobre a córnea, que invade a superfície do olho, avançando em direção ao centro, podendo atingir a pupila.",
    },
]