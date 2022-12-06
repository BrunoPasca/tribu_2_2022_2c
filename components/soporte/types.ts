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
    'razon social': string;
    CUIT: string;
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
    activo:number,
}

// Hecho para que compile el build puede estar mal
export interface FormProductVersionProperties {
    nombre_version: string,
    fecha_lanzamiento_version: string,
    nombre: string,
    fecha_lanzamiento: string,
}

export interface TareaPropeties{
    id:number,
    id_proyecto: number,
    estado:string,
    descripcion:string,
    horas_estimadas:number
    horas_reales:number,
    fecha_inicio: string,
    fecha_fin: string,
    prioridad: string,
    legajo_recurso: number

}

export interface ProyectoProperties{
    id:number,
    nombre: string,
    fecha_inicio: string,
    fecha_fin: string,
    estado: string,
    prioridad: string,
    costo_acumulado: number,
    horas_estimadas: number,
    horas_reales: number
}

export interface ClientesYProductosProperties{
    id:number,
    id_cliente: number,
    id_version: number,
    id_producto:number,

}