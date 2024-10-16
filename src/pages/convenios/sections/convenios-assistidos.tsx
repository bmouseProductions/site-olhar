import cemig from '@/assets/images/logos-convenios/logo-cemig.png'
import copasa from '@/assets/images/logos-convenios/logo-copasa.png'
import farsev from '@/assets/images/logos-convenios/logo-farsev.png'
import ipsm from '@/assets/images/logos-convenios/logo-ipsm.png'
import portal from '@/assets/images/logos-convenios/logo-portal.png'
import unimed from '@/assets/images/logos-convenios/logo-unimed.png'
import vitalis from '@/assets/images/logos-convenios/logo-vitalis.png'
import premium from '@/assets/images/logos-convenios/premium-logo.png'


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
        <section className="container mx-auto py-10 xl:py-14 px-5 md:px-10 lg:px-14 xl:px-16">
            <h1 className="mt-5 text-[58px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase text-[#3d405b] font-bold text-center">
                Convenios
            </h1>
            <p className='mt-5'>
                Na nossa clínica oftalmológica, temos o compromisso de proporcionar um atendimento excepcional e acessível a 
                todos os nossos pacientes. Sabemos que a saúde ocular é fundamental, e por isso, buscamos oferecer uma ampla 
                variedade de convênios assistidos e parcerias estratégicas. Nossa missão é garantir que você tenha acesso a 
                serviços de qualidade, sem complicações. Trabalhamos com diversos convênios de saúde, permitindo que nossos 
                pacientes usufruam de um atendimento especializado sem preocupação. Nossa equipe está sempre à disposição 
                para ajudar na verificação de cobertura dos serviços oferecidos e para agendar consultas de acordo com as 
                suas necessidades. Confira abaixo alguns dos principais convênios que aceitamos:
            </p>

            <h2 className="mt-10 xl:mt-14 mb-2 text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                Convênios <span className="text-[#81b29a]">Assistidos:</span>
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