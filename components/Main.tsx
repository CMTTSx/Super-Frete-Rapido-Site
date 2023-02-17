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


function Main() {
    return (
        <div className='h-[60em] '>

            <h1 className='pl-[3em] pt-20 pb-20 text-[2.4em] font-bold '>Como Funciona:</h1>

            <div className="grid grid-cols-4 gap-4 mt-[15em] pb-20 ">

                <div className='ml-auto mr-auto'>
                    <Image src={macIcon} alt='macIcon' className='ml-auto mr-auto' />
                    <h4 className='pl-10 pr-5 text-justify'>Comece cadastrando sua carga,
                        que iremos intermediar e encontrar para você os melhores modais
                        e ofertas para que você escolha a melhor forma de envio.</h4>
                </div>

                <div className='ml-auto mr-auto '>
                    <Image src={transportIcon} alt='macIcon' className='ml-auto mr-auto mt-[-1.6em] ' />
                    <h4 className='pl-0 pr-5 text-justify'>Assim que escolher a empresa e o modal que melhor atender,
                        terá uma plataforma  para negócio que poderá  tirar todas suas dúvidas,
                        facilitando e assegurando ambas as partes.</h4>
                </div>

                <div className='ml-auto mr-auto '>
                    <Image src={DashboardIcon} alt='macIcon' className='ml-auto mr-auto ' />
                    <h4 className='pl-0 pr-5 mt-6 text-justify'>Tenha também acesso ao Dashboard, onde terá todas as informações da operação desde o ínicio até a entrega.</h4>
                </div>

                <div className='ml-auto mr-auto '>
                    <Image src={localIcon} alt='macIcon' className='ml-auto mr-auto ' />
                    <h4 className='pl-2 pr-10 mt-6 text-justify'>Total suporte  a você e sua carga, trazendo segurança, disponibilidade em todo trajeto, e localização a qualquer momento.</h4>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10 mt-[20em] bg-[#FFF500] ">
                
                <div className='flex ml-[5em] '>
                    <Image src={companyIcon} alt={''}  />
                    <div className=' mt-8 font-bold text-xl '>
                    <h3>+1485</h3>
                    <h3>Empresas Ativas</h3>
                    </div>
                </div>
                <div className='flex ml-[5em]'>
                    <Image src={boxIcon} alt={''}  />
                    <div className=' mt-8 font-bold text-xl ml-10    '>
                    <h3>+5000</h3>
                    <h3>Fretes</h3>
                    </div>
                </div>
                <div className='flex ml-20 '>
                    <Image src={driverIcon} alt={''}  />
                    <div className=' mt-8 font-bold text-xl '>
                    <h3>+3000</h3>
                    <h3>Caminhoneiros</h3>
                    </div>
                </div>
            </div>

            <div className='mb-20'>
                <h1 className='text-[2em] text-center font-bold mt-[10em] pb-[10em] '>Oferecemos Fretes Multimodais com o melhor Custo-Benefício</h1>

                <div className=' mt-[-10em] '>
                    <Tabs />
                </div>
            
            </div>

        </div>
    )
}

export default Main