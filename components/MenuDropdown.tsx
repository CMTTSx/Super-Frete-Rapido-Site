import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import Logo from '../public/img/CaminhaoEntrega.png'

function MenuDropdown() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
    <Link href='/'><Image src={Logo} alt="Logo" className=' lg:ml-[0em] xl:ml-[10em] cursor-pointer' /></Link>

<nav className=" sm:mt-20 relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 lg:mt-[3.3rem] ">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block sm:justify-end mt-[-13.5em]  ">
      <button
        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
      <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
    <div
      className={
        "lg:flex flex-grow items-center" +
        (navbarOpen ? " flex" : " hidden")
      }
      id="example-navbar-danger"
    >

       {/*FRETE-ITEMS*/}
       <div className=" sm:ml-[0.1em] sm2:ml-[2em] sm3:ml-[3em] md:ml-[3em] sm:mt-[-5em] group inline-block relative lg:ml-[19.5em] lg:mt-[-15.4em] ">
        <button
              className=" sm:text-sm text-white font-semibold lg:text-lg inline-flex items-center"
              >
          <span className="mr-1">FRETES</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        
        <ul className="absolute hidden text-white group-hover:block">
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Pequenas Cargas</a
                >
              </li>
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Cargas Grandes</a
                >
              </li>
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Containers</a
                >
              </li>
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Cargas Frigoríficas</a
                >
              </li>
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Cargas Vivas</a
                >
              </li>
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Cargas Perigosa</a
                >
              </li>
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Cargas Indivisíveis</a
                >
              </li>
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Cargas Frágeis</a
                >
              </li>
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Cargas Minério e cimento</a
                >
              </li>
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Cargas de veículos automotivos</a
                >
              </li>
            </ul>
       </div>
      
       {/*PARA-EMPRESAS-ITEMS*/}
       <div className=" sm:ml-[5em] md:ml-[2em] sm:mt-[-5em] group inline-block relative lg:ml-[1em] lg:mt-[-15.4em] ">
        <button
              className=" sm:text-sm text-white font-semibold lg:text-lg inline-flex items-center"
              >
          <span className="mr-1">PARA EMPRESAS</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        
        <ul className="absolute hidden text-white group-hover:block">
        <li className="">
                <a
                  className="py-1 text-center  block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Contratar Autonômos</a
                >
              </li>
              <li className="">
                <a
                  className="py-1 text-center  block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Fretes e Cargas</a
                >
              </li>
            </ul>
          </div>

       {/*PARCEIRO-ITEMS*/}
       <div className=" sm:ml-[-12em] md:ml-[2em] sm:mt-[10em] md:mt-[-5em]  group inline-block relative lg:ml-[1em] lg:mt-[-15.4em] ">
            <button
              className=" sm:text-sm text-white font-semibold lg:text-lg inline-flex items-center"
            >
              <span className="mr-1">PARCEIROS</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </button>

            <ul className="sm:ml-[-2em] absolute hidden text-white pt-1 lg:ml-[-25px] w-[15em] group-hover:block">
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Conheça nossos parceiros</a
                >
              </li>
              <li className="">
                <a
                  className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
                  href="#"
                >Saiba como se tornar um!</a
                >
              </li>
            </ul>
       </div>

       {/*ENTRAR*/}
       <div className=" sm:ml-[-1.8em] md:ml-[10em] sm:mt-[-15em] md:mt-[-5em] group inline-block relative lg:ml-[2.2em]  lg:mt-[-15em] ">
            <button
              className="text-white font-semibold text-lg inline-flex items-center"
            >
              <span className="text-[16px] w-[100px] bg-[#DD1C1A] p-1 mt-0.5 hover:scale-110 rounded-lg hover:rounded-md  ">ENTRAR</span>

            </button>
        </div>

       {/*CADASTRE-SE*/}
          <div className=" sm:ml-[-15em] sm:mt-[-15em] md:mt-[-4.8em] group inline-block relative lg:ml-8 lg:mt-[-14.5em] ">
            <button
              className="text-white font-semibold text-lg inline-flex items-center"
            >
              <span className=" sm:text-sm lg:text-lg rounded-lg hover:scale-110 ">CADASTRE-SE</span>

            </button>

          </div>
    </div>
  </div>
</nav>
</>
    
  )
}

export default MenuDropdown
