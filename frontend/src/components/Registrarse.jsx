import {Link} from 'react-router-dom'
const registrarse = () => {
  return (
    <div>
    <form action="/" className="bg-gray-200 p-12 w-full shadow-2xl">
      <legend className="uppercase font-bold text-center text-blue-500 text-4xl mb-10">Registrarse</legend>
      <fieldset className="flex flex-col gap-8">  
       <div className="flex flex-col gap-y-2">
          <label className="grow uppercase" htmlFor="nombre">
            nombre
          </label>
          <input className="border-none outline-none hover:shadow-lg w-full text-xl p-3" 
          type="text" 
          placeholder="Introduce tu nombre"
          required
          id="nombre"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="grow uppercase" htmlFor="apellido">
            apellido
          </label>
          <input className="border-none outline-none hover:shadow-lg w-full text-xl p-3" 
          type="text" 
          placeholder="Introduce tu apellido"
          required
          id="apellido"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="grow uppercase" htmlFor="telefono">
            telefono
          </label>
          <input className="border-none outline-none hover:shadow-lg w-full text-xl p-3" 
          type="tel" 
          placeholder="Introduce tu telefono"
          required
          id="telefono"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="grow uppercase" htmlFor="correo">
            correo
          </label>
          <input className="border-none outline-none hover:shadow-lg w-full text-xl p-3" 
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
          <input className="border-none outline-none hover:shadow-lg w-full text-xl p-3" 
          type="password" 
          placeholder="Introduce tu contraseña"
          required
          min="8"
          id="password"
          />
        </div>
      </fieldset>
      <input type="submit" 
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
      to-blue-300"/>

      <div className='text bold mt-6 capitalize underline w-full grid grid-cols-2 text-center gap-x-2'>
       <div className='hover:text-gray-400'>
         <Link to="/" preventScrollReset={true}>¿ya tienes una cuenta? inicia sesion</Link>
       </div>
       <div className='hover:text-gray-400'>
         <Link to="/olvide-password" preventScrollReset={true}>¿olvidaste tu contraseña?</Link>
       </div>
      </div>
    </form>
  </div>
  )
}

export default registrarse