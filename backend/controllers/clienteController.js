import Cliente from '../models/Cliente.js';

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
        res.json(cliente);
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
        console.log('bienvenido')
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

const olvidePassword = async (req, res) => {}
const comprobarToken = async (req, res) => {}
const nuevoPassword = async (req, res) => {}

const perfil = (req, res) => {
    res.json({msg: 'desde perfil'})
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