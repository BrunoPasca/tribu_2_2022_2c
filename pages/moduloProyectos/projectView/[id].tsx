import styles from '../../../styles/proyectos.module.css'
import Head_ from '../../head'
import Header from '../../header'
import { useRouter } from 'next/router'

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
        
            <h1 className={styles.tituloProyecto}>PROYECTO {id}</h1>
            
        <div className={styles.contenedorPadre}>

            <div className={styles.camposForm}>

                <div>Id: 00-00</div>
                <div>Estado: En desarrollo</div>
            
                <div>Fecha de inicio real: XX/XX/XXXX</div>
                <div>Fecha de fin estimada: XX/XX/XXXX</div>
                <div>Horas insumidas: 0</div>
                <div>Tipo de proyecto: XXXXX</div>
            </div>

            <div className={styles.camposForm}>
                <div>Nombre CLIENTE: XXXXXXXXX</div>
                <div>CUIT CLIENTE: 00-00000000-0</div>
                <div>Tipo de CLIENTE: XXXXXX</div>
                <div>Contacto: XXXXXX@gmail.com</div><br></br>
                <div>Nombre SPONSOR: XXXXXXXXX</div>
                <div>CUIT SPONSOR: 00-00000000-0</div>
                <div>Tipo de SPONSOR: XXXXXX</div>
                <div>Contacto: XXXXXX@gmail.com</div>
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