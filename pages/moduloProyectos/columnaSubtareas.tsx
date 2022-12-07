import Link from 'next/link';
import TareaCard from './tareaCard';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

interface TareasProperties{
  id: number,
  id_proyecto: number,
  id_padre: number,
  legajo_recurso: number,
  estado: string,
  prioridad: string ,
  descripcion: string,
  horas_estimadas: number,
  horas_reales: number,
  fecha_inicio: string,
  fecha_fin: string,
}


export default function ColumnaSubtarea({estadoFiltro, id_padre}: {estadoFiltro:string, id_padre:number}) {
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
          {(tareas).filter(i => i.estado == estadoFiltro && i.id_padre == id_padre ).map((tarea) => ( 
            <div key = {tarea.estado}>
              <Link href={'/moduloProyectos/tareaView/'+tarea.id}><TareaCard id_tarea={tarea.id} id_proyecto={tarea.id_proyecto} estado={tarea.estado} desc={tarea.descripcion}></TareaCard></Link>
            </div>
          ))}
        </div>
      )
    }