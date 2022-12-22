import {createContext, useState,  useEffect} from 'react';
import axios from 'axios';

const LibrosContext = createContext();

const ContextProviderLibros = ({children}) => {
    const [libros, setLibros] = useState([]);

    const storeLibros = async (libro) => {
        try {
            const token = localStorage.getItem('token');
            const configuration = {
                headers: {
                  "Content-Type": "application/json", //indicamos que es de tipo JSON
                  Authorization: `Bearer ${token}` //usamos bearer token
                }
              }
            const {data} = await axios.post("http://localhost:4000/api/libros", libro, configuration);
            console.log(data);
            const {__v, ...libroGuardado} = data;
            setLibros((libros) => [...libros, libroGuardado]);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getLibros = async () => {
            try {
                const token = localStorage.getItem('token');
                const configuration = {
                    headers: {
                      "Content-Type": "application/json", //indicamos que es de tipo JSON
                      Authorization: `Bearer ${token}` //usamos bearer token
                    }
                  }
                const {data} = await axios.get("http://localhost:4000/api/libros", configuration);
                setLibros([]);
                setLibros(data);
    
            } catch (error) {
                console.log(error)
            }
        }
        getLibros();
    }, [])
    

    return (
        <LibrosContext.Provider value={{libros, storeLibros}}>
            {children}
        </LibrosContext.Provider>
    )
}

export {
    ContextProviderLibros,
}

export default LibrosContext