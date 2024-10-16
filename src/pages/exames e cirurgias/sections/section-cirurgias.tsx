import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SlideServices from '@/components/slider-sevices';

import { cirurgias } from '@/data/cirurgias-data';

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
        <section id='cirurgias' className="container mx-auto py-10 xl:py-14 px-5 md:px-0 md:pl-10 lg:pl-14 xl:pl-16 space-y-5  ">
            <div className='md:pr-10 lg:pr-14 xl:pr-16'>
                <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                    Cirurgias <span className="text-[#81b29a]">Realizadas:</span>
                </h2>
                <p>
                    Além dos exames, também realizamos cirurgias oculares, sempre com o objetivo de restaurar e melhorar a visão 
                    dos nossos pacientes. Nossos especialistas são altamente capacitados e dedicados a fornecer um tratamento 
                    personalizado, assegurando que você receba o melhor cuidado possível.
                </p>
            </div>

            <SlideServices services={cirurgias}/>
        </section>
    )
}