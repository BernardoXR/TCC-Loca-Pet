import Logo from "../assets/logo.svg"
import Menu from "../assets/menu.svg"
import Dog from "../assets/dog.svg"
import Cat from "../assets/cat.svg"

export default function Home() {
  return (
    <div>
        <img src={Menu} alt="Menu em formato hamburguer" className="fixed w-7 ml-14 mt-5 z-10" />

        <header className="flex w-screen justify-center py-6 fixed bg-white">           
            <img src={Logo} alt="Logo locapet" className="w-24" />
        </header>

        <section className="flex pt-16 px-8 gap-4 pb-3 items-center">
            <p><span className="text-darkblue">A segurança do seu pet</span> <span className="text-orange">em primeiro lugar</span></p>
            
            <img src={Dog} alt="Imagem de um cachorro com fundo colorido" />
        </section>

        <section>
            <img src={Cat} alt="Imagem de um gato com fundo colorido" />

            <p>Nossa coleira possui um design anatômico e uma bateria durável. O dispositivo conta com <span>GPS</span>, sensor de <span>temperatura</span>  e sensor de <span>batimentos cardíacos</span>.</p>
        </section>

        <section>
            <img src={Logo} alt="Logo locapet"/>

            <p>Alguma dúvida? Entre em contato pelo 
            e-mail: locapet.support@gmail.com</p>
        </section>
    </div>
  )
}
