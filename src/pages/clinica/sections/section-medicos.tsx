import cristina from '@/assets/images/medicos/cristina.webp'
import marina from '@/assets/images/medicos/marina.webp'
import juliana from '@/assets/images/medicos/juliana.webp'
import joaoPedro from '@/assets/images/medicos/joaoPedro.webp'
import livia from '@/assets/images/medicos/livia.webp'
import felipe from '@/assets/images/medicos/felipe.webp'
import raquel from '@/assets/images/medicos/raquel.webp'


export default function SectionMedicos(){
    return (
        <>
            <section className="container mx-auto py-10 xl:py-14 px-5 md:px-10 lg:px-14 xl:px-16">
                <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3d405b] ">
                    Corpo <span className="text-[#81b29a]">Clínico</span>
                </h2>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 ">
                    {/* CRISTINA */}
                    <div className='p-5 flex flex-col gap-3 bg-white rounded-xl shadow-lg'>
                        <img src={cristina} alt="" className='rounded-lg' />
                        
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-[#81b29a] ">
                                Dra. Cristina Carvalho
                            </h3>
                            <span className='font-lg font-semibold text-[#3d405b] '>
                                Oftalmologista
                            </span>
                            <span className='text-sm font-semibold'>
                                CRM MG 55 347 
                            </span>
                        </div>

                        <ul className="pl-5 list-disc">
                            <li>
                                Graduação em Medicina - Faculdade de Ciências Médicas de Minas Gerais;
                            </li>

                            <li>
                                Residência em oftalmo no Hospital do Servidor Público de São Paulo;
                            </li>

                            <li>
                                Fellowship em Catarata e Glaucoma e no Hospital do Servidor Público de São Paulo.
                            </li>
                        </ul>
                    </div>

                    {/* MARINA */}
                    <div className='p-5 flex flex-col gap-3 bg-white rounded-xl shadow-lg'>
                        <img src={marina} alt="" className='rounded-lg' />

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-[#81b29a] ">
                                Dra. Marina Vilas Boas
                            </h3>
                            <span className='font-lg font-semibold text-[#3d405b] '>
                                Oftalmologista
                            </span>
                            <span className='text-sm font-semibold'>
                                CRM MG 47597
                            </span>
                        </div>

                        <ul className="pl-5 list-disc">
                            <li>
                                Graduação em Medicina - Universidade Federal de Minas Gerais;
                            </li>

                            <li>
                                Oftalmologia no Hospital IPSEMG;
                            </li>

                            <li>
                                Residência oftalmologia Hospital de Olhos de Sorocaba/ Banco de Olhos ( BOS).
                            </li>
                        </ul>
                    </div>
        
                    {/* FELIPE */}
                    <div className='p-5 flex flex-col gap-3 bg-white rounded-xl shadow-lg'>
                        <img src={felipe} alt="" className='rounded-lg' />

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-[#81b29a] ">
                                Dr. Felipe Rodrigues
                            </h3>
                            <span className='font-lg font-semibold text-[#3d405b] '>
                                Anestesiologista
                            </span>
                            <span className='text-sm font-semibold'>
                                CRM MG 47597
                            </span>
                        </div>

                        <ul className="pl-5 list-disc">
                            <li>
                                Formado em Medicina no Centro Universitário Serra dos Órgãos – Teresópolis/RJ ( 2013);
                            </li>

                            <li>
                                Residência Médica em Anestesiologia no Hospital das Clínicas Costantino Ottaviano – Teresópolis/RJ;
                            </li>

                            <li>
                                Vinculado ao Centro Universitário Serra dos Órgãos – Teresópolis/RJ (2017);
                            </li>

                            <li>
                                Pós graduação Lato Sensu em Anestesia - Hospital Israelita Albert Einstein (2017);
                            </li>

                            <li>
                                Pós-Graduação Lato Sensu em Dor - Hospital Israelita Albert Einstein ( 2020)
                            </li>
                        </ul>
                    </div>

                    {/* JULIANA */}
                    <div className='p-5 flex flex-col gap-3 bg-white rounded-xl shadow-lg'>
                        <img src={juliana} alt="" className='rounded-lg' />

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-[#81b29a] ">
                                Dra. Juliana Albano
                            </h3>
                            <span className='font-lg font-semibold text-[#3d405b] '>
                                Oftalmologista
                            </span>
                            <span className='text-sm font-semibold'>
                                CRM MG 47597
                            </span>
                        </div>

                        <ul className="pl-5 list-disc">
                            <li>
                                Graduação em Medicina - Universidade Federal de Minas Gerais;
                            </li>

                            <li>
                                Oftalmologia Unicamp;
                            </li>

                            <li>
                                Fellowship em Plástica Ocular, Órbita e Vias Lacrimais Universidade de São Paulo RP;
                            </li>

                            <li>
                                Fellowship em Estrabismo Universidade de São Paulo RP;
                            </li>

                            <li>
                                Doutorado Universidade de São Paulo RP.
                            </li>
                        </ul>
                    </div>

                    {/* JOAO PEDRO */}
                    <div className='p-5 flex flex-col gap-3 bg-white rounded-xl shadow-lg'>
                        <img src={joaoPedro} alt="" className='rounded-lg' />

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-[#81b29a] ">
                                Dr. João Pedro Dayrell
                            </h3>
                            <span className='font-lg font-semibold text-[#3d405b] '>
                                Oftalmologista
                            </span>
                            <span className='text-sm font-semibold'>
                                CRM MG 47597
                            </span>
                        </div>

                        <ul className="pl-5 list-disc">
                            <li>
                                Graduação em Medicina - Universidade Federal de Minas Gerais;
                            </li>

                            <li>
                                Residência Oftalmo - HC/ UFMG (Hosp. São Geraldo);
                            </li>

                            <li>
                                Fellowship em Córnea, Catarata e Cirurgia Refrativa - Banco de Olhos de Sorocaba (BOS)
                            </li>
                        </ul>
                    </div>

                    {/* LIVIA */}
                    <div className='p-5 flex flex-col gap-3 bg-white rounded-xl shadow-lg'>
                        <img src={livia} alt="" className='rounded-lg' />

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-[#81b29a] ">
                                Dra. Livia Lourenço
                            </h3>
                            <span className='font-lg font-semibold text-[#3d405b] '>
                                Oftalmologista
                            </span>
                            <span className='text-sm font-semibold'>
                                CRM MG 47597
                            </span>
                        </div>

                        <ul className="pl-5 list-disc">
                            <li>
                                Graduação em Medicina - Universidade Federal de Minas Gerais;
                            </li>

                            <li>
                                Oftalmologia no Hospital IPSEMG;
                            </li>

                            <li>
                                Fellowship em Retina clínica e cirúrgica Hospital Evangelico de BH.
                            </li>
                        </ul>
                    </div>

                    <div></div>

                    {/* RAQUEL */}
                    <div className='p-5 flex flex-col gap-3 bg-white rounded-xl shadow-lg'>
                        <img src={raquel} alt="" className='rounded-lg' />

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-[#81b29a] ">
                                Dra. Raquel Costa
                            </h3>
                            <span className='font-lg font-semibold text-[#3d405b] '>
                                Oftalmologista
                            </span>
                            <span className='text-sm font-semibold'>
                                CRM MG 47597
                            </span>
                        </div>

                        <ul className="pl-5 list-disc">
                            <li>
                                Graduação em Medicina: Universidade de Ribeirão Preto - UNAERP
                            </li>

                            <li>
                                Oftalmologia: Visão Instituto de Olhos - Brasília
                            </li>

                            <li>
                                Fellowship em Córnea clínica e Glaucoma - Visão Instituto de Olhos - Brasília;
                            </li>

                            <li>
                                Observership: Glaucoma - Kellogg Eye Center - University of Michigan.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}