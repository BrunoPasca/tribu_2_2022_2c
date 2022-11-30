import Link from 'next/link';
import TareaCard from './tareaCard';

const tareas = [
    {
        nombre: "Desarrollo",
        id: 1,
        desc: "Desarrollar",
        estado: "A", 
        fechaEstFin: "01/01/2023", 
    },{
        nombre: "Diseño",
        id: 2,
        desc: "Diseñar",
        estado: "C", 
        fechaEstFin: "01/01/2023", 
    }
]

export default function ColumnaTarea({estadoFiltro}: {estadoFiltro:string}) {

    return (
        <div>
          {(tareas).filter(i => i.estado == estadoFiltro).map((tarea) => ( 
            <div key={tarea.id}>
              <Link href={'/moduloProyectos/tareaView'}><TareaCard nombre={tarea.nombre} id={tarea.id} estado={tarea.estado} desc={tarea.desc} fechaEstFin={tarea.fechaEstFin}></TareaCard></Link>
            </div>
          ))}
        </div>
      )
    }