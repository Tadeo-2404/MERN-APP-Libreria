import {Link} from 'react-router-dom'
const ConfirmarCuenta = () => {
  return (
    <div>
    <form
      action="/olvide-password"
      className="bg-gray-200 p-12 w-full shadow-2xl"
    >

      <div className="bg-green-500 text-white uppercase text-center p-4 font-bold">
        <h1>cuenta confirmada correctamente</h1>
      </div>

      <div className="text bold mt-6 capitalize underline w-full grid grid-cols-2 text-center gap-x-2">
        <div className="hover:text-gray-400">
          <Link to="/" preventScrollReset={true}>
            ¿ya tienes una cuenta? inicia sesion
          </Link>
        </div>
      </div>
    </form>
  </div>
  )
}

export default ConfirmarCuenta