export interface TicketProperties {
    titulo: string,
    id: number,
    id_responsable: number,
    id_cliente: number,
    id_producto: number,

    severidad: string,
    estado: string,
    descripcion: string,
    medio_contacto: string,
    dato_contacto: string,

    fecha_emision: string, //Date
    fecha_resolucion: string, //Date
}

export interface RecursosProperties {
    legajo: number;
    Nombre: string;
    Apellido: string;
}

export interface ClientesProperties {
    id: number;
    razon_social: string;
    CUIT: string;
}

export interface EmpleadoProperties {
    legajo: number,
    id_gerente: number,
    nombre: string,
    apellido: string,
    antiguedad: number,
}

export interface RecursosProperties{
    legajo:number,
    Nombre:string,
    Apellido:string
}

export interface ProductProperties {
    id: number,
    id_version: number,
    fecha_lanzamiento: string,
    nombre: string,
    activo:number,
}

export interface ProdVerProperties {
    id: number,
    producto_id:number,
    version_id:number,
}


export interface VersionProperties {
    id: number,
    fecha_lanzamiento: string,
    nombre: string,
}

// Hecho para que compile el build puede estar mal
export interface FormProductVersionProperties {
    nombre_version: string,
    fecha_lanzamiento_version: string,
    nombre: string,
    fecha_lanzamiento: string,
}