import express from 'express'
import { registrar, perfil, iniciarSesion, confirmarCuenta, olvidePassword, comprobarToken, nuevoPassword } from '../controllers/clienteController.js';
const router = express.Router();

router.post('/', registrar);
router.post('/iniciar-sesion', iniciarSesion);
router.get('/confirmar-cuenta/:token', confirmarCuenta);
router.post('/olvide-password', olvidePassword);
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);
router.get('/perfil', perfil);

export default router;