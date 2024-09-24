import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SectionDepoimentos() {
    return (
        <section className="container md:min-h-[550px] m-auto py-10 xl:py-14 flex flex-col md:flex-row md:items-center md:gap-24">
            <div className='md:w-2/3 space-y-5 md:space-y-10 px-5 md:pl-10 lg:pl-14 xl:pl-16'>
                <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                    O que nossos <span className="text-[#81b29a] ">pacientes</span> falam
                </h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit nobis commodi recusandae eaque voluptas eveniet magni veritatis consectetur cupiditate numquam dignissimos est nihil, incidunt quaerat fugit, qui totam harum!
                </p>
            </div>

            <Swiper
                spaceBetween={20}
                slidesPerView={1.3}
                breakpoints={{
                    1040: { slidesPerView: 1.8 },
                }}
                loop={true}
                className='w-full !pl-5 md:w-1/2 mt-5'
            >
                <SwiperSlide>
                    <div className='w-full h-[300px] px-5 py-10 flex flex-col justify-center text-center text-white bg-[#3d405b] rounded-xl'>
                        <h3 className='text-2xl font-semibold'>
                            Jucelina de Oliveira
                        </h3>

                        <span className='text-center mt-3 mb-7'>
                            Patos de minas
                        </span>

                        <p className='text-center'>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, debitis?"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[300px] px-5 py-10 flex flex-col justify-center gap-3 text-center text-white bg-[#3d405b] rounded-xl'>
                        <h3 className='text-2xl font-semibold'>
                            Jucelina de Oliveira
                        </h3>

                        <span className='text-center'>
                            Patos de minas
                        </span>

                        <p className='text-center'>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, debitis?"
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}