import db from '../config/config-db';
import { Request, Response } from "express";

export const getPedidos = async (req: Request, res: Response) => {
    try {
        // Obtener el ID del usuario autenticado desde res.locals
        const userId = res.locals.user;
        
        // Si el ID del usuario no está disponible, retornar un error
        if (!userId) {
            return res.status(401).json({
                error: "No se encontró el ID de usuario"
            });
        }

        // Consultar la base de datos para obtener los pedidos del usuario actual
        const data = await db.query('SELECT * FROM pedido WHERE email = ?', [userId]);

        res.json({
            data
        });
    } catch (error) {
        console.error("Error al ejecutar la consulta:", error);
        return res.status(500).json({
            error: "Error al obtener pedidos"
        });
    }
};

export default getPedidos;
