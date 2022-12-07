const registrar = (req, res) => {
    res.json({msg: 'desde registrar'})
}

const perfil = (req, res) => {
    res.json({msg: 'desde perfil'})
}

export {
    registrar,
    perfil
}