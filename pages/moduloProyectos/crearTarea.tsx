import Head_ from '../head'
import Header from '../header'
import styles from '../../styles/proyectos.module.css'
import Script from 'next/script'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
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


export default function crearTarea(){
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


  const [recursos, setRecursos]: [Array<RecursoProperties> ,any] = useState([])

  useEffect(() => {
    fetch("https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos")
      .then((res) => res.json())
      .then((data) => {
        setRecursos(data)
      })
  }, [])




  const {register, handleSubmit} = useForm<TareasProperties>();

  const onSubmit = handleSubmit((data) =>{
    console.log(JSON.stringify(data))
    fetch("https://aninfo2c222back-production.up.railway.app/api/tareas", {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        })
    alert("La tarea se creo correctamente")
})


    return (
        <>
        <Head_ nombre='Nueva tarea'></Head_>
        <Header></Header>
        <main className={styles.main}>
        <div className={styles.proyectoView}>
                <h1 className={styles.tituloEdit}>Crear tarea {id}</h1>
                <div className={styles.contenedorPadre}>
                    <div className={styles.infoProyecto}>
                        <div className={styles.tituloInfo}>
                            <div>Id del proyecto</div>
                            <div>Estado</div>
                            <div>Descripción</div>
                            <div>Horas estimadas</div>
                            <div>Prioridad</div>
                            <div>Fecha inicio</div>
                            <div>Legajo del recurso</div>
                        </div>
                        <div className={styles.info} >
                            <form  id = "form_id" onSubmit = {onSubmit}>
                            <select id = "id proyecto" {...register("id_proyecto")}>
                            {(proyectos.map( (proyecto) =>
                                <option value = {proyecto?.id}> {proyecto?.id} </option>))}
                            </select>
                            <div>
                            <select id = "estado_tarea" {...register("estado")}>
                                <option value="Abierta">Abierta</option>
                                <option value="En análisis">En análisis</option>
                                <option value="En progreso">En progreso</option>
                                <option value="Suspendida">Suspendida</option>
                                <option value="Completada">Completada</option>
                            </select>
                            </div>
                                <input type="text" id="descripcion" {...register("descripcion")} placeholder="Descripcion" size={50}></input>
                                <input type="number" id="horasEstimadas" {...register("horas_estimadas")} min="0"></input>
                                <div>
                                    <select id="prioridad_tarea" {...register("prioridad")}>
                                        <option  value = "Baja"> Baja</option>
                                        <option  value = "Media"> Media</option>
                                        <option  value = "Alta">Alta</option>
                                    </select>
                                </div>
                            <div>
                                <input type = "date" id="fecha_inicio" {...register("fecha_inicio")}></input>
                            </div>

                            <select id = "legajo_id" {...register("legajo_recurso")}>
                            {(recursos.map( (recurso) =>
                                <option value = {recurso?.legajo}> {recurso?.nombre} - {recurso?.apellido} </option>))}
                            </select>
                            

                            </form>
                        </div>
                    </div>
                </div>

        <div className={styles.botonesView}>
        <a href="/moduloProyectos/tareas"><button>Cancelar</button></a>
        <a href = "/moduloProyectos/tareas">
        <button type="submit" form="form_id" >Crear</button>
        </a>
        </div>
        </div>
        </main>
        </>
    )
}

