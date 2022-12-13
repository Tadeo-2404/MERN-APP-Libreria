import { Link } from "react-router-dom";

//una vex que el usuario recibe su correo, se verifica el nuevo token generado, si es correcto se pide que coloque su nueva contraseña
const nuevoPassword = () => {
  return (
    <div>
      <form
        action="/olvide-password"
        className="bg-gray-200 p-12 w-full shadow-2xl"
      >
        <legend className="uppercase font-bold text-center text-blue-500 text-4xl mb-10">
          restablecer contraseña
        </legend>
        <fieldset className="flex flex-col gap-8">

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
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="repetir_password">
              repetir contraseña
            </label>
            <input className="border-none outline-none hover:shadow-lg w-full text-xl p-3" 
            type="password" 
            placeholder="Repite tu contraseña"
            required
            min="8"
            id="repetir_password"
            />
          </div>

        </fieldset>
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

export default nuevoPassword;
