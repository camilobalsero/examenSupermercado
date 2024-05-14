import express from 'express';
import { getCatalogo } from '../Dto/CatalogoDto';

const router = express.Router();

// Ruta para obtener todos los pedidos
router.get('/', getCatalogo);


export default router;