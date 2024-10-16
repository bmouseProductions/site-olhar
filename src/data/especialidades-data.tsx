import catarataImage from '@/assets/images/especialidades/catarata.webp'
import corneaImage from '@/assets/images/especialidades/cornea.webp'
import glaucomaImage from '@/assets/images/especialidades/glaucoma.webp'
import lentesImage from '@/assets/images/especialidades/lentes-contato.webp'
import plasticaImage from '@/assets/images/especialidades/plastica-ocular.webp'
import retinaImage from '@/assets/images/especialidades/retina.webp'
import traumaImage from '@/assets/images/especialidades/trauma-ocular.webp'

interface Especialidade {
    nome: string;
    imagem: string;
    resumo: string;
    descricao: string;
}

type arrayEspecialidades = Array<Especialidade>

export const especialidades:arrayEspecialidades = [
    {
        nome: "Catarata",
        imagem: catarataImage,
        resumo: `A catarata é uma lesão ocular que atinge e torna opaco o cristalino (lente natural situada atrás da íris, 
            cuja transparência permite que os raios de luz o atravessem e alcancem a retina para formar a imagem), o que 
            compromete a visão.
        `,
        descricao: `A catarata é uma lesão ocular que atinge e torna opaco o cristalino (lente natural situada atrás da íris, 
            cuja transparência permite que os raios de luz o atravessem e alcancem a retina para formar a imagem), o que 
            compromete a visão.
            <br /><br />
            A evolução costuma ser lenta, e a doença pode afetar primeiro um dos olhos e só mais tarde o outro. 
            Como os raios luminosos não conseguem atingir plenamente a retina, o portador de catarata tem dificuldade 
            para enxergar com nitidez.
        `,
    },
    {
        nome: "Córnea",
        imagem: corneaImage,
        resumo: `A córnea é um tecido transparente, fino e resistente localizado na parte anterior do olho. É a primeira 
            interface que a luz atravessa. Ela permite a entrada da luz e executa dois terços das tarefas de foco.
        `,
        descricao: `A córnea é um tecido transparente, fino e resistente localizado na parte anterior do olho. É a primeira 
            interface que a luz atravessa. Ela permite a entrada da luz e executa dois terços das tarefas de foco.
            <br /><br />
            Várias doenças oculares podem debilitar a córnea, causando a perda de sua transparência, ou irregularidade 
            de sua forma ou superfície. Como exemplos temos: ceratocone, trauma no olho, infecções, queimaduras por 
            substâncias químicas, enfermidades congênitas ou outras causas em que a pessoa pode ter a visão bastante 
            reduzida ou, às vezes, até perder a visão.
        `,
    },
    {
        nome: "Glaucoma",
        imagem: glaucomaImage,
        resumo: `Glaucoma é uma doença ocular que tem como principal fator de risco a elevação da pressão intra-ocular, 
            o que provoca lesões no nervo ótico e, como consequência, o comprometimento visual.
        `,
        descricao: `Glaucoma é uma doença ocular que tem como principal fator de risco a elevação da pressão intra-ocular, 
            o que provoca lesões no nervo ótico e, como consequência, o comprometimento visual.
            <br /><br />
            Se não for tratado adequadamente, pode levar à cegueira.
        `,
    },
    {
        nome: "Lentes de Contato e Refração",
        imagem: lentesImage,
        resumo: `Lente de contato é uma lente oftálmica corretiva utilizada sobre a córnea. Embora usada principalmente 
        por quem não deseja usar óculos, as lentes de contato podem ser indicadas quando existe diferença de grau 
        importante entre os olhos ou uma córnea com irregularidades (como no ceratocone).
        `,
        descricao: `Lente de contato é uma lente oftálmica corretiva utilizada sobre a córnea. Embora usada principalmente 
            por quem não deseja usar óculos, as lentes de contato podem ser indicadas quando existe diferença de grau 
            importante entre os olhos ou uma córnea com irregularidades (como no ceratocone).
            <br /><br />
            Elas podem ser gelatinosas ou rígidas. Ambas são feitas com diferentes composições e diferentes métodos 
            de fabricação. O exame de refração é o exame realizado para avaliar o erro refrativo ( "grau") apresentado 
            pelo paciente.
            <br /><br />
            Faz parte da consulta oftalmológica básica e pode resultar na prescrição de óculos ou lentes de contato. 
            É através do exame de refração que avaliamos também a acuidade visual do paciente e podemos detectar várias 
            doenças oculares.
        `,
    },
    {
        nome: "Plástica Ocular",
        imagem: plasticaImage,
        resumo: `A plástica ocular é uma especialidade da oftalmologia que visa avaliar e, se necessário, efetuar 
            cirurgias para correções de alterações congênitas (de nascimento) ou adquiridas das pálpebras.
        `,
        descricao: `A plástica ocular é uma especialidade da oftalmologia que visa avaliar e, se necessário, efetuar 
            cirurgias para correções de alterações congênitas (de nascimento) ou adquiridas das pálpebras.
            <br /><br />
            Dentre as mais comuns estão a blefaroplastia, a cirurgia para correção de ectrópio, ptose e entrópio.
        `,
    },
    {
        nome: "Retina",
        imagem: retinaImage,
        resumo: `A retina é uma camada fina de tecido nervoso sensível à luz, localizada no interior do olho. É o 
            tecido que transforma luz em estímulo nervoso e o envia ao cérebro. O tratamento de doenças vítreo-retinianas 
            tem avançado rapidamente nos últimos anos.
        `,
        descricao: `A retina é uma camada fina de tecido nervoso sensível à luz, localizada no interior do olho. É o 
            tecido que transforma luz em estímulo nervoso e o envia ao cérebro. O tratamento de doenças vítreo-retinianas 
            tem avançado rapidamente nos últimos anos.
            <br /><br />
            Novas terapias foram introduzidas para tratamento da retinopatia diabética e degenerações retinianas 
            relacionadas com a idade, baseadas em aplicações de medicamentos, associadas ou não ao laser.
        `,
    },
    {
        nome: "Trauma Ocular",
        imagem: traumaImage,
        resumo: `Os traumas do globo ocular podem, com maior ou menor intensidade, afetar a córnea, esclera, 
            cristalino, vítreo, retina, coróide, nervo óptico e músculos oculares. Todas estas são estruturas dos olhos e, 
            se traumatizadas, podem levar a sequelas irreversíveis, tanto na estética quanto na função dos olhos.
        `,
        descricao: `Os traumas do globo ocular podem, com maior ou menor intensidade, afetar a córnea, esclera, 
            cristalino, vítreo, retina, coróide, nervo óptico e músculos oculares. Todas estas são estruturas dos olhos e, 
            se traumatizadas, podem levar a sequelas irreversíveis, tanto na estética quanto na função dos olhos.
            <br /><br />
            Os traumas podem variar desde queimaduras oculares térmicas ou químicas, hemorragias dentro e fora dos 
            olhos, corpos estranhos na córnea ou dentro dos olhos, perfuração do globo ocular e rupturas dos músculos.
        `,
    },
]