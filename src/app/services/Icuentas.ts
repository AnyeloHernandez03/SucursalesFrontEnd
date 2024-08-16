export interface ILogin{
    correo:string,
    password:string,
}

export interface LoginDTO{
    token:string,
    expiracion:Date,
}