import SectionBanner from "./sections/section-banner";
import SectionDepoimentos from "./sections/section-depoimentos";
import SectionEspecialidades from "./sections/section-especialidades";
import SectionQuemSomos from "./sections/section-quem-somos";



export default function Home() {

    return (
        <>
            <SectionBanner />
            <SectionEspecialidades />
            <SectionQuemSomos />
            <SectionDepoimentos />
        </>
    )
}