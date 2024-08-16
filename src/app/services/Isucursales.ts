export interface SucursalCreacion {
    sucCodigo:number,
    sucDescripcion:string,
    sucDirrecion:Date,
    sucIdentificacion:string,
    sucFechaCreacion:string,
    monId:number
}

export interface SucursalEdicion {
    sucId:number,
    sucCodigo:number,
    sucDescripcion:string,
    sucDirrecion:Date,
    sucIdentificacion:string,
    sucFechaCreacion:string,
    sucFechaModificacion:string
    monId:number
}

export interface ListadoSucursales{
    sucId:number,
    sucCodigo:number,
    sucDescripcion:string,
    sucDirrecion:string,
    sucIdentificacion:string,
    sucFechaCreacion:string,
    sucFechaModificacion:string,
    monId:number
}

export interface SucursalDTO {
    sucId:number,
    sucCodigo:string,
    sucDescripcion:string,
    sucDirrecion:string,
    sucIdentificacion:string,
    sucFechaCreacion:string,
    sucFechaModificacion:string
    monId:string
}

