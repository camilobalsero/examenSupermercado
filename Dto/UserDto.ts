class User {
    private _nombre: string;
    private _email: string;
    private _telefono: string;
    private _direccion: string;
    private _password: string;

    constructor(
        nombre: string, 
        email: string,
        telefono: string,
        direccion: string,
        password: string
    ) {
        this._nombre = nombre;
        this._email = email;
        this._telefono = telefono;
        this._direccion = direccion;
        this._password = password;
    }

    // Getters
    get nombre(): string {
        return this._nombre;
    }

    get email(): string {
        return this._email;
    }

    get telefono(): string {
        return this._telefono;
    }

    get direccion(): string {
        return this._direccion;
    }

    get password(): string {
        return this._password;
    }

    // Setters
    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set email(email: string) {
        this._email = email;
    }

    set telefono(telefono: string) {
        this._telefono = telefono;
    }

    set direccion(direccion: string) {
        this._direccion = direccion;
    }

    set password(password: string) {
        this._password = password;
    }
}

export default User;