import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];
    
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        const bearerToken = headerToken.slice(7);
        console.log(bearerToken);
        try {
            const tokenValido = await jwt.verify(bearerToken, process.env.SECRET_KEY || 'camilo');
            res.locals.user = tokenValido;
            console.log(tokenValido);
            next();
        } catch (error) {
            res.status(400).json({
                status: 'Acceso denegado'
            });
        }
    } else {
        res.status(400).json({
            status: 'Acceso denegado: Token no proporcionado'
        });
    }
}

export default validateToken;
