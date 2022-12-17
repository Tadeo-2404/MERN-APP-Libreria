import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateLayout from "./layout/TemplateLayout";
import TemplateLayoutAdmin from "./layout/TemplateLayoutAdmin";

//publico
import IniciarSesion from "./components/IniciarSesion";
import Registrarse from "./components/Registrarse"
import ConfirmarCuenta from "./components/ConfirmarCuenta";
import OlvidePassword from "./components/OlvidePassword"
import NuevoPassword from "./components/NuevoPassword"
import Error404 from "./components/Error404";

//privado
import Perfil from "./components/Perfil";
import Admin from "./components/Admin";
import ContextProvider from "./context/ContextProvider";
function App() {

  return (
    <BrowserRouter>
    <ContextProvider>
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
        
        <Route path="/admin" element={<TemplateLayoutAdmin />}>
           <Route index element={<Admin/>} />
           <Route path="*" element={<Error404/>} />
        </Route>

      </Routes>
    </ContextProvider>
    </BrowserRouter>
  )
}

export default App
