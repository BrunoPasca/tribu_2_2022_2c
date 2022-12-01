import styles from '../../../styles/proyectos.module.css'
import Head_ from '../../head'
import Header from '../../header'
import { useRouter } from 'next/router'

/*hardocdeada nomas para mostrar. Tiene que tener un id dinamico la tarea*/
const tarea_id = 1;

export default function TareaView() {
    const router = useRouter();
    const {id} = router.query;
    return (

        
        <>
        <Head_ nombre='Tarea'></Head_>

        <Header></Header>
        
        <div className={styles.proyectoView}>
            <h1 className={styles.tituloEdit}>TAREA {id}</h1>   
            <div className={styles.contenedorPadre}>
                <div className={styles.infoProyecto}>
                    <div className={styles.tituloInfo}>
                        <div>Id</div>
                        <div>Id del proyecto</div>
                        <div>Estado</div>
                        <div>Descripción</div>
                        <div>Horas estimadas</div>
                        <div>Horas totales</div>
                    </div>
                    <div className={styles.info}>
                        <div>{id}</div>
                        <div>00-00</div>
                        <div>A</div>
                        <div>Descripción</div>
                        <div>XXXXX</div>
                        <div>XXXXX</div>
                    </div>
                </div> 
            </div>

            <div className={styles.botonesView}>
                <a href={'/moduloProyectos/eliminarTarea/' + id} ><button>Eliminar</button> </a>
                <a href={'/moduloProyectos/editTarea/'+ id}><button>Editar</button></a>
            </div>

        </div>

        </>
   
   
   )
  }

