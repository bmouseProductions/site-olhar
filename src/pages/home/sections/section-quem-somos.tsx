
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

export default function SectionQuemSomos() {
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Missão',
          children: 'Missão Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.',
        },
        {
          key: '2',
          label: 'Valores',
          children: 'Valores Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.',
        },
        {
          key: '3',
          label: 'Visão',
          children: 'Visão Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero saepe incidunt facere praesentium qui ipsa repudiandae.',
        },
    ];

    return (
        <section className="rounded-3xl bg-gradient-to-b from-[#81B29A] to-[#00514B] ">
            <div className="container mx-auto py-10 px-5 md:px-10 lg:px-14 xl:px-16">
                <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white text-center">
                    Afinal, quem <span className="text-[#3d405b] ">somos?</span> 
                </h2>

                <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-7'>
                    <Tabs 
                        defaultActiveKey="1" 
                        items={items} 
                        className='text-white items-center text-base'
                    />

                    <iframe
                        className="mx-auto w-full h-[220px] lg:h-[250px] xl:h-[350px] 2xl:h-[400px] rounded-3xl"
                        src="https://www.youtube.com/embed/XB0J3mVluWA?si=JCwsAXOa7HcIC3Zx"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                </div>
            </div>
        </section>
    )
}