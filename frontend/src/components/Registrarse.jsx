import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import {ClipLoader} from "react-spinners";
//el usuario crea una nueva cuenta y se le envia un correo para confirmar su cuenta
const registrarse = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [error, setError] = useState([]);
  const [exito, setExito] = useState([]);
  const [load, setLoad] = useState(false);

  const handdleSubmit = async (event) => {
    setError([]);
    event.preventDefault();
    const regName = /^[a-zA-Z ]{2,30}$/;
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regTel = /^[(]{0,1}[0-9]{2}[)]{0,1}[-\s\.]{0,1}[0-9]{4}[-\s\.]{0,1}[0-9]{4}$/
    const regSpaces = /^(?=.*\s)/;
    const regLower = /^(?=.*[a-z])/;
    const regUpper = /^(?=.*[A-Z]).*$/;
    const regNumber = /^(?=.*[0-9])/;
    const regSpecial = /^(?=.*[~`!@#$%^&*()--+={}[]|\:;"'<>,.?_])/;
    const regLength = /^.{10,16}$/;

    if(!nombre || !apellido || !telefono || !correo || !password) {
      setError(error => error.push("Todos los campos son obligatorios"));
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    if(!regName.test(nombre)) {
      setError(error => [...error,`"${nombre}" no es nombre valido (gonzalo)`]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    if(!regName.test(apellido)) {
      setError(error => [...error, `"${apellido}" no es apellido valido (gomez)`]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    if(!regTel.test(telefono)) {
      setError(error => [...error, `"${telefono}" no es telefono valido (00-0000-0000)`]);
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

    if(password != repetirPassword) {
      setError(error => [...error, "Las contraseñas no coinciden"]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

      try {
        setLoad(true);
        const url = "http://localhost:4000/api/clientes/registrarse";
        const response = await axios.post(url, {nombre, apellido, correo, password, telefono});
        setLoad(false);
        setExito(exito => [...exito, response.data.msg]);
        setTimeout(() => {
          setExito([]);
        }, 2500);
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
      <form
        action="/registrarse"
        className="bg-gray-200 p-12 w-full shadow-2xl"
        onSubmit={handdleSubmit}
      >
        <legend className="uppercase font-bold text-center text-blue-500 text-4xl mb-10">
          Registrarse
        </legend>
        <fieldset className="flex flex-col gap-8">
          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="nombre">
              nombre
            </label>
            <input
              className="border-none outline-none hover:shadow-lg w-full text-xl p-3"
              type="text"
              placeholder="Introduce tu nombre"
              required
              id="nombre"
              autoComplete="on"
              onChange={(event) => setNombre(event.target.value)}
              value={nombre}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="apellido">
              apellido
            </label>
            <input
              className="border-none outline-none hover:shadow-lg w-full text-xl p-3"
              type="text"
              placeholder="Introduce tu apellido"
              required
              id="apellido"
              autoComplete="on"
              onChange={(event) => setApellido(event.target.value)}
              value={apellido}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="telefono">
              telefono
            </label>
            <input
              className="border-none outline-none hover:shadow-lg w-full text-xl p-3"
              type="tel"
              placeholder="XX-XXXX-XXXX"
              required
              id="telefono"
              autoComplete="on"
              pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
              onChange={(event) => setTelefono(event.target.value)}
              value={telefono}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="correo">
              correo
            </label>
            <input
              className="border-none outline-none hover:shadow-lg w-full text-xl p-3"
              type="email"
              placeholder="Introduce tu correo"
              required
              id="correo"
              autoComplete="on"
              onChange={(event) => setCorreo(event.target.value)}
              value={correo}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="password">
              contraseña
            </label>
            <input
              className="border-none outline-none hover:shadow-lg w-full text-xl p-3"
              type="password"
              placeholder="Introduce tu contraseña"
              required
              min="8"
              id="password"
              autoComplete="on"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="repetir_password">
              repetir contraseña
            </label>
            <input
              className="border-none outline-none hover:shadow-lg w-full text-xl p-3"
              type="password"
              placeholder="Repite tu contraseña"
              required
              min="8"
              id="repetir_password"
              autoComplete="on"
              onChange={(event) => setRepetirPassword(event.target.value)}
              value={repetirPassword}
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

        <input
          type="submit"
          value="registrarse"
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
      to-blue-300"
        />

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

        <div className="text bold mt-6 capitalize underline w-full grid grid-cols-2 text-center gap-x-2">
          <div className="hover:text-gray-400">
            <Link to="/" preventScrollReset={true}>
              ¿ya tienes una cuenta? inicia sesion
            </Link>
          </div>
          <div className="hover:text-gray-400">
            <Link to="/olvide-password" preventScrollReset={true}>
              ¿olvidaste tu contraseña?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default registrarse