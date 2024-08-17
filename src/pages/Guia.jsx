import Logo from "../assets/logo.svg"
import Menu from "../assets/menu.svg"
import Tutorial from "../assets/tutorial.svg"
import TutorialDog from "../assets/tutorialDog.svg"

export default function Guia() {
  return (
    <div className="flex flex-col items-center w-full h-full font-['lato']">
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

        <header className="w-full"> 
            <button onClick={usarMenu}><img src={Menu} alt="Menu em formato hamburguer" className="fixed w-7 ml-14 mt-2 z-10" /></button>
        </header>

        <header className="flex w-screen justify-center py-8 fixed bg-white">           
            <img src={Logo} alt="Logo locapet" className="w-24" />
        </header>

        <div className="bg-orange w-full py-4 pt-20 flex justify-center items-center">
            <img src={Tutorial} alt="Imagem de um cachorro e uma lupa" />
        </div>

        <div className="flex px-8 pt-8">
            <div className="flex flex-col gap-4 text-xs max-w-44">
                <p>Tendo tanto a coleira quanto o programa de computador/celular, você poderá começar a usar o dispositivo.</p>

                <p>Utilizando a tecnologia LoRa, a interface do aplicativo mostrará a localização do seu pet, juntamente com os batimentos cardíacos e a temperatura.</p>
            </div>

            <div>
                <img src={TutorialDog} alt="Cachorro em exemplificação do produto" />
            </div>
        </div>

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