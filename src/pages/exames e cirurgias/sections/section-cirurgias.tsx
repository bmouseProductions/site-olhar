import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { exames } from '../../../data/exames-data';

export default function SectionCirurgias(){
    return (
        <section className="container mx-auto py-10 px-5 md:px-10 lg:px-14 xl:px-16">
            <h2 className="mb-2 text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                Cirurgias <span className="text-[#81b29a]">Realizadas:</span>
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque necessitatibus expedita impedit doloribus voluptas, reprehenderit nesciunt nostrum odit magnam numquam quas, quisquam sapiente molestias labore fugit, vitae delectus? Obcaecati, perferendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum sapiente illum distinctio error cum officiis sit non voluptate corporis numquam facere quam assumenda eum magnam a nemo, culpa harum?
            </p>

            <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2.1 },
                    1280: { slidesPerView: 3.1 },
                }}
                modules={[Autoplay]}
                className='md:!p-5 mt-10'
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