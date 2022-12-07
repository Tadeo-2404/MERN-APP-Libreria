import mongoose from 'mongoose';
import generateToken from '../helpers/generateToken.js';
const { Schema } = mongoose;

const clienteSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    telefono: {
        type: String,
        trim: true,
        default: null
    },
    confirmado: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        default: generateToken()
    }
});

const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;