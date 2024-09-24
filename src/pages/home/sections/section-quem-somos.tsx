
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

                
                <p className='my-5 text-white'>
                    O Olhar Centro Oftalmológico nasceu da necessidade de se oferecer um centro de saúde ocular integral, 
                    objetivo e resolutivo. Desejamos ampliar o atendimento oftalmológico na cidade de Patos de Minas e em 
                    toda região, oferecendo à comunidade um centro de referência para atendimentos eletivos, urgências, 
                    exames oftalmológicos, além de cirurgias oculares.
                </p>

                <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-7'>
                    <div className=' text-white'>
                        <Tabs 
                            defaultActiveKey="1" 
                            items={items} 
                            className='text-white items-center text-base'
                        />
                    </div>
                    <iframe
                        className="mx-auto w-full h-[220px] lg:h-[250px] xl:h-[350px] 2xl:h-[400px] rounded-3xl"
                        src="https://www.youtube.com/embed/XB0J3mVluWA?si=JCwsAXOa7HcIC3Zx"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                </div>
            </div>
        </section>
    )
}