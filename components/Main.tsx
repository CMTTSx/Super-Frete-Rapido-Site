import React from 'react'
import Image from 'next/image';


//import Components
import Tabs from '../components/Tabs';

//Import Icons
import macIcon from '../public/img/macIcons.png';
import transportIcon from '../public/img/transporteIcon.png';
import DashboardIcon from '../public/img/dashboardIcon.png';
import localIcon from '../public/img/localizacaoIcon.png';
import companyIcon from '../public/img/companyIcon.png';
import boxIcon from '../public/img/boxIcon.png';
import driverIcon from '../public/img/driverIcon.png';
import packageIcon from '../public/img/Package.png';
import warehouseIcon from '../public/img/warehouse 1.png';
import logisticaIcon from '../public/img/logisticaIcon.png';
import suporteIcon from '../public/img/supportIcon.png';
import freteIcon from '../public/img/frete.png';
import insuranceTruckIcon from '../public/img/insurance-truck.png';

function Main() {
    return (
        <div className=' w-full '>

            <h1 className=' sm:ml-[-2em] sm:text-[2em] pl-[3em] pt-20 pb-20 text-[2.4em] font-bold '>Como Funciona:</h1>

            <div className=" grid grid-column-4 lg:grid-flow-col gap-4 ">
                
                <div className=' ml-auto mr-auto sm:pb-5'>
                    <Image src={macIcon} alt='macIcon' className='ml-auto mr-auto' />
                    <h4 className='pl-10 pr-5 text-justify'>Comece cadastrando sua carga,
                        que iremos intermediar e encontrar para você os melhores modais
                        e ofertas para que você escolha a melhor forma de envio.</h4>
                </div>

                <div className=' ml-auto mr-auto sm:pb-10'>
                    <Image src={transportIcon} alt='macIcon' className='ml-auto mr-auto mt-[-1.7em] ' />
                    <h4 className='pl-10 pr-5 text-justify'>Assim que escolher a empresa e o modal que melhor atender,
                        terá uma plataforma  para negócio que poderá  tirar todas suas dúvidas,
                        facilitando e assegurando ambas as partes.</h4>
                </div>

                <div className=' ml-auto mr-auto sm:pb-10'>
                    <Image src={DashboardIcon} alt='macIcon' className='ml-auto mr-auto mt-[1.4em] ' />
                    <h4 className='pl-10 pr-5 text-justify'>Tenha também acesso ao Dashboard, onde terá todas as informações da operação desde o ínicio até a entrega.</h4>
                </div>

                <div className=' ml-auto mr-auto sm:pb-10'>
                    <Image src={localIcon} alt='macIcon' className='ml-auto mr-auto mt-[1.3em] ' />
                    <h4 className='pl-10 pr-5 text-justify'>Total suporte  a você e sua carga, trazendo toda a segurança, disponibilidade em todo trajeto, e localização a qualquer momento.</h4>
                </div>
            </div>

            <div className=" sm:w-full sm:grid-cols-1 grid lg:grid-cols-3 gap-10 mt-[20em] bg-[#FFF500] ">

                <div className='flex ml-auto mr-auto'>
                    <Image src={companyIcon} alt={''} />
                    <div className='mt-5 font-bold text-xl '>
                        <h3>+1485</h3>
                        <h3>Empresas Ativas</h3>
                    </div>
                </div>
                <div className='flex ml-auto mr-auto'>
                    <Image src={boxIcon} alt={''} />
                    <div className='mt-5 ml-5 font-bold text-xl '>
                        <h3>+5000</h3>
                        <h3>Fretes</h3>
                    </div>
                </div>
                <div className='flex ml-auto mr-auto'>
                    <Image src={driverIcon} alt={''} />
                    <div className='mt-5 font-bold text-xl '>
                        <h3>+3000</h3>
                        <h3>Caminhoneiros</h3>
                    </div>
                </div>
            </div>

            <div className='pb-[30em] bg-[#F3F3F3] '>
                <h1 className=' sm:text-[1.3em] md:text-[2em] text-center font-bold mt-[10em] pt-20 pb-[10em] '>Oferecemos Fretes Multimodais com o melhor Custo-Benefício</h1>

                <div className=' mt-[-10em] '>
                    <Tabs />
                </div>

            </div>

            <div>
                <h1 className=' sm:text-[1.6em] text-center lg:text-[2.5em] font-bold  mt-[2em] '>Temos também serviços especiais para nossos clientes:</h1>

                <div className="grid lg:grid-cols-3 gap-3 mt-[10em] ">
                    
                    <div className='ml-auto mr-auto mt-20'>
                        <h3 className=' sm:pl-10 sm2:pl-10 sm3:pl-20 pl-18 font-semibold text-xl '>Serviço de Empacotamento e Armazenamento</h3>
                        <Image src={packageIcon} alt='packageIcon' className='ml-auto mr-auto mt-10' />
                    </div>

                    <div className='ml-auto mr-auto mt-20'>
                        <h3 className='font-semibold text-xl ml-10'>Centro Logístico</h3>
                        <Image src={warehouseIcon} alt='packageIcon' className='ml-auto mr-auto mt-10' />
                    </div>

                    <div className='ml-auto mr-auto mt-20'>
                    <h3 className=' sm:ml-10 font-semibold text-xl '>Transporte suas cargas pelo mundo</h3>
                        <Image src={logisticaIcon} alt='packageIcon' className='ml-auto mr-auto mt-10' />
                    </div>

                    <div className='ml-auto mr-auto mt-20'>
                        <h3 className='font-semibold text-xl ml-6 '>Assistência 24/7</h3>
                        <Image src={suporteIcon} alt='packageIcon' className='ml-auto mr-auto mt-10' />
                    </div>

                    <div className='ml-auto mr-auto mt-20'>
                        <h3 className='font-semibold text-xl '>Entrega de Porta em Porta</h3>
                        <Image src={freteIcon} alt='packageIcon' className='ml-auto mr-auto mt-10' />
                    </div>

                    <div className='ml-auto mr-auto mt-20'>
                        <h3 className=' sm:ml-10 font-semibold text-xl '>Segurança de Cargas </h3>
                        <Image src={insuranceTruckIcon} alt='packageIcon' className='ml-auto mr-auto mt-10' />
                    </div>
                
                
                </div>

               

             


            </div>

        </div>
    )
}

export default Main