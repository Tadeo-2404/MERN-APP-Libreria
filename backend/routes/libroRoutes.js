import express from 'express';
import { agregarLibro, actualizarLibro, obtenerLibro, obtenerLibros, eliminarLibro } from '../controllers/libroController.js';
import authenticateToken from '../middleware/auth.js';
const router = express.Router();

//privado
router.post('/',authenticateToken, agregarLibro);
router.get('/', authenticateToken, obtenerLibro);

export default router;
