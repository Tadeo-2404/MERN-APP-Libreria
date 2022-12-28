import NavPerfil from "./NavPerfil";
import { useState } from "react";
const CambiarPaswwordPerfil = () => {
  const [error, setError] = useState([]);
  const [exito, setExito] = useState([]);
  return (
    <>
      <NavPerfil />
      <div>
        <div>
          <form
            action="/admin/cambiar-password"
            className="bg-gray-200 shadow-2xl w-full sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-12"
          >
            <legend className="uppercase font-bold text-center text-blue-500 sm:text-2xl sm:mb-8 md:text-3xl md:mb-8 lg:text-4xl lg:mb-8 xl:text-5xl xl:mb-8 2xl:text-5xl 2xl:mb-12">
              cambiar password
            </legend>
            <fieldset className="flex flex-col gap-8">
              <div className="flex flex-col gap-y-2">
                <label
                  className="grow uppercase sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl"
                  htmlFor="password"
                >
                  password actual
                </label>
                <input
                  className="border-none outline-none hover:shadow-lg w-full sm:text-sm sm:p-2 md:text-base md:p-2 lg:text-lg lg:p-2 xl:p-2 xl:text-xl 2xl:text-xl 2xl:p-4 capitalize"
                  type="text"
                  placeholder="introduce tu password actual"
                  required
                  id="password"
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label
                  className="grow uppercase sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl"
                  htmlFor="password_nuevo"
                >
                  nuevo password
                </label>
                <input
                  className="border-none outline-none hover:shadow-lg w-full sm:text-sm sm:p-2 md:text-base md:p-2 lg:text-lg lg:p-2 xl:p-2 xl:text-xl 2xl:text-xl 2xl:p-4 capitalize"
                  type="text"
                  placeholder="introduce tu nuevo password"
                  required
                  id="password_nuevo"
                />
              </div>
            </fieldset>

            <input
              type="submit"
              value="cambiar contraseña"
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

          </form>
        </div>
      </div>
    </>
  );
};

export default CambiarPaswwordPerfil;
