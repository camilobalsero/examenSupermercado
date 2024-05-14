class Pedido {
    private _email: string;
    private _id: number;
    private _direccion: string;
    private _nombre_usuario: string;

    constructor(email: string, id: number, direccion: string, nombre_usuario: string) {
        this._email = email;
        this._id = id;
        this._direccion = direccion;
        this._nombre_usuario = nombre_usuario;
    }

    get email(): string {
        return this._email;
    }

    get id(): number {
        return this._id;
    }

    get direccion(): string {
        return this._direccion;
    }

    get nombre_usuario(): string {
        return this._nombre_usuario;
    }

    set email(email: string) {
        this._email = email;
    }

    set id(id: number) {
        this._id = id;
    }

    set direccion(direccion: string) {
        this._direccion = direccion;
    }

    set nombre_usuario(nombre_usuario: string) {
        this._nombre_usuario = nombre_usuario;
    }
}

export default Pedido;
