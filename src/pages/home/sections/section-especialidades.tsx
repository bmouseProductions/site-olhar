import { especialidades } from '../../../data/especialidades-data';
import SlideServices from '../../../components/slider-sevices';

export default function SectionEspecialidades() {
    return (
        <section className="container mx-auto py-10 xl:py-20 pl-5 md:pl-10 lg:pl-14 xl:pl-16">
            <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                Nossas <span className="text-[#81b29a] "> Especialidades</span>
            </h2>

            <SlideServices services={especialidades} />
        </section>
    )
}