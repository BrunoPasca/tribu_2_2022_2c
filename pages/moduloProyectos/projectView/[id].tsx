import styles from '../../../styles/proyectos.module.css'
import Head_ from '../../head'
import Header from '../../header'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

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
    tipo: string,
}


  


export default function ProyectoView() {

    const [proyectos, setProyectos]: [Array<ProyectosProperties> ,any] = useState([])
    const {register, handleSubmit} = useForm<ProyectosProperties>()
    useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos")
          .then((res) => res.json())
          .then((data) => {
            setProyectos(data)
    
          })
      }, [])


    const router = useRouter();
    const {id} = router.query;

    const onSubmit = handleSubmit((data) =>{
        console.log(JSON.stringify(data))
        fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos/"+id, {
              method: 'PUT', // or 'PUT'
              body: JSON.stringify(data), // data can be `string` or {object}!
              headers:{
                'Content-Type': 'application/json'
              }
            })
        alert("El proyecto se finalizo")
    })
    return (

    <>
    <Head_ nombre='Proyecto'></Head_>

        <Header></Header>
        
        <div className={styles.proyectoView}>
            <h1 className={styles.tituloEdit}>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.nombre} </div>))}</h1>
            <div className={styles.subtituloEdit}>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.id} </div>))}</div>
            <div className={styles.subtituloEdit}>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.tipo} </div>))}</div>
            <div className={styles.descripcionText}>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.descripción} </div>))}</div>
            <div className={styles.contenedorPadre}>
                <div className={styles.contenedorInfo}>

                    <div>
                        <h3 className={styles.tituloInfo}>Fecha de inicio</h3>
                        <h2 className={styles.info}>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.fecha_inicio} </div>))}</h2>
                        <h3 className={styles.tituloInfo}>Fecha estimada de fin</h3>
                        <h2 className={styles.info}>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.fecha_fin_estimado} </div>))}</h2>
                    </div>
                    <div>
                        <h3 className={styles.tituloInfo}>Estado</h3>
                        <h2 className={styles.info}>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.estado} </div>))}</h2>
                        <h3 className={styles.tituloInfo}>Horas reales</h3>
                        <h2 className={styles.info}>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.horas_reales} </div>))}</h2>  
                    </div>
                    <div>
                        <h3 className={styles.tituloInfo}>Project Manager (PM)</h3>
                        <h2 className={styles.info}>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.project_manager} </div>))}</h2>
                        <h3 className={styles.tituloInfo}>ID cliente</h3>
                        <h2 className={styles.info}>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.id_cliente} </div>))}</h2>
                    </div>
                </div>
            </div>
            <form onSubmit = {onSubmit} id="Id escondida">
            <input type="hidden" id="estado_fin" {...register("estado")} value="Finalizado"></input>
            </form>
            <div className={styles.botonesView}>
                <a href = {"/moduloProyectos/eliminarProyecto/"+ id}><button>Eliminar</button> </a>
                <a href={'/moduloProyectos/editProject/' + id}><button>Editar</button></a>
                <a href={'/moduloProyectos/proyectTareaView/' + id}><button>Ver tareas</button></a>
                <a href={'/moduloProyectos/proyectTareaView/' + id}> <button form="Id escondida" >Marcar como completado</button></a>
            </div>

        </div>
        </>
   
   
   )
  }
