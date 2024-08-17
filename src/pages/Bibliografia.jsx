import Logo from "../assets/logo.svg"
import Menu from "../assets/menu.svg"
import Img from "../assets/imgcom.svg"

export default function Bibliografia() {
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

        <img src={Img} alt="foto de um componente de hardware" className="w-full pt-16" />

        <h3 className="text-base px-4 py-3 text-center">Nosso projeto foi desenvolvido com base em pesquisas e artigos científicos para garantir sua viabilidade.</h3>

        <div className="text-sm mx-4 mb-3 bg-darkblue text-white font-light text-center p-2">
            <p>JESUS , Gabrielly Maia Tavares De . MAUS-TRATOS E ABANDONO DE ANIMAIS DOMÉSTICOS E SEUS DESAFIOS NO BRASIL. 1. ed. GOIÂNIA-GO: BANCA EXAMINADORA, 2021. 25-30 p. v. 1.</p>
        </div>

        <div className="text-sm mx-4 bg-orange text-white font-light text-center p-2">
            <p>DE AZEVEDO, Samuel Viana . A PROBLEMÁTICA DO ABANDONO DE ANIMAIS DOMÉSTICOS FRENTE À PANDEMIA DO CORONAVÍRUS NO BRASIL. 1. ed. GOIÂNIA: BANCA EXAMINADORA, 2020. 23-26 p. v. 1.</p>
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