import { useState } from 'react'
import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
    base: 'px-5 pt-1 pb-1.5 rounded-2xl text-lg md:text-xl uppercase transition-all border-2 text-white',
    
    variants: {
      variant: {
        primary: 'bg-[#81b29a] border-[#81b29a] hover:bg-white hover:text-[#81b29a]',
        secondary: 'bg-[#3d405b] hover:bg-[#ffff00] hover:border-[#3d405b] hover:text-black',
      },
      
      size: {
        default: 'w-fit',
        full: 'w-full'
      }
    },
  
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  })
  
  interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode,
  }

export default function ButtonContato({ children, variant, size, ...rest }: ButtonProps) {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const toggleModal = () => {
        setIsOpenModal(prev => !prev);
    };
     
    return (
        <>
            <button 
                {...rest} 
                className={buttonVariants({ variant,size })} 
                onClick={toggleModal}
            >
                {children}
            </button>

            {isOpenModal && (
                <div className="fixed z-[100000] inset-0 px-5 bg-black/60 flex items-center justify-center">
                    <div className="w-full max-w-[640px] py-5 px-6 text-white bg-zinc-900 rounded-xl shadow-shape  space-y-5">
                        <div className="flex flex-col-reverse md:flex-row items-end md:items-center md:justify-between gap-5">
                            <h2 className="font-lg font-semibold">Preencha o formulário para entrar em contato</h2>
                            
                            <button onClick={() => {setIsOpenModal(false)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        
                        <form action="">
                            
                        </form>
                    </div>
                </div>
            )}
            
        </>
    )
}
