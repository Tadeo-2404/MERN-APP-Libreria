import Cliente from '../models/Cliente.js';
import generateJWT from '../helpers/generateJWT.js';
import generateToken from '../helpers/generateToken.js';
import emailRecuperar from '../helpers/sendEmailRecuperar.js';
import emailConfirmar from '../helpers/sendEmailConfirmar.js';

const registrar = async (req, res)  => {
    const {correo} = req.body;
    
    const correoExistente = await Cliente.findOne({correo: correo});
    if(correoExistente) {
        const error = new Error("Este correo ya esta registrado, intenta con uno nuevo");
        return res.status(400).json({msg: error.message});
    }

    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        await emailConfirmar(cliente);
        res.json({msg: "Se ha enviado un correo de confirmacion para tu cuenta"});
    } catch (error) {
        console.log(error);
    }
}

const iniciarSesion = async (req, res) => {
    const {correo, password} = req.body;
    const existe =  await Cliente.findOne({correo: correo});

    if(!existe) {
        const error = new Error("Esta cuenta no esta registrada");
        return res.status(400).json({msg: error.message});
    }

    if(!existe.confirmado) {
        const error = new Error("Esta cuenta no ha sido confirmada");
        return res.status(400).json({msg: error.message});
    }

    if(await existe.comparePassword(password)) {
        generateJWT(existe.id);
        res.json(generateJWT(existe.id));
    } else {
        const error = new Error("El password no es correcto");
        return res.status(400).json({msg: error.message});
    }
}

const confirmarCuenta = async (req, res) => {
    const {token} = req.params;
    const confirmado = await Cliente.findOne({token: token});

    if(!confirmado) {
        const error = new Error("Token no valido");
        return res.status(404).json({msg: error.message});
    }

    try {
        confirmado.token = null;
        confirmado.confirmado = true;
        await confirmado.save();
        res.json({msg: "Tu cuenta ha sido confirmada correctamente ya puedes iniciar sesion"});
    } catch (e) {
       console.log(e);
    }
}

const olvidePassword = async (req, res) => {
    const {correo} = req.body; //leeemos el correo 
    const cliente = await Cliente.findOne({correo: correo}); //buscamos el cliente

    if(!cliente) {
        const error = new Error("Este correo no esta registrado, intentalo de nuevo");
        res.status(400).json({msg: error.message});
    }

    try {
        cliente.token = generateToken(); //le generamos nuevo token
        await cliente.save(); //guardamos el cliente
        emailRecuperar(cliente);
        res.json({msg: "Se ha enviado un correo con las instrucciones para recuperar tu contraseña"});
    } catch (e) {
        const error = new Error(e);
        res.status(40).json({msg: error.message});
    }
}

const comprobarToken = async (req, res) => {
    const {token} = req.params;
    const tokenValido = await Cliente.findOne({token: token});

    if(tokenValido) {
        res.json({msg: "Introduce tu nueva contraseña"});
    } else {
        const error = new Error("Algo ha salido mal, intentalo de nuevo");
        return res.status(400).json({msg: error.message});
    }
}

const nuevoPassword = async (req, res) => {
    const {token} = req.params;
    const { password } = req.body;
    const cliente = await Cliente.findOne({token: token});

    if(!cliente) {
        const error = new Error("Esta cuenta no existe, intentalo de nuevo");
        return res.status(400).json({msg: error.message});
    }

    try {
        cliente.token = null;
        cliente.password = password;
        await cliente.save();
        res.json({msg: "Tu contraseña ha sido actualizada correctamente"});
    } catch (error) {
        const e = new Error(error);
        return res.status(400).json({msg: e.message});
    }
}

const perfil = (req, res) => {
    const {cliente} = req;
    res.json(cliente)
}

export {
    registrar,
    perfil,
    iniciarSesion,
    confirmarCuenta,
    olvidePassword,
    nuevoPassword,
    comprobarToken
}