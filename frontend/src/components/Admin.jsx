import { useState, useContext } from 'react'
import { Context } from '../context/ContextProvider';

const Admin = () => {
  const {auth, loading} = useContext(Context);
  return (
    <>
    <div className='flex justify-center p-4'>
       <div className='flex flex-col justify-center items-center gap-y-3'>
         <h1 className='font-bold text-5xl'>Hola <span className='capitalize text-blue-800'>{auth.nombre}</span></h1>
         <h2 className='font-semibold text-xl'>¿Que deseas hacer hoy?</h2>
       </div>
    </div>
    </>
  )
}

export default Admin