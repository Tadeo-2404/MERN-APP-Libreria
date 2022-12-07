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

const perfil = (req, res) => {
    res.json({msg: 'desde perfil'})
}

export {
    registrar,
    perfil
}