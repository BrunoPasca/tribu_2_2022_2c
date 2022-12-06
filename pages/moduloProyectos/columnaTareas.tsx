import Link from 'next/link';
import TareaCard from './tareaCard';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

interface TareasProperties{
  id: Number,
  id_proyecto: Number,
  id_ticket: Number,
  legajo_recurso: Number,
  estado: string,
  prioridad: string ,
  descripcion: string,
  horas_estimadas: Number,
  horas_reales: Number,
  fecha_inicio: string,
  fecha_fin: string,
}


export default function ColumnaTarea({estadoFiltro}: {estadoFiltro:string}) {
  const [tareas, setTareas]: [Array<TareasProperties> ,any] = useState([])

  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/tareas")
      .then((res) => res.json())
      .then((data) => {
        setTareas(data)
      })
  }, [])


    return (
        <div>
          {(tareas).filter(i => i.estado == estadoFiltro).map((tarea) => ( 
            <div key = {tarea.estado}>
              <Link href={'/moduloProyectos/tareaView/'+tarea.id}><TareaCard id_tarea={tarea.id} id_proyecto={tarea.id_proyecto} estado={tarea.estado} desc={tarea.descripcion} fechaEstFin= {tarea.fecha_fin}></TareaCard></Link>
            </div>
          ))}
        </div>
      )
    }