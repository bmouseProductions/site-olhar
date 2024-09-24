
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { exames } from '../../../data/exames-data';

import 'swiper/css';

export default function SectionExames(){
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
        <section id='exames' className="container mx-auto pt-10 xl:pt-14 px-5 md:px-0 md:pl-10 lg:pl-14 xl:pl-16 space-y-5  ">
            
            <h2 className="mb-2 text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                Nossos <span className="text-[#81b29a]">Exames:</span>
            </h2>
            <p>
                Na nossa clínica oftalmológica, priorizamos a saúde dos seus olhos com um atendimento completo e especializado.
                Oferecemos uma ampla gama de exames para diagnosticar condições oculares e monitorar sua saúde visual. Nossa 
                equipe utiliza tecnologia avançada para garantir precisão e conforto durante cada procedimento.
            </p>

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
                className=' mt-10 '
            >
                {exames.map((exame, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className='p-5 space-y-2 bg-white rounded-xl shadow-lg'
                        >
                            <h3 className='text-xl md:text-2xl font-semibold text-[#81b29a] '>
                                {exame.nome}
                            </h3>

                            <p>
                                {exame.descricao}
                            </p>

                            <img 
                                src= {exame.imagem}
                                alt={`Imagem de exemplo exame de ${exame.nome}`}
                                className="rounded w-full  "
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}