import catarataImage from '@/assets/images/cirurgias/catarata.webp';
import glaucomaImage from '@/assets/images/cirurgias/glaucoma.webp';
import refrativaImage from '@/assets/images/cirurgias/refrativa.webp';
import intraImage from '@/assets/images/cirurgias/injecao.webp';
import plasticaImage from '@/assets/images/especialidades/plastica-ocular.webp';
import pterigioImage from '@/assets/images/cirurgias/pterigio.webp';

interface Cirurgia {
    nome: string;
    imagem: string;
    resumo: string;
    descricao: string;
}

type arrayCirurgias = Array<Cirurgia>

export const cirurgias:arrayCirurgias = [
    {
        nome: "Cirurgia de Catarata",
        imagem: catarataImage,
        resumo: `É indicada nos casos de opacificação do cristalino e quando há comprometimento da acuidade visual.`,
        descricao: `É indicada nos casos de opacificação do cristalino e quando há comprometimento da acuidade visual. 
            A visão se torna embaçada, dificultando a realização de atividades como leitura, direção de veículos ou qualquer 
            outra atividade importante para a pessoa.
            <br /> <br />
            Atualmente, a cirurgia utiliza a técnica de facoemulsificação, na qual, através de uma microincisão (2.2 a 2.75mm), 
            uma fina ponteira dissolve e aspira o conteúdo do cristalino. Por essa mesma abertura, implanta-se uma lente intra-ocular 
            dobrável que irá substituir o cristalino opacificado. Hoje possuímos diversos tipos de lentes intra-oculares, o que nos 
            permite na cirurgia de catarata também corrigir o "grau" e garantir maior independência dos óculos ao paciente .
        `,
    },
    {
        nome: "Cirurgia de Glaucoma",
        imagem: glaucomaImage,
        resumo: `A cirurgia de glaucoma está indicada apenas nos casos em que não há um controle adequado da pressão ocular 
        com o uso de medicamentos ou quando há intolerância aos mesmos.`,
        descricao: `A cirurgia de glaucoma está indicada apenas nos casos em que não há um controle adequado da pressão ocular 
            com o uso de medicamentos ou quando há intolerância aos mesmos.
            <br /> <br />
            O princípio da cirurgia é a criação de uma via alternativa para a drenagem do humor aquoso. Na maioria dos casos, 
            forma-se uma fístula entre o espaço intra-ocular e o espaço subconjuntival.
            `,
    },
    {
        nome: "Cirurgias Refrativas",
        imagem: refrativaImage,
        resumo: `As cirurgias refrativas tem o objetivo de corrigir os defeitos de refração (miopia, hipermetropia e 
        astigmatismo) quando a pessoa já não se adapta bem aos óculos ou lentes de contato, ou não deseja usá-los mais.`,
        descricao: `As cirurgias refrativas tem o objetivo de corrigir os defeitos de refração (miopia, hipermetropia e 
            astigmatismo) quando a pessoa já não se adapta bem aos óculos ou lentes de contato, ou não deseja usá-los mais.
            Diversas são as técnicas utilizadas, dependendo de cada caso.
            <br /> <br />
            Atualmente, a maioria delas utiliza o Excimer LASER (pelas técnicas de LASIK e PRK), reesculpindo o perfil 
            anterior da córnea, de modo a alterar a sua curvatura, compensando o defeito refracional.
        `,
    },
    {
        nome: "Injeções Intra-Vítreas",
        imagem: intraImage,
        resumo: `A injeção intravítrea de anti-angiogênico é utilizada para o tratamento de diferentes doenças que afetam 
        a retina. A medicação é aplicada diretamente no vítreo (região interna e posterior do olho).`,
        descricao: `A injeção intravítrea de anti-angiogênico é utilizada para o tratamento de diferentes doenças que afetam 
            a retina. A medicação é aplicada diretamente no vítreo (região interna e posterior do olho).
            <br /> <br />
            Existem 2 tipos principais de medicamentos que podem ser injetados: os antiangiogênicos (que impedem a formação de 
            novos vasos ou neovasos) e os corticóides (anti-inflamatórios). Tanto os corticoides quanto os antiangiogênicos são 
            aplicados para o controle de doenças que levam ao edema ou hemorragia da mácula (região central da retina).
        `
    },
    {
        nome: "Plástica Ocular",
        imagem: plasticaImage,
        resumo: `As plásticas oculares, corrigem o excesso de pele e gordura nas pálpebras, rejuvenescendo o olhar e 
            melhorando a visão em casos de ptose. Podem ser realizadas nas pálpebras superiores ou inferiores, proporcionando 
            um aspecto mais descansado.
        `,
        descricao: `
            Existem várias cirurgias realizadas nas pálpebras, entre as mais comuns:
            <br/><br/>
            <strong>Blefaroplastia:</strong>
            Remoção do excesso de pele e das bolsas de gordura perioculares, diminuindo o peso sobre os olhos e a expressão de cansaço.
            <br/><br/>
            <strong>Ptose Palpebral:</strong>
            Correção da pálpebra superior caída, causando assimetria e perda do campo visual superior.
            <br/><br/>
            <strong>Entrópio:</strong>
            Correção da pálpebra virada para dentro, com toque dos cílios na superfície ocular, causando irritação e extremo desconforto.
            <br/><br/>
            <strong>Ectrópio:</strong>
            Correção da pálpebra virada para fora e afastada do globo ocular, não cumprindo a sua função de proteção do olho e causando exposição excessiva da superfície ocular, com consequente irritação da mesma.
            <br/><br/>
            <strong>Calázio:</strong>
            Remoção de secreção encistada na pálpebra, formando pequeno nódulo, que costuma aparecer após algum episódio de inflamação palpebral.
            <br/><br/>
            <strong>Tumores palpebrais:</strong>
            Retirada de lesões palpebrais suspeitas e reconstruções palpebrais. 
        `,
    },
    {
        nome: "Pterígio",
        imagem: pterigioImage,
        resumo: `O pterígio é uma doença ocular caracterizada pelo aparecimento de uma membrana fibrovascular sobre a córnea, 
        que invade a superfície do olho, avançando em direção ao centro, podendo atingir a pupila.`,
        descricao: `O pterígio é uma doença ocular caracterizada pelo aparecimento de uma membrana fibrovascular sobre a córnea, 
            que invade a superfície do olho, avançando em direção ao centro, podendo atingir a pupila.
            <br /> <br />
            A cirurgia está indicada nos casos de lesões grandes ou devido a sintomas como desconforto e olhos vermelhos.
        `,
    },
]