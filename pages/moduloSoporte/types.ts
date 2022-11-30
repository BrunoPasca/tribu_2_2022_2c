export interface TicketProperties {
    titulo: string,
    id: number,
    responsable: string,
    severidad: string,
    estado: string,
    descripcion:string,
    datosCliente: string,
    idCliente: number,
    medioContacto: string,
    datoContacto: string,
    nombreProducto: string,
    versionProducto: string,
    fechaEmision: Date,
    fechaResolucion:Date,
}

export interface ClientesProperties {
    legajo:number;
    Nombre: string;
    Apellido: string;
}
export interface TicketProperties_2 {
    nombre: string,
    id: number,
    id_tarea: number,
    id_producto: number,
    severidad: string,
    estado: string,
    descripcion:string,
    fechaEmision: Date,
    fechaResolucion:Date,
}

