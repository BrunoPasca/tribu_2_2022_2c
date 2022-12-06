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
            <h1 className={styles.tituloEdit}>TAREA 'NOMBRE'</h1>
            <h3 className={styles.subtituloEdit}>{id}</h3>
            <div className={styles.descripcionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies vitae nisl eget aliquam. Suspendisse nibh lacus, ultricies ac felis ac, hendrerit sollicitudin massa. Ut eget molestie eros, dapibus condimentum leo. Suspendisse non lorem tortor.</div>
            <div className={styles.contenedorPadre}>
                <div className={styles.contenedorTarea}>
                    <div>
                        <h3 className={styles.tituloInfo}>ID proyecto</h3>
                        <h2 className={styles.info}>00</h2>
                        <h3 className={styles.tituloInfo}>ID ticket</h3>
                        <h2 className={styles.info}>00</h2>
                        <h3 className={styles.tituloInfo}>Legajo recurso</h3>
                        <h2 className={styles.info}>00</h2>
                        
                    </div>
                    <div>
                        <h3 className={styles.tituloInfo}>Fecha de inicio</h3>
                        <h2 className={styles.info}>01/01/2022</h2>
                        <h3 className={styles.tituloInfo}>Fecha estimada de fin</h3>
                        <h2 className={styles.info}>01/01/2022</h2>
                        <h3 className={styles.tituloInfo}>Estado</h3>
                        <h2 className={styles.info}>En desarrollo</h2>
                         
                    </div>
                    <div>
                        <h3 className={styles.tituloInfo}>Prioridad</h3>
                        <h2 className={styles.info}>Media</h2> 
                        <h3 className={styles.tituloInfo}>Horas estimadas</h3>
                        <h2 className={styles.info}>1000</h2>
                        <h3 className={styles.tituloInfo}>Horas reales</h3>
                        <h2 className={styles.info}>1000</h2>
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

