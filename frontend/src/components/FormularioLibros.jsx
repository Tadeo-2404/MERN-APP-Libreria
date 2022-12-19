import { useState } from "react";

const FormularioLibros = () => {
    const [titulo, setTitulo] =  useState('');
    const [autor, setAutor] = useState('');
    const [editorial, setEditorial] = useState('');
    const [fecha, setFecha] = useState(Date.now());

  return (
    <>
      <form action="/" className="bg-gray-200 p-12 w-full shadow-2xl">
        <legend className="uppercase font-bold text-center text-blue-500 text-2xl mb-8">Agregar Libros</legend>
        <fieldset className="flex flex-col gap-8">
        <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="titulo">
              titulo
            </label>
            <input className="border-none outline-none hover:shadow-lg w-full text-lg p-2" 
            type="text" 
            placeholder="Titulo del Libro"
            required
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="autor">
              autor
            </label>
            <input className="border-none outline-none hover:shadow-lg w-full text-lg p-2" 
            type="text" 
            placeholder="Autor del Libro"
            required
            id="autor"
            value={autor}
            onChange={(event) => setAutor(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="editorial">
              editorial
            </label>
            <input className="border-none outline-none hover:shadow-lg w-full text-lg p-2" 
            type="text" 
            placeholder="Editorial del Libro"
            required
            id="editorial"
            value={editorial}
            onChange={(event) => setEditorial(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="grow uppercase" htmlFor="fecha">
              Fecha
            </label>
            <input className="border-none outline-none hover:shadow-lg w-full text-lg p-2" 
            type="date" 
            placeholder="Fecha del Libro"
            required
            id="fecha"
            value={fecha}
            onChange={(event) => setFecha(event.target.value)}
            />
          </div>
        </fieldset>

        <input type="submit" 
        value="agregar"
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
      </form>
    </>
  );
};

export default FormularioLibros;
