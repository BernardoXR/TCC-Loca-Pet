import Logo from "../assets/logo.svg"
import Menu from "../assets/menu.svg"
import Arduino from "../assets/arduino.svg"
import Proto from "../assets/proto.svg"
import Bateria from "../assets/bateria.svg"
import Modulow from "../assets/modulow.svg"
import Bateriar from "../assets/bateriar.svg"
import Gps from "../assets/gps.svg"
import Card from "../assets/card.svg"
import Fio from "../assets/fio.svg"



export default function Materiais() {

  return (
    <div className="flex flex-col items-center w-full h-full">
        <div id="mostrarFechar" className="fixed flex z-20 justify-center items-center w-full h-full bg-white/[.60] hidden">
            <div className="bg-white text-darkblue font-semibold flex flex-col items-start px-10 p-6 gap-2 rounded-md text-lg">
                <button onClick={fecharMenu}>x</button>
                <a href="/"><p>HOME</p></a>
                <a href="/Guia"><p>GUIA DE USO</p></a>
                <a href="/Materiais"><p>MATERIAIS</p></a>
                <a href="/Integrantes"><p>INTEGRANTES</p></a>
                <a href="/Ref"><p>BIBLIOGRAFIA</p></a>
            </div>
        </div>

        <header className="w-full z-20 font-['lato']"> 
            <button onClick={usarMenu}><img src={Menu} alt="Menu em formato hamburguer" className="fixed w-7 ml-14 mt-2 z-10" /></button>
        </header>

        <header className="flex w-screen justify-center py-8 fixed bg-white ">           
            <img src={Logo} alt="Logo locapet" className="w-24" />
        </header>

        <section className="pt-20 flex flex-wrap justify-center gap-6 pb-2">
              <div className="bg-darkblue w-72 p-8 text-white flex flex-col items-center gap-8 rounded-md">
                <img src={Arduino} alt="Arduino Uno R3" />

                <h2 className="text-2xl">Arduino Uno R3</h2>

                <a href=""><button className="bg-white text-darkblue px-12 py-2 rounded-md">Comprar</button></a>
            </div>

            <div className="bg-darkblue w-72 p-8 text-white flex flex-col items-center gap-8 rounded-md">
                <img src={Proto} alt="Protoboard arduino" />

                <h2 className="text-2xl">Protoboard</h2>

                <a href=""><button className="bg-white text-darkblue px-12 py-2 rounded-md">Comprar</button></a>
            </div>

            <div className="bg-darkblue w-72 p-8 text-white flex flex-col items-center gap-8 rounded-md">
                <img src={Bateria} alt="Bateria" />

                <h2 className="text-2xl text-center">Bateria 3,7v 5000mah Li-ion</h2>

                <a href=""><button className="bg-white text-darkblue px-12 py-2 rounded-md">Comprar</button></a>
            </div>

            <div className="bg-darkblue w-72 p-8 text-white flex flex-col items-center gap-8 rounded-md">
                <img src={Modulow} alt="Módulo Wifi" />

                <h2 className="text-2xl text-center">Módulo RF Wireless LoRa 433MHz - Longo Alcance</h2>

                <a href=""><button className="bg-white text-darkblue px-12 py-2 rounded-md">Comprar</button></a>
            </div>

            <div className="bg-darkblue w-72 p-8 text-white flex flex-col items-center gap-8 rounded-md">
                <img src={Bateriar} alt="Bateria Recarregavel" />

                <h2 className="text-2xl">Conect.mn51021-3p</h2>

                <a href=""><button className="bg-white text-darkblue px-12 py-2 rounded-md">Comprar</button></a>
            </div>

            <div className="bg-darkblue w-72 p-8 text-white flex flex-col items-center gap-8 rounded-md">
                <img src={Gps} alt="Módulo GPS" className="bg-white h-52" />

                <h2 className="text-2xl">GPS GY-NEO6MV2</h2>

                <a href=""><button className="bg-white text-darkblue px-12 py-2 rounded-md">Comprar</button></a>
            </div>

            <div className="bg-darkblue w-72 p-8 text-white flex flex-col items-center gap-8 rounded-md">
                <img src={Card} alt="Cardíaca Oxímetro" />

                <h2 className="text-2xl">Cardíaca Oxímetro</h2>

                <a href=""><button className="bg-white text-darkblue px-12 py-2 rounded-md">Comprar</button></a>
            </div>

            <div className="bg-darkblue w-72 p-8 text-white flex flex-col items-center gap-8 rounded-md">
                <img src={Fio} alt="Fios do arduino" />

                <h2 className="text-2xl">Jumpers</h2>

                <a href=""><button className="bg-white text-darkblue px-12 py-2 rounded-md">Comprar</button></a>
            </div>
        </section>

        <section className="flex px-6 text-xs py-8 w-full justify-between text-end">
            <img src={Logo} alt="Logo locapet"/>

            <p className="max-w-52">Alguma dúvida? Entre em contato pelo 
            e-mail: locapet.support@gmail.com</p>
        </section>
    </div>
  )
}

function usarMenu() {
    document.getElementById('mostrarFechar').classList.remove("hidden")
}

function fecharMenu() {
    document.getElementById('mostrarFechar').classList.add("hidden")
}
