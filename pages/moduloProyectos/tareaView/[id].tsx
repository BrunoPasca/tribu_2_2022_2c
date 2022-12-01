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
            <h1 className={styles.tituloProyecto}>TAREA XXXX</h1>   
            <div className={styles.contenedorPadre}>
                <div className={styles.infoProyecto}>
                    <div className={styles.tituloInfo}>
                        <div>Id</div>
                        <div>Descripción</div>
                        <div>Estado</div>
                        <div>Prioridad</div>
                        <div>Responsable</div>
                    </div>
                    <div className={styles.info}>
                        <div>00-00</div>
                        <div>Una descripción</div>
                        <div>A</div>
                        <div>Alta</div>
                        <div>Juan</div>
                    </div>
                </div>
                <div className={styles.infoProyecto}>
                    <div className={styles.tituloInfo}>
                        <div>Fecha de inicio</div>
                        <div>Fecha de fin estimada</div>
                        <div>Fecha de fin real</div>
                        <div>Horas insumidas</div>
                    </div>
                    <div className={styles.info}>
                        <div>XX/XX/XXXX</div>
                        <div>XX/XX/XXXX</div>
                        <div>XX/XX/XXXX</div>
                        <div>0</div>
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

