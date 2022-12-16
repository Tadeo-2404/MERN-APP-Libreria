import {createContext, useState,  useEffect} from 'react';
import axios from 'axios';
const Context = createContext();
//se manda a llamar en todos los componentes debido a que se lo pasamos por context.provider en APP

const ContextProvider = ({children}) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem('token'); //obtenemos el item de local storage
      if(!token) return;

      const configuration = {
        headers: {
          "Content-Type": "application/json", //indicamos que es de tipo JSON
          Authorization: `Bearer ${token}` //usamos bearer token
        }
      }
      
      try {
        const url = "http://localhost:4000/api/clientes/perfil"; //mandamos get para obtener perfil
        const {data} = await axios.get(url, configuration);
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    }
    authUser();
  }, [])
  

  return (
    <Context.Provider value={{auth, setAuth}}>
        {children}
    </Context.Provider>
  )
}

export {
    Context
}

export default ContextProvider