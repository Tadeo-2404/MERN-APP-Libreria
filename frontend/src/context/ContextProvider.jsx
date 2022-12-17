import {createContext, useState,  useEffect} from 'react';
import axios from 'axios';
const Context = createContext();
//se manda a llamar en todos los componentes debido a que se lo pasamos por context.provider en APP

const ContextProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem('token'); //obtenemos el item de local storage
      if(!token) {
        setLoading(false);
        return;
      };

      const configuration = {
        headers: {
          "Content-Type": "application/json", //indicamos que es de tipo JSON
          Authorization: `Bearer ${token}` //usamos bearer token
        }
      }
      
      try {
        const url = "http://localhost:4000/api/clientes/perfil"; //mandamos get para obtener perfil
        const {data} = await axios.get(url, configuration);
        setAuth(data);
      } catch (error) {
        console.log(error.response.data.message)
        setAuth({});
      }
      setLoading(false);
    }
    authUser();
  }, [])
  

  return (
    <Context.Provider value={{auth, setAuth, loading}}>
        {children}
    </Context.Provider>
  )
}

export {
    Context
}

export default ContextProvider