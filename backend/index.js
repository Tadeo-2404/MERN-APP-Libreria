import express from 'express'; //importamos express
import dotenv from 'dotenv'; //importamos dotenv para variables de entorno
import conectarDB from './config/db.js'; //importamos la conexion
const app = express(); //mandamos a llamar express con app
const port = process.env.port || 4000; //indicamos el puerto donde correra
dotenv.config(); //le decimos a express donde buscar la conexion
conectarDB();

app.get('/', (req, res) => {
    res.send('Hola Mundo')  //get obtiene la ruta con express
})


app.listen(port, () => {
    console.log(`App working on port ${port}`)
})