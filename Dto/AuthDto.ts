class Auth {
    private _email: string;
    private _password: string
     constructor(
         email: string,
         password: string
     ) {
         this._email = email;
         this._password = password
     }
 
     //Getters
     get email(): string{
         return this._email
     }
     get password(): string{
         return this._password
     }
 
     //Setters
     set email(email:string){
         this._email = email
     }
 
     set password(password: string){
         this._password = password
     }
 }
 
 export default Auth;   