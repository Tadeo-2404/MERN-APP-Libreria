import Libro from "../models/Libro.js";

const agregarLibro = async (req, res) => {
    const libro = new Libro(req.body);
    libro.cliente = req.cliente._id;

    try {
        const cliente = await libro.save();
        res.json(cliente)
    } catch (error) {
        console.log(error)
    }
}

const actualizarLibro = async (req, res) => {
    res.json({msg: "actualizando..."})
}

const obtenerLibro = async (req, res) => {
    res.json({msg: "obteniendo libro..."})
}

const obtenerLibros = async (req, res) => {
    res.json({msg: "obtieniendo todos los libros..."})
} 

const eliminarLibro = async (req, res) => {
    res.json({msg: "eliminando libro..."})
}

export {
    agregarLibro, 
    actualizarLibro, 
    obtenerLibro, 
    obtenerLibros,
    eliminarLibro
}