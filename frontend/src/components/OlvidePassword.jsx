import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

//el usuario coloca su correo y se le envia un email
const olvidePassword = () => {
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState([]);
  const [exito, setExito] = useState([]);
  const [load, setLoad] = useState(false);
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const resetForm = () => {
    setCorreo("");
  }

  const handdleSubmit = async (event) => {
    setError([]);
    event.preventDefault();

    if (!correo) {
      setError((error) => [...error, "Todos los campos son obligatorios"]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    if(!regEmail.test(correo)) {
      setError((error) => [...error, `"${correo}" no es un correo valido`]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      return;
    }

    try {
      setLoad(true);
      const url = "http://localhost:4000/api/clientes/olvide-password";
      const response = await axios.post(url, {correo});
      setLoad(false);
      setExito(exito => [...exito, response.data.msg]);
      setTimeout(() => {
        setExito([]);
        resetForm();
      }, 2500);
    } catch (e) {
      console.log(e)
      setError(error => [...error, e.response.data.msg]);
      setTimeout(() => {
        setError([]);
      }, 2500);
      setLoad(false);
    }
  };

  return (
    <div>
      <form
        action="/olvide-password"
        className="bg-gray-200 p-12 w-full shadow-2xl"
        onSubmit={handdleSubmit}
      >
        <legend className="uppercase font-bold text-center text-blue-500 text-4xl mb-10">
          restablecer contraseña
        </legend>
        <fieldset className="flex flex-col gap-8">
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
              onChange={(event) => setCorreo(event.target.value)}
              value={correo}
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
          value="restablecer contraseña"
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
            <div className="bg-red-500 text-center text-white font-bold uppercase p-3 mt-3 w-full">
              <p>{error}</p>
            </div>
          </div>
        )}

        {exito.length > 0 && (
          <div className="flex flex-col justify-center items-center w-full">
            <div className="bg-green-600 text-center text-white font-bold uppercase p-3 mt-3 w-full">
              <p>{exito}</p>
            </div>
          </div>
        )}

        <div className="text bold mt-6 capitalize underline w-full grid grid-cols-2 text-center gap-x-2">
          <div className="hover:text-gray-400">
            <Link to="/registrarse" preventScrollReset={true}>
              ¿no tienes una cuenta? crea una
            </Link>
          </div>
          <div className="hover:text-gray-400">
            <Link to="/" preventScrollReset={true}>
              ¿ya tienes una cuenta? inicia sesion
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default olvidePassword;
