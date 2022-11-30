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

            <div className={styles.camposForm}>

                <div>Descripción:</div>
                <div>Id: 00-00</div>
                <div>Estado: En desarrollo</div>
                <div>Prioridad:</div>
                <div>Responsable:</div>
            </div>

            <div className={styles.camposForm}>
                <div>Fecha de inicio: XX/XX/XXXX</div>
                <div>Fecha de fin estimada: XX/XX/XXXX</div>
                <div>Fecha de fin real: XX/XX/XXXX</div>
                <div>Horas insumidas: 0</div>
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

