import Head_ from '../../head'
import Header from '../../header'
import styles from '../../../styles/proyectos.module.css'
import sup_styles from '../../../styles/soporte.module.css'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

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
  }

  interface ProyectosProperties{
    id: number,
    nombre:string ,
    fecha_inicio:string,
    fecha_fin_estimado:string,
    estado:string,
    horas_reales:number,
    descripción:string,
    project_manager:string,
    id_cliente:number,
  }


  interface RecursoProperties{
    legajo: number,
    nombre: string,
    apellido: string,
  }

export default function editTarea() {
    const router = useRouter();
    const {id} = router.query;

    const [tareas, setTareas]: [Array<TareasProperties> ,any] = useState([])

    const [proyectos, setProyectos]: [Array<ProyectosProperties> ,any] = useState([])

    useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/tareas")
      .then((res) => res.json())
      .then((data) => {
        setTareas(data)
      })
  }, [])


  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos")
      .then((res) => res.json())
      .then((data) => {
        setProyectos(data)
      })
  }, [])

  const {register, handleSubmit} = useForm<TareasProperties>();



const [recursos, setRecursos]: [Array<RecursoProperties> ,any] = useState([])

useEffect(() => {
  fetch("https://aninfo2c222back-production.up.railway.app/api/recursos_ext")
    .then((res) => res.json())
    .then((data) => {
      setRecursos(data)
    })
}, [])


  const onSubmit = handleSubmit((data) =>{
    console.log(JSON.stringify(data))
    fetch("https://aninfo2c222back-production.up.railway.app/api/tareas/" +id , {
          method: 'PUT', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        })
    alert("La tarea se edito correctamente")
})



    

    return (
        <>
            <Head_ nombre='Editar tarea'></Head_>
            <Header></Header>


            <div className={styles.proyectoView}>
              <form onSubmit = {onSubmit} id = "form_id">
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
                <input type="text" id="descripcion" {...register("descripcion")} placeholder="Descripcion" size={50}></input>
            </h3>))}
            </div>
            <div className={styles.contenedorPadre}>
                <div className={styles.contenedorTarea}>
                    <div>
                    <h3 className={styles.tituloInfo}>ID proyecto</h3>
                    {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}><>
                            <select id = "id proyecto" {...register("id_proyecto")}>
                            {(proyectos.map( (proyecto) =>
                                <option value = {proyecto?.id}> {proyecto?.id} </option>))}
                            </select></>
                        </h2>))}
                        <h3 className={styles.tituloInfo}>Legajo recurso</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}><>
                            <select id = "legajo_id" {...register("legajo_recurso")}>
                                {(recursos.map( (recurso) =>
                                <option value = {recurso?.legajo}> {recurso?.nombre} - {recurso?.apellido} </option>))}
                            </select></>
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
                            <input type = "date" id="fecha_inicio" {...register("fecha_inicio")}></input>
                        </h2>))}
                        <h3 className={styles.tituloInfo}>Fecha estimada de fin</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}>
                            <input type = "date" id="fecha_fin" {...register("fecha_fin")}></input>
                        </h2>))}
                        <h3 className={styles.tituloInfo}>Estado</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}>
                            <select id = "estado_tarea" {...register("estado")}>
                                <option value="Abierta">Abierta</option>
                                <option value="En análisis">En análisis</option>
                                <option value="En progreso">En progreso</option>
                                <option value="Suspendida">Suspendida</option>
                                <option value="Completada">Completada</option>
                            </select>
                        </h2>))}
                         
                    </div>
                    <div>
                        <h3 className={styles.tituloInfo}>Prioridad</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}>
                            <select id="prioridad_tarea" {...register("prioridad")}>
                                    <option  value = "Baja"> Baja</option>
                                    <option  value = "Media"> Media</option>
                                    <option  value = "Alta">Alta</option>
                            </select>
                        </h2>))}
                        <h3 className={styles.tituloInfo}>Horas estimadas</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}><>
                            <input type="number" id="horasEstimadas" {...register("horas_estimadas")} min="0"></input></>
                        </h2>))}
                        <h3 className={styles.tituloInfo}>Horas reales</h3>
                        {(tareas.filter(elemento => elemento.id === Number(id)).map( (tarea) =>
                        <h2 className={styles.info}><>
                            {tarea?.horas_reales}</>
                        </h2>))}
                    </div>
                </div>
            </div>
            </form>

            <div className={styles.botonesView}>
              <a href={'/moduloProyectos/tareaView/'+id}><button>Cancelar</button></a>
              <a href = "/moduloProyectos/tareas">
              <button type="submit" form="form_id" >Editar</button></a>
            </div>

        </div>
        </>
    )
}
