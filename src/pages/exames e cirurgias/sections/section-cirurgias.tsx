import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { cirurgias } from '../../../data/cirurgias-data';

export default function SectionCirurgias(){

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [hash]);
    
    return (
        <section id='cirurgias'>
            <div className="container mx-auto pt-10 xl:pt-14 px-5 md:px-10 lg:px-14 xl:px-16 space-y-5">
                <h2 className="mb-2 text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                    Cirurgias <span className="text-[#81b29a]">Realizadas:</span>
                </h2>
                <p>
                    Além dos exames, também realizamos cirurgias oculares, sempre com o objetivo de restaurar e melhorar a visão 
                    dos nossos pacientes. Nossos especialistas são altamente capacitados e dedicados a fornecer um tratamento 
                    personalizado, assegurando que você receba o melhor cuidado possível.
                </p>
            </div>

            <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                slidesPerGroupSkip={1}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2.1 },
                    1024: { slidesPerView: 2.2 },
                    1280: { slidesPerView: 3.2 },
                }}
                modules={[Autoplay]}
                className=' mt-10 !pl-5 md:!pl-10 lg:!pl-14 xl:pl-16 !pb-10 xl:!pb-14'
            >
                {cirurgias.map((cirurgia, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className='p-5 space-y-2 bg-white rounded-xl shadow-lg'
                        >
                            <h3 className='text-xl md:text-2xl font-semibold text-[#81b29a] '>
                                {cirurgia.nome}
                            </h3>

                            <p>
                                {cirurgia.descricao}
                            </p>

                            <img 
                                src= {cirurgia.imagem}
                                alt={`Imagem de exemplo exame de ${cirurgia.nome}`}
                                className="rounded w-full  "
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}