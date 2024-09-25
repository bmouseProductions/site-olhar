import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ModalVideo from '../../../components/modal-video-home';
import backgroundBanner from '../../../assets/images/background-banner.svg';
import doutorasDesktop from '../../../assets/images/doutoras.svg';
import doutorasMobile from '../../../assets/images/doutoras-mobile.svg';
import itestocopioIcon from '../../../assets/images/icons/itestocopio.svg';
import itestocopioAzulIcon from '../../../assets/images/icons/itestocopio-azul.svg';

export default function SectionBanner() {

    const widthScreen = window.innerWidth;

    return (
        <section>
            {widthScreen >= 768 ? 
    // BANNER DESKTOP
    <div className='container mx-auto py-10 xl:py-14 md:px-10 lg:px-14 xl:px-16'>
        <div className='relative'>
            <div className='relative flex justify-center'>
                <LazyLoadImage 
                    src={backgroundBanner}
                    alt="banner com palavras desfocadas" 
                    effect="blur"
                    className="w-full shadow rounded-3xl"
                />

                <LazyLoadImage 
                    src={doutorasDesktop}
                    alt="banner com doutoras Marina e Cristina" 
                    effect="blur"
                    className="w-[42%] absolute z-10 bottom-0 ml-auto"
                />

                <h1 className='mt-5 absolute text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase text-white'>
                    seu <span className='font-bold'>olhar</span> é nosso <span className='font-bold'>foco</span>
                </h1>
            </div>

            <a
                href=''
                target='_blank'
                rel='noopener noreferrer'
                className='absolute z-20 left-5 lg:left-10 bottom-5 lg:bottom-10 px-5 pt-2 pb-3 font-semibold lg:text-lg uppercase text-black bg-white rounded-3xl shadow'
            >
                Faça seu agendamento
            </a>

            <ModalVideo children="Assista ao video" />
        </div>
    </div>
    :
    // BANNER MOBILE
    <div className='relative pt-10 bg-gradient-to-b from-[#f5f6fa] via-[#96cab1] to-[#3e415c]'>
        <h1 className='mt-5 px-5 text-5xl uppercase text-white text-center'>
            seu <span className='font-bold'>olhar</span> é nosso <span className='font-bold'>foco</span>
        </h1>

        <LazyLoadImage 
            src={doutorasMobile} 
            alt="banner com doutoras Marina e Cristina"
            effect="blur"
            className='w-full'
        />

        <div className='absolute -bottom-5 w-full flex justify-center'>
            <a
                href=''
                target='_blank'
                rel='noopener noreferrer'
                className='px-5 pt-2 pb-2.5 font-semibold lg:text-lg uppercase text-white bg-[#160f29] rounded-3xl shadow'
            >
                Faça seu agendamento
            </a>
        </div>
    </div>
}

            <div className='container mx-auto py-10 md:pb-14 px-5 md:px-10 lg:px-14 xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <NavLink 
                    to="/exames-cirugias#exames"
                    className='p-4 space-y-3 text-[#3d405b] bg-white rounded-2xl shadow-lg hover:shadow-sm transition-all'
                >
                    <div className='w-fit p-3 bg-[#3d405b] rounded-full'>
                        <img 
                            src={itestocopioIcon} 
                            alt="icon itestoscópio"
                            className='!text-red-700'
                        />
                    </div>

                    <h3 className='text-2xl font-semibold'>Exames</h3>

                    <p>
                        Cuide da sua saúde visual com nossos exames oculares completos! Utilizamos tecnologia avançada para 
                        realizar diagnósticos precisos e monitorar condições oculares. Agende sua consulta e descubra como podemos 
                        ajudar você a manter uma visão saudável!
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </NavLink>
                
                <NavLink 
                    to="/exames-cirugias#cirurgias"
                    className='p-4 space-y-3 text-white bg-[#3d405b] rounded-2xl shadow-lg hover:shadow-sm transition-all'
                >
                    <div className='w-fit p-3 bg-white rounded-full'>
                        <img 
                            src={itestocopioAzulIcon} 
                            alt="icon itestoscópio"
                        />
                    </div>

                    <h3 className='text-2xl font-semibold'>Cirurgias</h3>

                    <p>
                        Restaurar a sua visão é a nossa prioridade! Na nossa clínica, oferecemos cirurgias oculares realizadas
                        por especialistas altamente capacitados. Com um atendimento personalizado, garantimos que você receba o 
                        melhor cuidado. Agende sua avaliação e dê o primeiro passo para uma visão clara!
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </NavLink>
            </div>
        </section>
    );
}
