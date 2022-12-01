import styles from '../../styles/proyectos.module.css'
import Head_ from '../head'
import Header from '../header'

/*puesto aca solo para tener bien las rutas. El proyecto deberia tener un id*/
var id_proyecto = 1;

export default function ProyectoView() {
    return (

        <>
        <Head_ nombre='Proyecto'></Head_>

        <Header></Header>
        
        <div className={styles.proyectoView}>
            <h1 className={styles.tituloProyecto}>PROYECTO XXXX</h1>  
            <div className={styles.contenedorPadre}>
                <div className={styles.infoProyecto}>
                    <div className={styles.tituloInfo}>
                        <div>Id:</div>
                        <div>Estado:</div>
                        <div>Fecha de inicio real:</div>
                        <div>Fecha de fin estimada:</div>
                        <div>Fecha de fin real:</div>
                        <div>Horas insumidas:</div>
                        <div>Tipo de proyecto:</div>
                    </div>
                    <div className={styles.info}>
                        <div>00-00</div>
                        <div>En desarrollo</div>
                        <div>XX/XX/XXXX</div>
                        <div>XX/XX/XXXX</div>
                        <div>XX/XX/XXXX</div>
                        <div>0</div>
                        <div>XXXXX</div>
                    </div>
                </div>

                <div className={styles.infoProyecto}>
                    <div className={styles.tituloInfo}>
                        <div>Nombre cliente:</div>
                        <div>CUIT cliente:</div>
                        <div>Tipo de CLIENTE:</div>
                        <div>Contacto:</div><br />
                        <div>Nombre SPONSOR:</div>
                        <div>CUIT SPONSOR:</div>
                        <div>Tipo de SPONSOR:</div>
                        <div>Contacto SPONSOR:</div>
                    </div>
                    <div className={styles.info}>
                        <div>XXXXXXXXX</div>
                        <div>00-00000000-0</div>
                        <div>XXXXXX</div>
                        <div>XXXXXX@gmail.com</div><br />
                        <div>XXXXXXXXX</div>
                        <div>00-00000000-0</div>
                        <div>XXXXXX</div>
                        <div>XXXXXX@gmail.com</div>
                    </div>
                </div>
            </div>

            <div className={styles.botonesView}>
                <a href = {"/moduloProyectos/eliminarProyecto/"+ id_proyecto} ><button>Eliminar</button> </a>
                <a href={'/moduloProyectos/editProject/' + id_proyecto}><button>Editar</button></a>
                <a href="/moduloProyectos/tareas"><button>Ver tareas</button></a>
            </div>

        </div>
        </>  
   )
  }