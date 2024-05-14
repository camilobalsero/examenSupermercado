import Auth from "../Dto/AuthDto";
import { catalogos } from "../Dto/CatalogoDto";
import Pedido from "../Dto/PedidoDto";
import User from "../Dto/UserDto";
import generateHash from "../helpers/generateHash";
import UserRepository from "../repositories/UserRepository";
const bcrypt = require("bcryptjs");

class UserService{
    static async register(user:User){
        user.password = await generateHash(user.password);
        return await UserRepository.add(user);
    }


    static async auth(auth: Auth){
        const result: any = await UserRepository.login(auth);
        console.log(3,result);
        
        if (result[0].length > 0){
            console.log(4,result);
            
            const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
            if(isPasswordValid){
                return {logged: true, status: "Succesful Authentication"}
                }
                return{logged: false, status: "Incorrect username or password"}
            }   
            return{logged: false, status: "Incorrect username or password"}
    }


    static async verify(pedido:Pedido){
        const catalogoDto = catalogos.find(catalogo => catalogo.id === pedido.id)
        console.log("555");
        if (catalogoDto) {
            const addPedido = await UserRepository.addPedido(pedido);
            if (addPedido) {
                return {logged: true, status: "Pedido encontrado"}
            }
        }else{
            return{logged: false, status: "Pedido no encontrado"}
        }
    }
}

export default UserService;