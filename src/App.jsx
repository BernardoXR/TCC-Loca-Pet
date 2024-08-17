import Home from "./pages/Home";
import Guia from "./pages/Guia";
import Integrantes from "./pages/Integrantes"
import Bibliografia from "./pages/Bibliografia"
import Materiais from "./pages/Materiais"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Guia" element={<Guia/>} />
            <Route path="/Integrantes" element={<Integrantes/>} />
            <Route path="/Ref" element={<Bibliografia/>} />
            <Route path="/Materiais" element={<Materiais/>} />
         </Routes>
      </BrowserRouter>
  )
}

export default App