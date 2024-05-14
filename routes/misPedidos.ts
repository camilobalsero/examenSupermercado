import express from 'express'; 
import mispedidosController from '../controller/historial-controller';
import validateToken from '../middleware/validateToken';

const router = express.Router();

router.get('/', validateToken, mispedidosController);

export default router;