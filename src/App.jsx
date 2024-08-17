import Home from "./pages/Home";
import Guia from "./pages/Guia";
import Integrantes from "./pages/Integrantes"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Guia" element={<Guia/>} />
            <Route path="/Integrantes" element={<Integrantes/>} />
         </Routes>
      </BrowserRouter>
  )
}

export default App