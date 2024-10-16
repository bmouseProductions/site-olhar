
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SlideServices from '@/components/slider-sevices';

import { exames } from '@/data/exames-data';

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
        <section id='exames' className="container mx-auto py-10 xl:py-14 px-5 md:px-0 md:pl-10 lg:pl-14 xl:pl-16 space-y-5 overflow-hidden">
            <div className='md:pr-10 lg:pr-14 xl:pr-16 space-y-5
            
            
             '>
                <h2 className="mb-2 text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                    Nossos <span className="text-[#81b29a]">Exames:</span>
                </h2>
                <p>
                    Na nossa clínica oftalmológica, priorizamos a saúde dos seus olhos com um atendimento completo e especializado.
                    Oferecemos uma ampla gama de exames para diagnosticar condições oculares e monitorar sua saúde visual. Nossa 
                    equipe utiliza tecnologia avançada para garantir precisão e conforto durante cada procedimento.
                </p>
            </div>

            <SlideServices services={exames}/>
        </section>
    )
}