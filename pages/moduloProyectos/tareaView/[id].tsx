import styles from '../../../styles/proyectos.module.css'
import Head_ from '../../head'
import Header from '../../header'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";


interface TareasProperties{
    id: number,
    id_proyecto: number,
    legajo_recurso: number,
    estado: string,
    id_ticket: number,
    prioridad: string ,
    descripcion: string,
    horas_estimadas: number,
    horas_reales: number,
    fecha_inicio: string,
    fecha_fin: string,
    id_padre: number,
    children?: React.ReactNode
  }


export default function TareaView() {
    const router = useRouter();
    const {id} = router.query;

    const [tareas, setTareas]: [Array<TareasProperties> ,any] = useState([])
 

    useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/tareas")
      .then((res) => res.json())
      .then((data) => {
        setTareas(data)
      })
  }, [])



    return (

        
        <>
        <Head_ nombre='Tarea'></Head_>

        <Header></Header>
        
        <div className={styles.proyectoView}>
        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
            <h1 className={styles.tituloEdit}><>
                Tarea {tarea?.id}</>
            </h1>))}
        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
            <h3 className={styles.subtituloEdit}><>
                Proyecto  {tarea?.id_proyecto}</>
            </h3>))}
            <div>
        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
            <h3 className={styles.descripcionText}>
                {tarea?.descripcion}
            </h3>))}
            </div>
            <div className={styles.contenedorPadre}>
                <div className={styles.contenedorTarea}>
                    <div>
                    <h3 className={styles.tituloInfo}>ID proyecto</h3>
                    {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}><>
                            {tarea?.id_proyecto}</>
                        </h2>))}
                        <h3 className={styles.tituloInfo}>Legajo recurso</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}><>
                            {tarea?.legajo_recurso}</>
                        </h2>))}
                        <h3 className={styles.tituloInfo}>Ticket Id</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}><>
                            {tarea?.id_ticket}</>
                        </h2>))}
                        
                    </div>
                    <div>
                        <h3 className={styles.tituloInfo}>Fecha de inicio</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}>
                            {tarea?.fecha_inicio}
                        </h2>))}
                        <h3 className={styles.tituloInfo}>Fecha de finalización</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}>
                            {tarea?.fecha_fin}
                        </h2>))}
                        <h3 className={styles.tituloInfo}>Estado</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}>
                            {tarea?.estado}
                        </h2>))}
                         
                    </div>
                    <div>
                        <h3 className={styles.tituloInfo}>Prioridad</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}>
                            {tarea?.prioridad}
                        </h2>))}
                        <h3 className={styles.tituloInfo}>Horas estimadas</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}><>
                            {tarea?.horas_estimadas}</>
                        </h2>))}
                        <h3 className={styles.tituloInfo}>Horas reales</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}><>
                            {tarea?.horas_reales}</>
                        </h2>))}
                        
                    </div>
                </div>
            </div>
    
            <div className={styles.botonesView}>
                <a href={'/moduloProyectos/eliminarTarea/' + id} ><button>Eliminar</button> </a>
                <a href={'/moduloProyectos/editTarea/'+ id}><button>Editar</button></a>
                <a href={'/moduloProyectos/agregarSubtarea/'+ id}><button>Crear subtarea</button> </a>
                <a href={'/moduloProyectos/tareaSubtareaView/'+ id}><button>Ver subtareas</button> </a>
            </div>

        </div>

        </>
   
   
   )
  }

