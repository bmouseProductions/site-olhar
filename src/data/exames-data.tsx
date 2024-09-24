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
        descricao: "É o exame de visão capaz de medir o comprimento axial do globo ocular e de suas estruturas (câmara anterior, cristalino, cavidade vítrea). É o principal exame oftalmológico para calcular o grau da lente intra-ocular implantada na cirurgia de catarata. Pode ser realizada biometria ultrassônica ou óptica (hoje mais utilizada).",
    },
    {
        nome: "Capimetria Computadorizada",
        imagem: capimetriaImage,
        descricao: "É um exame que avalia o campo visual, ou seja, a medida da visão periférica, através de um aparelho altamente tecnológico chamado campímetro .Durante o exame expomos aos pacientes pontos luminosos de tamanho e intensidade variados que se movem de uma região a outra do aparelho até que seja visto e assinalado pelo paciente.",
    },
    {
        nome: "Curva Tensional Diária",
        imagem: curvaImage,
        descricao: "A curva tensional diária é o exame de visão onde o paciente disponibiliza um dia para realizar medidas repetidas da pressão intra-ocular nas diferentes horas do dia.",
    },
    {
        nome: "Gonioscopia",
        imagem: goniocopiaImage,
        descricao: "A Gonioscopia é um exame de visão que utiliza uma lente especial para o estudo do ângulo da câmara anterior do olho, onde é realizada a drenagem do humor aquoso (líquido que preenche a câmara anterior).",
    },
    {
        nome: "Mapeamento de Retina",
        imagem: retinaImage,
        descricao: "É um exame oftalmológico realizado com oftalmoscópio indireto, que permite a análise de todas as estruturas encontradas no fundo do olho como a retina, o nervo óptico e o vítreo.",
    },
    {
        nome: "Microscopia Especular da Córnea",
        imagem: microscopiaImage,
        descricao: "É um exame de visão que permite realizar a contagem do número de células endoteliais da córnea e analisar o aspecto das mesmas, identificando qualquer degeneração ou atrofia do tecido. Indicado para pacientes que realizarão cirurgia oculares (como de catarata), adaptação de lentes de contato, entre outros.",
    },
    {
        nome: "Paquimetria",
        imagem: paquimetriaImage,
        descricao: "É o exame de visão que mede a espessura da córnea. É muito importante na avaliação para a cirurgia refrativa e diagnóstico de ceratocone.",
    },
    {
        nome: "Retinografia",
        imagem: retinografiaImage,
        descricao: "É um exame de imagem que fotografa as áreas do fundo do olho, como a retina, a coróide, o nervo óptico e os vasos sanguíneos. Necessário para diagnóstico e acompanhamento de doenças da retina e glaucoma.",
    },
    {
        nome: "Teste de Estereospsia",
        imagem: esterospsiaImage,
        descricao: `É um exame oftalmológico utilizado para avaliar a visão estereoscópica, ou percepção de profundidade (a "visão 3D") que é dada pela visão dos dois olhos em conjunto.`,
    },
    {
        nome: "Tomografia de Coerência Óptica",
        imagem: tomografiaImage,
        descricao: "É um exame baseado na interferometria óptica, capaz de mostrar em alta resolução as camadas da retina, nervo e coróide, além do segmento anterior. Não invasivo e sem necessidade de contato, trata-se do maior avanço na propedêutica oftalmológica da última década. É de grande auxílio no diagnóstico e acompanhamento de doenças retinianas e do nervo óptico.",
    },
    {
        nome: "Tonometria",
        imagem: tonometriaImage,
        descricao: "Tonometria é o exame de visão que mede a pressão intra-ocular, utilizando aparelhos com métodos de sopro ou de contato.",
    },
    {
        nome: "Topografia Computadorizada da Córnea",
        imagem: topografiaImage,
        descricao: "Analisa a curvatura da córnea em toda a sua extensão desde o seu centro até a sua periferia e avalia as alterações de sua superfície como a regularidade e a simetria, permitindo identificar astigmatismos e outras irregularidades na córnea, como o ceratocone.",
    },
]