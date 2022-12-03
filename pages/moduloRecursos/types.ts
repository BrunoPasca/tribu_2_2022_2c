export interface Proyecto {
    id : number,
    nombre : string,
    fecha_inicio : Date,
    fecha_fin: Date,
    estado : string,
    prioridad: string,
    costo_acumulado: number,
    horas_estimadas: number,
    horas_reales: number
}

export interface  Tarea {
    id: number,
    id_proyecto: number,
    horas_estimadas:number,
    estado: string,
    descripcion: string
}

export interface Guardia {
    id: number,
    legajo_empleado: number,
    fecha_inicio: Date,
    fecha_fin: Date
}

export interface Licencia {
    id: number,
    legajo_empleado: number,
    tipo_licencia: string,
    descripcion:string,
    fecha_inicio: Date,
    fecha_fin: Date,
    goce_sueldo : number
}

export interface Falta {
    id: number,
    legajo_empleado: number,
    fecha: Date,
    justificante: string
}