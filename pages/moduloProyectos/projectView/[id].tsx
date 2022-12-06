import styles from '../../../styles/proyectos.module.css'
import Head_ from '../../head'
import Header from '../../header'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

/*puesto aca solo para tener bien las rutas. El proyecto deberia tener un id*/
/*var id_proyecto = 1;*/


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
  


export default function ProyectoView() {

    const [proyectos, setProyectos]: [Array<ProyectosProperties> ,any] = useState([])

    useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos")
          .then((res) => res.json())
          .then((data) => {
            setProyectos(data)
    
          })
      }, [])


    const router = useRouter();
    const {id} = router.query;

    const target_proyect = proyectos.filter(proyect => {
        return proyect.id === Number(id);
    } );
    return (

        <>
        <Head_ nombre='Proyecto'></Head_>

        <Header></Header>
        
        <div className={styles.proyectoView}>
            <h1 className={styles.tituloEdit}>PROYECTO {id}</h1>
            <div className={styles.contenedorPadre}>
                <div className={styles.infoProyecto}>
                    <div className={styles.tituloInfo}>
                        <div>Id</div>
                        <div>Nombre</div>
                        <div>Fecha de inicio real</div>
                        <div>Fecha de fin estimada</div>
                        <div>Estado</div>
                    </div>
                    <div className={styles.info}>
                        <div>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.id} </div>))}</div>

                        <div>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.nombre} </div>))}</div>

                        <div>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.fecha_inicio} </div>))}</div>

                        <div>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.fecha_fin_estimado} </div>))}</div>

                        <div>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.estado} </div>))}</div> 
                    </div>
                </div>

                <div className={styles.infoProyecto}>
                    <div className={styles.tituloInfo}>
                        <div>Horas reales</div>
                        <div>Descripcion</div>
                        <div>Project manager</div>
                        <div>ID cliente</div>
                    </div>
                    <div className={styles.info}>
                    <div>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.horas_reales} </div>))}</div>

                        <div>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.descripción} </div>))}</div>

                        <div>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.project_manager} </div>))}</div>

                        <div>{(proyectos.filter(elemento => elemento.id === Number(id)).map( (proyecto) =>
                        <div>{proyecto?.id_cliente} </div>))}</div>
                    </div>
                </div>
            </div>

            <div className={styles.botonesView}>
                <a href = {"/moduloProyectos/eliminarProyecto/"+ id} ><button>Eliminar</button> </a>
                <a href={'/moduloProyectos/editProject/' + id}><button>Editar</button></a>
                <a href="/moduloProyectos/tareas"><button>Ver tareas</button></a>
            </div>

        </div>

        </>
   
   
   )
  }
/*
  <div>{id}</div>
  <div>En desarrollo</div>
  <div>XX/XX/XXXX</div>
  <div>XX/XX/XXXX</div>
  <div>0</div>*/