import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

export default function SectionEstrutura(){
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
        <>
            <section className="container mx-auto py-10 xl:py-14 px-5 md:px-10 lg:px-14 xl:px-16 flex flex-col lg:flex-row gap-10">

                <div className="w-full lg:w-1/2">
                    <ImageGallery items={images} />
                </div>
                
                <div className="w-full lg:w-1/2 space-y-5">
                    <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                        A <span className="text-[#81b29a]">Clínica</span>
                    </h2>

                    <p>
                        O projeto Olhar foi realizado e executado de acordo com as normas e aprovado pela vigilância sanitária e órgãos responsáveis.
                    </p>

                    <ul className="list-disc pl-5">
                        <strong>
                            Oferecemos:
                        </strong>

                        <li>Modernas tecnologias para realização de exames e cirurgias oculares;</li>
                        <li>Plano de manutenção rigoroso de todos os equipamentos utilizados;</li>
                        <li>Equipe amplamente treinada para prestar o melhor atendimento ao paciente;</li>
                        <li>Sala de adaptação e treinamento para uso de lentes de contato;</li>
                        <li>Setor de orientações cirúrgicas para garantir ao paciente a melhor compreensão sobre cirurgias e procedimentos indicados;</li>
                        <li>Centro cirúrgico oftalmológico exclusivo;</li>
                        <li>Central de esterelização construído e equipado de acordo com as normas, com equipe amplamente treinada e processos rigidamente estabelecidos para garantir segurança em todos os procedimentos cirúrgicos oculares.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}