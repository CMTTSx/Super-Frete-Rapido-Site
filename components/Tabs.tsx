import React from "react";
import Image from "next/image";
//Import Icons
import modalAereoIcon from '../public/img/modalAereo.png';
import modalHidroviarioIcon from '../public/img/modalHidroviario.png';
import modalRodoviarioIcon from '../public/img/modalRodoviario.png';
import modalFerroviarioIcon from '../public/img/modalFerroviario.png'

const Tabs = ({ color }: any) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-dark bg-[#6CD4FF] " + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <Image src={modalAereoIcon} alt="" className="ml-auto mr-auto " />
                <h3 className="mt-[0.1em] ">Modal Aéreo</h3>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl font-bold px-5  py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-dark bg-[#6CD4FF] " + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <Image src={modalHidroviarioIcon} alt="" className="ml-auto mr-auto mt-[em] " />
                 <h3 className="mt-[5.5em] ">Modal Hidroviário</h3>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-dark bg-[#6CD4FF] " + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <Image src={modalRodoviarioIcon} alt="" className="ml-auto mr-auto mt-9 mb-2 pb-7 " />
                <h3 className="mt-[0em] ">Modal Rodoviário</h3>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-dark bg-[#6CD4FF] " + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <Image src={modalFerroviarioIcon} alt="" className="ml-auto mr-auto  mt-2 pb-[2.7em] " />
                <h3 className="mt-[0em] ">Modal Ferroviário</h3>
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 pt-[9em] text-justify italic text-[1.5em] pl-20 pr-20 ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>O transporte aéreo é um modal ágil e recomendado para mercadorias de alto valor agregado, pequenos volumes e encomendas urgentes. É competitivo para produtos eletrônicos, por exemplo, computadores, softwares, telefones celulares, etc… e que precisam de um transporte rápido em função do seu valor, bem como de sua sensibilidade a desvalorizações tecnológicas.</p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>As hidrovias são vias de transporte aquático que se dão sobre trechos navegáveis de rios, lagos e mares, podendo ser naturais ou artificiais. O modal de transporte aquaviário apresenta vantagens como os baixos impactos ambientais, menores custos de deslocamento e grande capacidade de transporte de caga. Uma de suas principais desvantagens é a lentidão nos translados. Esse meio de transporte é usado no Brasil principalmente por meio do sistema intermodal, e no mundo ele possui grande importância no comércio internacional.</p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>O modal rodoviário é um tipo de transporte de carga para longas distâncias, feito por meios terrestres, como ruas, rodovias e estradas. Nesse modelo de transporte são utilizados carros, ônibus e, principalmente, caminhões.</p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <p>O modal ferroviário – feito pelas estradas de ferro, com o auxílio de locomotivas e vagões – é muito utilizado para transportar cargas volumosas por grandes distâncias até um destino fixo. Os trens geralmente são compostos por 100 vagões, sendo que cada um deles tem capacidade para cerca de 70 toneladas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
       <Tabs/>
    </>
  );
}
