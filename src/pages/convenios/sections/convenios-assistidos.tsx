import cemig from '../../../assets/images/logos-convenios/logo-cemig.jpg'
import copasa from '../../../assets/images/logos-convenios/logo-copasa.jpg'
import farsev from '../../../assets/images/logos-convenios/logo-farsev.jpg'
import ipsm from '../../../assets/images/logos-convenios/logo-ipsm.jpg'
import portal from '../../../assets/images/logos-convenios/logo-portal.jpg'
import unimed from '../../../assets/images/logos-convenios/logo-unimed.jpg'
import vitalis from '../../../assets/images/logos-convenios/logo-vitalis.jpg'
import premium from '../../../assets/images/logos-convenios/premium-logo.jpg'


export default function SectionConveniosAssistidos() {

    const parceiros = [
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={cemig} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={copasa} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={farsev} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={ipsm} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={portal} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={unimed} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={vitalis} alt="" />,
        <img className="max-w-[300px] h-28 py-3 mx-5 " src={premium} alt="" />,
    ]

    return (
        <section className="container mx-auto py-10 px-5 md:px-10 lg:px-14 xl:px-16 space-y-5 md:space-y-10">
            <h1 className="mt-5 text-6xl xl:text-7xl 2xl:text-8xl uppercase text-[#3d405b] text-center">
                Convenios
            </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos temporibus cum voluptatibus repudiandae alias aliquid 
                ratione hic nesciunt beatae similique? Aperiam aut, ipsum quos quod quis odio odit. Libero, ipsam?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, distinctio doloremque velit molestiae qui fuga 
                eligendi consequatur reprehenderit exercitationem possimus voluptatibus illum nostrum nemo adipisci unde, ab, nesciunt nam. Quasi.
            </p>

            <h2 className="mb-2 text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                Convênios <span className="text-[#81b29a]">Assistidos:</span>
            </h2>

            <div className="mx-auto mt-5 lg:mt-10 w-full lg:w-2/3 flex flex-col md:flex-row flex-wrap md:justify-center">
                {
                    parceiros.map((parceiro, index) => (
                        <div key={index} className="">
                            {parceiro}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}