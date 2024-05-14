import express from "express";
import pedidosController from '../controller/pedidos-controller';
import validateToken from "../middleware/validateToken";

const router = express.Router();


router.get('/', validateToken, pedidosController);


export default router;