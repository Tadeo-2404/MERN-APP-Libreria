import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import IniciarSesion from "./components";
import Registrarse from "./components/Registrarse"
import ConfirmarCuenta from "./components/ConfirmarCuenta"
import OlvidePassword from "./components/OlvidePassword"
import NuevoPassword from "./components/NuevoPassword"
import Perfil from "./components/Perfil";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
           <Route index element={<IniciarSesion/>} />
           <Route path="registrarse" element={<Registrarse/>} />
           <Route path="confirmar/:id" element={<ConfirmarCuenta/>} />
           <Route path="perfil" element={<Perfil/>} />
           <Route path="olvide-password" element={<OlvidePassword/>} />
           <Route path="olvide-password" element={<NuevoPassword/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
