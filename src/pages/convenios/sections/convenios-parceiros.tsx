import aapi from '@/assets/images/logos-parceiros/logo-aapi.png'
import aispemg from '@/assets/images/logos-parceiros/logo-aispemg.png'
import assec from '@/assets/images/logos-parceiros/logo-assec.png'
import grega from '@/assets/images/logos-parceiros/logo-grega.png'
import minasBene from '@/assets/images/logos-parceiros/logo-minasBene.png'
import minasMed from '@/assets/images/logos-parceiros/logo-minasMed.png'
import sinstrasp from '@/assets/images/logos-parceiros/logo-sintrasp.png'

export default function SectionConveniosParceiros() {
    const parceiros = [
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={aapi} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={aispemg} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={assec} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={grega} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={minasBene} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={minasMed} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={sinstrasp} alt="" />,
    ]
    return (
        <section className="container mx-auto py-10 xl:py-14 px-5 md:px-10 lg:px-14 xl:px-16 space-y-5 md:space-y-10">
            <h2 className="mb-2 text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                Convênios <span className="text-[#81b29a]">Parceiros:</span>
            </h2>
            <div className="mx-auto mt-5 lg:mt-10 w-full lg:w-2/3 flex flex-col md:flex-row flex-wrap md:justify-center">
                {
                    parceiros.map((parceiro, index) => (
                        <div key={index} className="flex justify-center">
                            {parceiro}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}