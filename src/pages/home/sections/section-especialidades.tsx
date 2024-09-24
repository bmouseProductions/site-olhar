import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { especialidades } from '../../../data/especialidades-data';

export default function SectionEspecialidades() {
    return (
        <section className="container mx-auto py-10 xl:py-20 pl-5 md:pl-10 lg:pl-14 xl:pl-16">
            <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                Nossas <span className="text-[#81b29a] "> Especialidades</span>
            </h2>

            <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2.1 },
                    1280: { slidesPerView: 3.1 },
                }}
                modules={[Autoplay]}
                className='md:!py-5 mt-10'
            >
                {especialidades.map((especialidade, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className='p-5 space-y-2 bg-white rounded-xl shadow-lg'
                        >
                            <h3 className='text-xl md:text-2xl font-semibold text-[#81b29a] '>
                                {especialidade.nome}
                            </h3>

                            <p>
                                {especialidade.descricao}
                            </p>

                            <img 
                                src= {especialidade.imagem}
                                alt={`Imagem de exemplo exame de ${especialidade.nome}`}
                                className="rounded w-full  "
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}