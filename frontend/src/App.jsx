import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateLayout from "./layout/TemplateLayout";
import IniciarSesion from "./components/IniciarSesion";
import Registrarse from "./components/Registrarse"
import ConfirmarCuenta from "./components/ConfirmarCuenta";
import OlvidePassword from "./components/OlvidePassword"
import NuevoPassword from "./components/NuevoPassword"
import Perfil from "./components/Perfil";
import Error404 from "./components/Error404";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateLayout/>}>
           <Route index element={<IniciarSesion/>} />
           <Route path="registrarse" element={<Registrarse/>} />
           <Route path="confirmar-cuenta/:token" element={ <ConfirmarCuenta/>} />
           <Route path="perfil" element={<Perfil/>} />
           <Route path="olvide-password" element={<OlvidePassword/>} />
           <Route path="olvide-password/:token" element={<NuevoPassword/>} />
           <Route path="*" element={<Error404/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
