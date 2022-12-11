
const iniciarSesion = () => {
  return (
    <div>
      <form action="/" className="bg-gray-200 p-12 w-full shadow-2xl">
        <legend className="uppercase font-bold text-center text-blue-500 text-4xl mb-10">iniciar sesion</legend>
        <fieldset className="flex flex-col gap-8">  
          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="correo">
              correo
            </label>
            <input className="border-none outline-none hover:shadow-lg w-96 text-xl p-3" 
            type="email" 
            placeholder="Introduce tu correo"
            required
            id="correo"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="password">
              contraseña
            </label>
            <input className="border-none outline-none hover:shadow-lg w-96 text-xl p-3" 
            type="password" 
            placeholder="Introduce tu contraseña"
            required
            min="8"
            id="password"
            />
          </div>
        </fieldset>
        <input type="submit" 
        value="iniciar sesion"
        className="uppercase 
        bg-blue-500 
        text-white 
        p-3 
        mt-10 
        w-96 
        hover:transform 
        hover:-translate-y-2 
        hover:bg-gradient-to-r 
        from-blue-500
        to-blue-300"/>
      </form>
    </div>
  )
}

export default iniciarSesion