import logo from '../assets/images/logo-branca.svg'

export default function Footer() {
    return (
        <footer className="bg-[#81b29a] ">
            <div className="container mx-auto py-10 px-5  xl:px-16 space-y-10 text-white">
                <div className='grid grid-cols-1 md:grid-cols-3 md:items-center gap-5'>

                    <div className="flex justify-center md:justify-start gap-5">
                        <a 
                            href="https://www.facebook.com/olharcentrooftalmologico/"
                            target="_blank"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5">
                                <path className='fill-[#00514b] hover:fill-white' d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
                            </svg>
                        </a>

                        <a 
                            href="https://www.instagram.com/olharcentrooftalmologico/"
                            target="_blank"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5">
                                <path className='fill-[#00514b] hover:fill-white' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                        </a>

                        <a 
                            href="https://www.youtube.com/@OLHARCentroOftalmologico"
                            target="_blank"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.001 461.001" className="w-6">
                                <g>
                                    <path className='fill-[#00514b] hover:fill-white' d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                                </g>
                            </svg>
                        </a>
                    </div>

                    <img 
                        src={logo}
                        alt="Logo da empresa Olhar Oftalmológico" 
                        className='w-full max-w-[300px] xl:max-w-[350px] mx-auto '
                    />

                    <span className='hidden md:block md:ml-auto text-2xl text-[#00514b] '>
                        Olhar Oftalmológico
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:gap-0 md:grid-cols-3">
                    <div className='flex flex-col items-center lg:text-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 xl:size-8">
                            <path className='text-[#00514b]' strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>

                        <span className="text-xl md:text-2xl font-semibold mb-3">
                            Contatos
                        </span>

                        <a 
                            href="tel:+553438215014"
                            target="_blank"
                        >
                            <strong>Fone:</strong> (34) 3821-5014
                        </a>

                        <a 
                            href="https://wa.me/5534999120030?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20marcar%20uma%20consulta%20por%20gentileza."
                            target="_blank"
                        >
                            <strong>Whatsapp</strong> (34) 99912-0030
                        </a>
                    </div>

                    <div className='flex flex-col items-center lg:text-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 xl:size-8">
                            <path className='text-[#00514b]' strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>


                        <span className="text-xl md:text-2xl font-semibold mb-3">
                            Contatos
                        </span>

                        <a 
                            href="mailto:agendamento@centroolhar.com.br"
                            target="_blank"
                        >
                            agendamento@centroolhar.com.br
                        </a>
                    </div>

                    <div className='flex flex-col items-center lg:text-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 xl:size-8">
                            <path className='text-[#00514b]' strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path className='text-[#00514b]' strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>


                        <span className="text-xl md:text-2xl font-semibold mb-3">
                            Clínica
                        </span>

                        <a 
                            href="https://maps.app.goo.gl/uTQgSawF8sWfmNY88"
                            target="_blank"
                            className='text-center'
                        >
                            Olhar Centro Oftalmológico, R. Rui Barbosa, 568 <br className='hidden lg:block' /> Lagoa Grande, Patos de Minas - MG, 38700-196
                        </a>
                    </div>
                </div>

                <div className='mt-10 pt-5 flex flex-col gap-5 md:flex-row md:justify-around border-t'>
                    <span className='text-center'>Copyright © 2024. Olhar</span>

                    <a 
                        href="https://bmouseproductions.com/"
                        target="_blank"
                        className='text-center'
                    >
                        Desenvolvido por: <strong>Bmouse Productions</strong>
                    </a>
                </div>
            </div>
        </footer>
    )
}