import db from '../config/config-db';
import Auth from '../Dto/AuthDto';
import Pedido from '../Dto/PedidoDto';
import User from '../Dto/UserDto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users (nombre,email, telefono,direccion, password ) VALUES (?,?, ?, ?, ?)';
        const values = [ user.nombre,user.email,user.telefono,user.direccion, user.password];
        return db.execute(sql, values);
    }

    static async login(auth: Auth){
        const sql = 'SELECT password FROM users WHERE email=?'; 
        const values = [auth.email];
        return db.execute(sql,values)
    }
    static async addPedido(pedido:Pedido){
        const sql = 'INSERT INTO pedido (email, catalogo_id, direccion, nombre_usuario) VALUES (?, ?, ?, ?)'
        const values = [pedido.email,pedido.id, pedido.direccion, pedido.nombre_usuario]
        return db.execute(sql,values)
    }
}

export default UserRepository;