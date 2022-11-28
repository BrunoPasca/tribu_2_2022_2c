export type Proyecto = {
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

export type Tarea = {
    id : number,
    id_proyecto: number,
    estado: string,
    descripcion: string,
    horas_estimadas: number,
    horas_totales: number,
}