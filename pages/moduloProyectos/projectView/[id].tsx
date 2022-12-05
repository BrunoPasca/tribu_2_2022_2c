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
    fecha_fin:string,
    estado:string,
    prioridad:string,
    costo_acumulado:number,
    horas_estimadas:number,
    horas_reales:number,
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
                        <div>Fecha de fin real</div>
                        <div>Estado</div>
                    </div>
                    <div className={styles.info}>
                        <div>{id}</div>
                        <div>En desarrollo</div>
                        <div>XX/XX/XXXX</div>
                        <div>XX/XX/XXXX</div>
                        <div>0</div>
                    </div>
                </div>

                <div className={styles.infoProyecto}>
                    <div className={styles.tituloInfo}>
                        <div>Prioridad</div>
                        <div>Costo acumulado</div>
                        <div>Horas estimadas</div>
                        <div>Horas reales</div>
                    </div>
                    <div className={styles.info}>
                        <div>XXXXXXXXX</div>
                        <div>00-00000000-0</div>
                        <div>XXXXXX</div>
                        <div>XXXXXX@gmail.com</div>
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