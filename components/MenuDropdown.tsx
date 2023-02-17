import React from 'react'

function MenuDropdown() {
  return (
    <div className="antialiased ml-[30%] mt-[-8%] ">
    <div className="p-20">

      <div className="group inline-block relative">
        <button
          className="text-white font-semibold text-lg inline-flex items-center"
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

        <ul className="absolute hidden text-white pt-1 ml-[-8px] group-hover:block">
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

      <div className="group inline-block relative ml-8">
        <button
          className="text-white font-semibold text-lg inline-flex items-center"
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

        <ul className="absolute hidden text-white pt-1 ml-[30px] group-hover:block">
          <li className="">
            <a
              className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
              href="#"
              >Contratar Autonômos</a
            >
          </li>
          <li className="">
            <a
              className="py-1 text-center mr-20 block whitespace-no-wrap hover:text-[#757575]  "
              href="#"
              >Fretes e Cargas</a
            >
          </li>
        </ul>
      </div>

      <div className="group inline-block relative ml-8">
        <button
          className="text-white font-semibold text-lg inline-flex items-center"
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

        <ul className="absolute hidden text-white pt-1 ml-[-25px] w-[15em] group-hover:block">
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



      <div className="group inline-block relative ml-12">
        <button
          className="text-white font-semibold text-lg inline-flex items-center"
        >
          <span className="text-[16px] w-[100px] bg-[#DD1C1A] p-1 mt-0.5 hover:scale-110 rounded-lg hover:rounded-md  ">ENTRAR</span>
          
        </button>

      </div>

      <div className="group inline-block relative ml-11">
        <button
          className="text-white font-semibold text-lg inline-flex items-center"
        >
          <span className="text-lg rounded-lg hover:scale-110 ">CADASTRE-SE</span>
          
        </button>

      </div>


    </div>
    
    
  </div>
  )
}

export default MenuDropdown