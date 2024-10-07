
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

export default function SectionQuemSomos() {
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Missão',
          children: 'Promover e ampliar a assistência oftalmológica de excelência, ética e humanizada para a população de Patos de Minas e região.',
        },
        {
          key: '3',
          label: 'Visão',
          children: 'Ser reconhecido como referência em oftalmologia clínica e cirúrgica na região através da excelência em atendimento, processos e resultados.',
        },
        {
          key: '2',
          label: 'Valores',
          children: 'Na nossa clínica oftalmológica, a ética é fundamental em todas as nossas ações, garantindo transparência e integridade. Temos foco no cliente, oferecendo atendimento personalizado e inovador, sempre com alta qualidade e segurança. Valorizamos a responsabilidade social, contribuindo para a comunidade, e respeitamos cada paciente, tratando-o com empatia. Comprometemo-nos com resultados que melhorem a qualidade de vida, fazendo da saúde ocular nossa prioridade.',
        },
    ];

    return (
        <section className="rounded-3xl bg-gradient-to-b from-[#81B29A] to-[#00514B] ">
            <div className="container mx-auto py-10 xl:py-14 px-5 md:px-10 lg:px-14 xl:px-16">
                <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white text-center">
                    Afinal, quem <span className="text-[#3d405b] ">somos?</span> 
                </h2>
                
                <iframe
                    className="mt-5 mx-auto w-full h-[200px] md:max-w-[600px] md:h-[350px] lg:max-w-[700px] lg:h-[415px] xl:max-w-[1000px] xl:h-[515px] rounded-2xl"
                    src="https://www.youtube.com/embed/nzQHfJRZTck?si=f7jh6ywVAttrFAZi"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />

                <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                    <Tabs 
                        defaultActiveKey="1" 
                        items={items} 
                        className='text-white items-center text-base'
                    />
                    <p className='my-5 text-white'>
                        O Olhar Centro Oftalmológico nasceu da necessidade de se oferecer um centro de saúde ocular integral, 
                        objetivo e resolutivo. Desejamos ampliar o atendimento oftalmológico na cidade de Patos de Minas e em 
                        toda região, oferecendo à comunidade um centro de referência para atendimentos eletivos, urgências, 
                        exames oftalmológicos, além de cirurgias oculares.
                    </p>
                </div>
            </div>
        </section>
    )
}