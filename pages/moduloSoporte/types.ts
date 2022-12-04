export interface TicketProperties {
    titulo: string,
    id: number,
    id_responsable: number,
    id_cliente: number,
    id_producto: number,

    severidad: string,
    estado: string,
    descripcion:string,
    medio_contacto: string,
    dato_contacto: string,
    
    fecha_emision: string, //Date
    fecha_resolucion:string, //Date
}

export interface ClientesProperties {
    legajo:number;
    Nombre: string;
    Apellido: string;
}

export interface EmpleadoProperties {
    legajo: number,
    id_gerente: number,
    nombre: string,
    apellido: string,
    antiguedad: number,
}

export interface ProductProperties {
    id: number,
    id_version: number,
    fecha_lanzamiento: string,
    nombre:string,
}

export interface VersionProperties {
    id:number,
    fecha_lanzamiento: string,
    nombre:string,
}

export interface FormProductVersionProperties{
    id: number,
    id_version: number,
    nombre_version: string,
    fecha_lanzamiento_version:string,
    fecha_lanzamiento: string,
    nombre:string,
}