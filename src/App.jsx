import Home from "./pages/Home";
import Guia from "./pages/Guia";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Guia" element={<Guia/>} />
         </Routes>
      </BrowserRouter>
  )
}

export default App