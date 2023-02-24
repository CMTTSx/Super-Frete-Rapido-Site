import React from 'react'

function Contact() {
    return (
        <div className='bg-contact bg-cover w-[100%] sm:mt-[20em] mt-[180em] '>

            <h3 className=' sm:text-[3em] pt-[2em] text-center text-[5em] italic text-white font-bold '>CONTATO</h3>

            {/*Contact Form*/}
            <div className=' sm:w-full border-2 bg-opacity-30 bg-white rounded-md lg:w-[50%] h-[50em] ml-auto mr-auto '>

                <label className="form-label inline-block mb-2 mt-5 ml-[7em] text-white font-medium"
                >E-mail:
                </label>
                <input
                    type="text"
                    className="
    form-control
    block
    w-[80%]
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition  
    ease-in-out
    ml-auto
    mr-auto
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    "

                    placeholder="Digite seu E-mail"
                />

                <label className="form-label inline-block mb-2 mt-5 ml-[7em] text-white font-medium"
                >Nome Completo:
                </label>
                <input
                    type="text"
                    className="
    form-control
    block
    w-[80%]
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition  
    ease-in-out
    ml-auto
    mr-auto
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    "

                    placeholder="Digite seu Nome Completo"
                />

                <label className="form-label inline-block mb-2 mt-5 ml-[7em] text-white font-medium"
                >Telefone:
                </label>
                <input
                    type="text"
                    className="
    form-control
    block
    w-[80%]
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition  
    ease-in-out
    ml-auto
    mr-auto
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    "

                    placeholder="Digite seu telefone de contato"
                />

                <label className=" sm:ml-[4.2em] form-label inline-block mb-2 mt-5 lg:ml-[7.2em] text-white font-medium"
                >Nome ou site da empresa:
                </label>
                <input
                    type="text"
                    className="
    form-control
    block
    w-[80%]
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition  
    ease-in-out
    ml-auto
    mr-auto
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    "

                    placeholder="Digite o nome ou site da empresa "
                />

                <label className=" sm:ml-20 form-label inline-block mb-2 mt-5 lg:ml-[7em] text-white font-medium">
                    Digite sua mensagem
                </label>
                <textarea
                    className="
        form-control
        block
        w-[80%]
        h-[13em]
        px-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        ml-auto
        mr-auto
        resize-none
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-blue
    "
                >
                </textarea>

                <button className=' w-full my-20 rounded-md text-lg text-white font-bold px-20 bg-[#00D02E] hover:bg-[#5AFF15] ' >Enviar</button>

            </div>


            {/*About*/}
            <div className=' sm:w-[100%] sm:mt-[10em] sm:ml-3  lg:mt-[15em] lg:w-[50%] lg:ml-auto mr-auto text-white text-xl font-bold'>

                <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-20 cursor-pointer">

                    <div className="grid grid-column-4 gap-4">

                        <div className='mb-5 hover:text-[#88D9E6]'>Acessar</div>
                        <div className=' hover:text-[#88D9E6] '>Cadastre-se</div>
                        <div className=' hover:text-[#88D9E6] '>Meus fretes</div>
                        <div className=' hover:text-[#88D9E6] '>Cadastrar fretes</div>
                        <div className=' hover:text-[#88D9E6] '>Pagamentos</div>
                    </div>

                    <div className="grid grid-column-4 gap-4">
                        <div className='mb-5 hover:text-[#88D9E6]'>Serviços</div>
                        <div className='hover:text-[#88D9E6] '>Empresas</div>
                        <div className='hover:text-[#88D9E6] '>Fretes</div>
                        <div className='hover:text-[#88D9E6] '>Veículos</div>
                        <div className='hover:text-[#88D9E6] '>Big Data</div>
                    </div>

                    <div className="grid grid-column-4 gap-4">
                        <div className='mb-5 hover:text-[#88D9E6] '>Sobre a Super Frete</div>
                        <div className='hover:text-[#88D9E6] '>Quem somos</div>
                        <div className='hover:text-[#88D9E6] '>Como funciona</div>
                        <div className='hover:text-[#88D9E6] '>Contato</div>
                        <div className='hover:text-[#88D9E6] '>Conheça nossas vagas</div>

                    </div>

                </div>
            </div>

            {/*Info*/}
            <h1 className=' sm:mt-[5em] mt-[15em] mb-5 text-center text-2xl text-white '>Horário de atendimento: Segunda a Sexta, 08:00hs às 18:00hs, exceto feriados.</h1>
            <h3 className=' text-center text-white font-[bold] ' > © CSM SOLUÇÕES TECNOLÓGICAS E DESENVOLVIMENTO. Todos Direitos Reservados. 2021. </h3>


        </div>
    )
}

export default Contact