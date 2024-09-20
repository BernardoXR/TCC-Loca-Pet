import Logo from "../assets/logo.svg"
import Menu from "../assets/menu.svg"
import Dog from "../assets/dog.svg"
import Cat from "../assets/cat.svg"

export default function Home() {
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

        <header className="w-full lg:hidden"> 
            <button onClick={usarMenu}><img src={Menu} alt="Menu em formato hamburguer" className="fixed w-7 ml-14 mt-2 z-10" /></button>
        </header>

        <header className="flex w-screen justify-center py-8 fixed bg-white lg:pb-14">           
            <img src={Logo} alt="Logo locapet" className="w-24 lg:fixed lg:start-0 lg:ms-20 lg:mt-1" />

            <div className="flex bg-white text-darkblue font-extrabold text-xl gap-8 max-lg:hidden fixed end-0 me-20">
                <a href="/"><p>HOME</p></a>
                <a href="/Guia"><p>GUIA DE USO</p></a>
                <a href="/Materiais"><p>MATERIAIS</p></a>
                <a href="/Integrantes"><p>INTEGRANTES</p></a>
                <a href="/Ref"><p>BIBLIOGRAFIA</p></a>
            </div>
        </header>

        <section className="flex pt-14 px-8 gap-4 pb-3 items-center lg:pt-24 lg:gap-24 max-sm:flex-col">
            <h2 className="text-lg uppercase font-bold text-left lg:text-5xl lg:max-w-xs max-sm:order-2 max-sm:px-9 max-sm:text-xl max-sm:pb-4 max-sm:text-center"><span className="text-darkblue">A segurança do seu pet</span> <span className="text-orange">em primeiro lugar</span></h2>
            
            <img src={Dog} alt="Imagem de um cachorro com fundo colorido" className="lg:w-96 max-sm:order-1 max-sm:w-72 " />
        </section>

        <section className="bg-darkblue flex px-4 py-10 gap-4 text-white items-center lg:w-full lg:justify-center lg:gap-12 max-sm:flex-col">
            <img src={Cat} alt="Imagem de um gato com fundo colorido" className="lg:w-96 max-sm:w-72" />

            <p className="text-xs text-center lg:text-2xl lg:max-w-lg max-sm:text-base max-sm:px-6">Nossa coleira possui um design anatômico e uma bateria durável. O dispositivo conta com <span className="text-orange">GPS</span>, sensor de <span className="text-orange">temperatura</span>  e sensor de <span className="text-orange">batimentos cardíacos</span>.</p>
        </section>

        <section className="flex px-6 text-xs py-8 w-full justify-between text-end">
            <img src={Logo} alt="Logo locapet"/>

            <p className="max-w-52 text-darkblue">Alguma dúvida? Entre em contato pelo 
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