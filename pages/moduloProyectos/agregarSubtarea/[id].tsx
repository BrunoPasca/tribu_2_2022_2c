import Head_ from '../../head'
import Header from '../../header'
import styles from '../../../styles/proyectos.module.css'
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
    id_padre:number,
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
    Nombre: string,
    Apellido: string,
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
    fetch("https://aninfo2c222back-production.up.railway.app/api/recursos_ext")
      .then((res) => res.json())
      .then((data) => {
        setRecursos(data)
      })
  }, [])




  const {register, handleSubmit} = useForm<TareasProperties>();

  const onSubmit = handleSubmit((data) =>{
    console.log(JSON.stringify(data))
    fetch("https://aninfo2c222back-production.up.railway.app/api/tareas/"+id+"/subtareas", {
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
          <div className={styles.containerEspecial}>
            <form  id = "form_id" onSubmit = {onSubmit}>
                <div className={styles.camposForm}>
                  <h1 className={styles.tituloForm}>Crear subtarea de tarea {id}</h1>
                  <div>
                    <label>ID proyecto</label><br />
                    <select id = "id proyecto" {...register("id_proyecto")}>
                    {(proyectos.map( (proyecto) =>
                      <option value = {proyecto?.id}> {proyecto?.id} </option>))}
                    </select>
                    <div>
                      <input type= "hidden" id = "id_padre" {...register("id_padre")} value = {id}></input>
                      <label>Estado</label><br />
                      <select id = "estado_tarea" {...register("estado")}>
                        <option value="Abierta">Abierta</option>
                        <option value="En análisis">En análisis</option>
                        <option value="En progreso">En progreso</option>
                        <option value="Suspendida">Suspendida</option>
                        <option value="Completada">Completada</option>
                      </select>
                    </div>
                    <label>Descripción</label><br />
                    <input type="text" id="descripcion" {...register("descripcion")} placeholder="Descripcion" size={50}></input><br />
                    <label>Horas estimadas</label><br />
                    <input type="number" id="horasEstimadas" {...register("horas_estimadas")} min="0"></input>
                    <div>
                      <label>Prioridad</label><br />
                      <select id="prioridad_tarea" {...register("prioridad")}>
                        <option  value = "Baja"> Baja</option>
                        <option  value = "Media"> Media</option>
                        <option  value = "Alta">Alta</option>
                      </select>
                    </div>
                    <div>
                      <label>Fecha de inicio</label><br />
                      <input type = "date" id="fecha_inicio" {...register("fecha_inicio")}></input>
                    </div>
                    <label>Recurso asignado</label><br />
                    <select id = "legajo_id" {...register("legajo_recurso")}>{(recursos.map( (recurso) =>
                      <option value = {recurso?.legajo}> {recurso?.Nombre}  {recurso?.Apellido} </option>))}
                    </select>
                  </div>

                  <div className={styles.botonesView}>
                    <a href={"/moduloProyectos/tareaView/"+id}><button type="reset">Cancelar</button></a>
                    <a href = "/moduloProyectos/tareas">
                    <button type="submit" form="form_id" >Crear</button>
                    </a>
                  </div>
              </div>
            </form>
          </div>
        </main>
        </>
    )
}

