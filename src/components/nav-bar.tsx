import React, {useState} from "react";
import {
  Navbar,
  Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

import logo from '../assets/images/logo.svg'

 
export default function Header() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  function NavList() {

    function closeMenuIfOpen() {
      if (openNav) {
        setOpenNav(false)
      }
    }

    return (
      <nav className=" flex flex-col md:flex-row md:items-center gap-5">
        <NavLink 
          to="/" 
          onClick={closeMenuIfOpen}
          className={
            ({isActive}) => `${isActive ? "text-black" : "text-gray-500"} 
            text-xl md:text-xl font-montserrat cursor-pointer hover:underline decoration-[#81b29a] underline-offset-8 transition-all`
          }
        >
          Home
        </NavLink>
  
        <NavLink 
          to="/exames-cirugias" 
          onClick={closeMenuIfOpen}
          className={
            ({isActive}) => `${isActive ? "text-black" : "text-gray-500"} 
            text-xl md:text-xl font-montserrat cursor-pointer hover:underline decoration-[#81b29a] underline-offset-8 transition-all`
          }
        >
          Exames e Cirurgias
        </NavLink>
  
        <NavLink 
          to="/convenios" 
          onClick={closeMenuIfOpen}
          className={
            ({isActive}) => `${isActive ? "text-black" : "text-gray-500"} 
            text-xl md:text-xl font-montserrat cursor-pointer hover:underline decoration-[#81b29a] underline-offset-8 transition-all`
          }
        >
          Convênios
        </NavLink>
        
        <a 
          href="https://wa.me/5534999120030?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20marcar%20uma%20consulta%20por%20gentileza." 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-fit px-5 pt-1 pb-1.5 rounded-2xl text-lg md:text-xl uppercase transition-all border-2 border-[#81b29a] text-white bg-[#81b29a]  hover:bg-transparent hover:text-[#81b29a]"
        >
          Contato
        </a>
      </nav>
    );
  }
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar 
      className="relative z-50 mx-auto max-w-[900px] px-5 py-5 text-black bg-transparent rounded-none border-none" 
      placeholder={null} 
      onPointerEnterCapture={null} 
      onPointerLeaveCapture={null}
    >
      <div className="flex items-center justify-between text-blue-gray-900">

        <NavLink to="/" className=" cursor-pointer">
          <img src={logo} alt="logo" className="w-[200px] md:w-[150px] lg:w-[200px] " />
        </NavLink>

        <div className="hidden md:block">
          <NavList />
        </div>
        
        <button
          className="md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          { openNav ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          }
        </button>

        
      </div>
      
      <Collapse open={openNav} className="overflow-hidden">
        <div className="pt-7">
            <NavList />
        </div>
      </Collapse>

      
    </Navbar>
  );
}