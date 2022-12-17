import { useState, useEffect } from 'react'
import {Outlet} from 'react-router-dom'

const TemplateLayout = () => {
  const [fecha, setFecha] = useState(0);

  useEffect(() => {
    const updateDate = () => {
      setFecha(new Date().getFullYear())
    }
    updateDate();
  }, [])
  
  return (
    <>
      <div className='bg-blue-500 p-6 flex flex-col justify-center items-center w-full'>
       <h1 className='text-4xl font-bold uppercase'>libreria</h1>
      </div>
      <div className='p-8 flex flex-col justify-center items-center h-screen'>
      <Outlet/>
      </div>
      <div className='bg-black p-4'>
        <div>
          <h2 className='text-white text-center uppercase'>todos los derechos reservados &copy; {fecha}</h2>
        </div>
      </div>
    </>
  )
}

export default TemplateLayout