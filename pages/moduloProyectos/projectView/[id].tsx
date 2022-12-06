import styles from '../../../styles/proyectos.module.css'
import Head_ from '../../head'
import Header from '../../header'
import { useRouter } from 'next/router'
import ColumnaTarea from '../columnaTareas';

/*puesto aca solo para tener bien las rutas. El proyecto deberia tener un id*/
/*var id_proyecto = 1;*/

export default function ProyectoView() {

    const router = useRouter();
    const {id} = router.query;

    return (

    <>
    <Head_ nombre='Proyecto'></Head_>

    <Header></Header>
      
    <div className={styles.proyectoView}>
        <h1 className={styles.tituloEdit}>PROYECTO 'NOMBRE'</h1>
        <h3 className={styles.subtituloEdit}>{id}</h3>
        <div className={styles.descripcionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies vitae nisl eget aliquam. Suspendisse nibh lacus, ultricies ac felis ac, hendrerit sollicitudin massa. Ut eget molestie eros, dapibus condimentum leo. Suspendisse non lorem tortor.</div>
        <div className={styles.contenedorPadre}>
            <div className={styles.contenedorInfo}>

                <div>
                    <h3 className={styles.tituloInfo}>Fecha de inicio</h3>
                    <h2 className={styles.info}>01/01/2022</h2>
                    <h3 className={styles.tituloInfo}>Fecha estimada de fin</h3>
                    <h2 className={styles.info}>01/01/2022</h2>
                </div>
                <div>
                    <h3 className={styles.tituloInfo}>Estado</h3>
                    <h2 className={styles.info}>Pendiente</h2>
                    <h3 className={styles.tituloInfo}>Horas reales</h3>
                    <h2 className={styles.info}>1000</h2>  
                </div>
                <div>
                    <h3 className={styles.tituloInfo}>Project Manager (PM)</h3>
                    <h2 className={styles.info}>Juan Perez</h2>
                    <h3 className={styles.tituloInfo}>ID cliente</h3>
                    <h2 className={styles.info}>57</h2>
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