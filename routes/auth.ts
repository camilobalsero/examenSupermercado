import express from "express";
import authController from '../controller/auth-controller';
const router = express.Router();


router.post('/', authController);


export default router;
