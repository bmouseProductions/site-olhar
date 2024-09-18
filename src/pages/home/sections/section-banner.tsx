import { NavLink } from 'react-router-dom'
import ModalVideo from '../../../components/modal-video-home'
import backgroundBanner from '../../../assets/images/background-banner.svg'
import doutorasBanner from '../../../assets/images/doutoras.svg'
import itestocopioIcon from '../../../assets/images/icons/itestocopio.svg'
import itestocopioAzulIcon from '../../../assets/images/icons/itestocopio-azul.svg'

export default function SectionBanner() {

    const widthScreen = window.innerWidth

    return (
        <section className="container mx-auto py-10 px-5 md:px-10 lg:px-14 xl:px-16">
            {
                widthScreen >= 768 ? 
                //BANNER DESKTOP
                <div className='relative'>
                    <div className='relative flex justify-center'>
                        <img 
                            src={backgroundBanner}
                            alt="banner  com palavras desfocadas" 
                            className="w-full "
                        />

                        <img 
                            src={doutorasBanner}
                            alt="banner  com palavras desfocadas" 
                            className="w-1/2 absolute z-10 bottom-0 ml-auto "
                        />

                        <h1 className='mt-5 absolute text-6xl xl:text-7xl 2xl:text-8xl uppercase text-white '>
                            seu <span className='font-bold'>olhar</span> é nosso <span className='font-bold'>foco</span>
                        </h1>
                    </div>

                    <a
                        href=''
                        target='_blank'
                        className='absolute z-20 left-5 lg:left-10 bottom-5 lg:bottom-10 px-5 pt-2 pb-3 font-semibold lg:text-lg uppercase text-black bg-white rounded-3xl shadow'
                    >
                        Faça seu agendamento
                    </a>

                    
                    <ModalVideo children= "Assista ao video" />
                </div> 
                :
                //BANNER MOBILE
                <div>

                </div>
            }
            

            <div className='mt-7 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <NavLink 
                    to=""
                    className='p-4 space-y-3 bg-white rounded-2xl shadow-lg hover:shadow-sm transition-all'
                >
                    <div className='w-fit p-3 bg-[#3d405b] rounded-full '>
                        <img 
                            src={itestocopioIcon} 
                            alt="icon itestoscópio"
                        />
                    </div>

                    <h3 className='text-2xl font-semibold text-[#3d405b] '>Cirurgias</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod unde cupiditate cum assumenda veritatis fugiat corporis, provident voluptas nostrum delectus minus iste deleniti eveniet obcaecati sapiente, quam est iusto?
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </NavLink>

                <NavLink 
                    to=""
                    className='p-4 space-y-3 bg-[#3d405b] rounded-2xl shadow-lg hover:shadow-sm transition-all text-white'
                >
                    <div className='w-fit p-3 bg-white rounded-full '>
                        <img 
                            src={itestocopioAzulIcon} 
                            alt="icon itestoscópio"
                            className='!text-red-700 '
                        />
                    </div>

                    <h3 className='text-2xl font-semibold'>Exames</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod unde cupiditate cum assumenda veritatis fugiat corporis, provident voluptas nostrum delectus minus iste deleniti eveniet obcaecati sapiente, quam est iusto?
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </NavLink>
            </div>
        </section>
    )
}