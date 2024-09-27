import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import  Modal  from '../components/modal-services';

interface ServiceInterface {
    nome: string;
    imagem: string;
    resumo: string;
    descricao: string;
}

interface SlideServicesProps {
    services: ServiceInterface[];
}

export default function SlideServices({ services }: SlideServicesProps) {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedService, setSelectedService] = useState<ServiceInterface | null>(null);
  
    const openModal = (service: ServiceInterface) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };
  
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    }

    return(
        <>
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
                className='pb-5 mt-10 '
            >
                {services.map((service: ServiceInterface, index: number) => (
                    <SwiperSlide key={index}>
                        <div 
                            className='p-5 space-y-2 bg-white rounded-xl shadow-lg'
                        >
                            <img 
                                src= {service.imagem}
                                alt={`Imagem de exemplo ${service.nome}`}
                                className="rounded w-full  "
                            />

                            <h3 className='text-xl md:text-2xl font-semibold text-[#81b29a] '>
                                {service.nome}
                            </h3>


                            <p>
                                {service.resumo}
                            </p>

                            <button 
                                className= 'px-5 py-2 rounded-xl text-lg  uppercase transition-all bg-[#81b29a] text-white border-2 border-[#81b29a] hover:bg-white hover:text-[#81b29a] '
                                onClick={() => openModal(service)}
                            >
                                Saiba mais
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {selectedService && (
                <Modal 
                    isOpen={isModalOpen}
                    onClose={closeModal} 
                    service={selectedService}
                />
            )}
        </>
    )
}