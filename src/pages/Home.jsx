import Logo from "../assets/logo.svg"
import Menu from "../assets/menu.svg"
import Dog from "../assets/dog.svg"
import Cat from "../assets/cat.svg"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full">
        <div id="mostrarFechar" className="fixed flex z-20 justify-center items-center w-full h-full bg-white/[.60] hidden">
            <div className="bg-white text-darkblue font-semibold flex flex-col items-start px-10 p-6 gap-2 rounded-md text-lg">
                <button onClick={fecharMenu}>x</button>
                <a href=""><p>HOME</p></a>
                <a href=""><p>GUIA DE USO</p></a>
                <a href=""><p>MATERIAIS</p></a>
                <a href=""><p>INTEGRANTES</p></a>
                <a href=""><p>BIBLIOGRAFIA</p></a>
            </div>
        </div>

        <header className="w-full"> 
            <button onClick={usarMenu}><img src={Menu} alt="Menu em formato hamburguer" className="fixed w-7 ml-14 mt-2 z-10" /></button>
        </header>

        <header className="flex w-screen justify-center py-8 fixed bg-white">           
            <img src={Logo} alt="Logo locapet" className="w-24" />
        </header>

        <section className="flex pt-14 px-8 gap-4 pb-3 items-center">
            <h2 className="text-lg uppercase font-bold text-center"><span className="text-darkblue">A segurança do seu pet</span> <span className="text-orange">em primeiro lugar</span></h2>
            
            <img src={Dog} alt="Imagem de um cachorro com fundo colorido" />
        </section>

        <section className="bg-darkblue flex px-4 py-10 gap-4 text-white items-center">
            <img src={Cat} alt="Imagem de um gato com fundo colorido" />

            <p className="text-xs text-center">Nossa coleira possui um design anatômico e uma bateria durável. O dispositivo conta com <span className="text-orange">GPS</span>, sensor de <span className="text-orange">temperatura</span>  e sensor de <span className="text-orange">batimentos cardíacos</span>.</p>
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