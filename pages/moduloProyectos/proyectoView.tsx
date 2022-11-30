import styles from '../../styles/proyectos.module.css'
import Head_ from '../head'
import Header from '../header'


export default function ProyectoView() {
    return (

        <>
        <Head_ nombre='Proyecto'></Head_>

        <Header></Header>
        
        <div className={styles.proyectoView}>
        
            <h1 className={styles.tituloProyecto}>PROYECTO XXXX</h1>
            
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
                <a href = "/moduloProyectos/eliminarProyecto/1" ><button>Eliminar</button> </a>
                <a href='/moduloProyectos/editProject/1'><button>Editar</button></a>
                <a href="/moduloProyectos/tareas"><button>Ver tareas</button></a>
            </div>

        </div>

        </>
   
   
   )
  }