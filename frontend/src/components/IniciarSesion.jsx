import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from '../context/ContextProvider';
import axios from 'axios';
import { ClipLoader } from "react-spinners";

//el usuario coloca su correo y su contraseña para iniciar sesion (necesita confirmar cuenta)
const iniciarSesion = () => {
  //importamos el context para leerlo globalmente
  const {auth} = useContext(Context);

  //imporamos useNavigate para redireccionar
  const navigate = useNavigate();

  //variables formulario
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [exito, setExito] = useState([]);
  const [load, setLoad] = useState(false);

  //regex para validar correo y passsword
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regSpaces = /^(?=.*\s)/;
  const regLower = /^(?=.*[a-z])/;
  const regUpper = /^(?=.*[A-Z]).*$/;
  const regNumber = /^(?=.*[0-9])/;
  const regSpecial = /^(?=.*[~`!@#$%^&*()--+={}[]|\:;"'<>,.?_])/;
  const regLength = /^.{10,16}$/;

  const resetForm = () => {
    setCorreo("");
    setPassword("");
  }

  const handdleSubmit = async (event) => {
    event.preventDefault();

    if(!correo || !password) {
      setError(error => [...error, "Todos los campos son obligatorios"]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    if(!regEmail.test(correo)) {
      setError(error => [...error, `${correo} no es un correo valido (correo@correo.com)`]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    if(regSpaces.test(password)) {
      setError(error => [...error, `"${password}" no debe contener espacios en blanco`]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    if(!regLower.test(password)) {
      setError(error => [...error, `"${password}" debe contener al menos una letra miniscula (a-z)`]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    if(!regUpper.test(password)) {
      setError(error => [...error, `"${password}" debe contener al menos una letra mayuscula (A-Z)`]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    if(!regNumber.test(password)) {
      setError(error => [...error, `"${password}" debe contener al menos un numero (0-9)`]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    if(!regSpecial.test(password)) {
      setError(error => [...error, `"${password}" debe contener al menos un caracter especial (!@#$%^&*])`]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    if(!regLength.test(password)) {
      setError(error => [...error, `"${password}" debe tener entre 8 y 20 caracteres`]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    try {
      setLoad(true);
      const url = "http://localhost:4000/api/clientes/";
      const {data} = await axios.post(url, {correo, password});
      setLoad(false);
      localStorage.setItem('token', data); //guardando token en localStorage
    } catch (e) {
      console.log(e)
      setError(error => [...error, e.response.data.msg]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      setLoad(false);
    }
  }

  return (
    <div>
      <form action="/" className="bg-gray-200 p-12 w-full shadow-2xl" onSubmit={handdleSubmit}>
        <legend className="uppercase font-bold text-center text-blue-500 text-4xl mb-10">iniciar sesion</legend>
        <fieldset className="flex flex-col gap-8">  
          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="correo">
              correo
            </label>
            <input className="border-none outline-none hover:shadow-lg w-full text-xl p-3" 
            type="email" 
            placeholder="Introduce tu correo"
            required
            id="correo"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="password">
              contraseña
            </label>
            <input className="border-none outline-none hover:shadow-lg w-full text-xl p-3" 
            type="password" 
            placeholder="Introduce tu contraseña"
            required
            min="8"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </fieldset>

        {load &&
        <div className='flex justify-center mt-10'>
        <ClipLoader
           color="blue"
           loading="true"
           size={100}
           aria-label="Loading Spinner"
         />
       </div>
        }

        <input type="submit" 
        value="iniciar sesion"
        className="uppercase 
        bg-blue-500 
        text-white 
        p-3 
        mt-10 
        w-full
        hover:transform 
        hover:-translate-y-2 
        hover:bg-gradient-to-r 
        from-blue-500
        to-blue-300"/>

        {error.length > 0 && (
          <div className="flex flex-col justify-center items-center w-full">
            {error.map((e) => (
              <div
                className="bg-red-500 text-center text-white font-bold uppercase p-3 mt-3 w-full"
                key={e}
              >
                <p>{e}</p>
              </div>
            ))}
          </div>
        )}

        {exito.length > 0 && (
          <div className="flex flex-col justify-center items-center w-full">
            {exito.map((e) => (
              <div
                className="bg-green-600 text-center text-white font-bold uppercase p-3 mt-3 w-full"
                key={e}
              >
                <p>{e}</p>
              </div>
            ))}
          </div>
        )}

        <div className='text bold mt-6 capitalize underline w-full grid grid-cols-2 text-center gap-x-2'>
         <div className='hover:text-gray-400'>
           <Link to="/registrarse" preventScrollReset={true}>¿no tienes una cuenta? crea una</Link>
         </div>
         <div className='hover:text-gray-400'>
           <Link to="/olvide-password" preventScrollReset={true}>¿olvidaste tu contraseña?</Link>
         </div>
        </div>
      </form>
    </div>
  )
}

export default iniciarSesion