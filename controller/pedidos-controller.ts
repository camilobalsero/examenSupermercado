import { Request, Response } from "express";
import UserService from "../services/userServices";
import Pedido from "../Dto/PedidoDto";


let pedido = async (req: Request, res: Response) => {
    try{
        const{
            email,
            id,
            direccion,
            nombre_usuario
        } = req.body
        const result : any = await UserService.verify(new Pedido(email,id,direccion,nombre_usuario))
        if (result.logged) {
            return res.status(200).json({
                status: "Pedido Registrado",
            })
        }
        return res.status(401).json({ 
            status: 'Fallo al realizar el pedido'
        });
    }catch (error : any){
        return res.status(401).json({ 
            status: 'No ingreso datos'
        });
    }
}


export default pedido;