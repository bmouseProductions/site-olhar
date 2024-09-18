

export default function SectionVideo() {
    return (
        <section className="container mx-auto py-10 px-5 md:px-10 lg:px-14 xl:px-16">
            <h1 className="mt-5 mb:7 md:mb-12 text-6xl xl:text-7xl 2xl:text-8xl uppercase text-[#3d405b] text-center">
                Nossos serviços
            </h1>

            <iframe
                className="mx-auto w-full lg:w-[80%] 2xl:max-w-[950px] h-[200px] md:h-[350px] lg:h-[400px] xl:h-[550px] rounded-3xl"
                src="https://www.youtube.com/embed/XB0J3mVluWA?si=JCwsAXOa7HcIC3Zx"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </section>
    )
}