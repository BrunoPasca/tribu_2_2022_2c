import styles from '../../styles/proyectos.module.css'
import Header from '../header';
import TareaCard from './tareaCard';
import Head_ from '../head';

//tarea de prueba
const tarea = {
        nombre: "Desarrollo",
        id: 1,
        desc: "Desarrollar",
        estado: "Completada", 
        fechaEstFin: "01/01/2023", 
    }


export default function Tarea() {

    return(<div className={styles.container}>

       <Head_ nombre='Tareas'></Head_>
      
        <Header></Header>

        <div className={styles.navbar}>
          <div className={styles.navbarIzq}> 
            <h1>Tareas del proyecto XXXX</h1>
          </div>
          <div className={styles.navbarDer}> 
            <input placeholder='ingrese un nombre'></input>
            <select>
              <option>Creador</option>
              <option>Resolutor</option>
              <option>Responsable</option>
              <option>Cliente</option>
            </select>

            <button>Filtrar</button>

          </div>
        </div>

        <div className={styles.grilla}>
            <div key={tarea.id}>
              <TareaCard nombre={tarea.nombre} id={tarea.id} desc={tarea.desc} estado={tarea.estado} fechaEstFin={tarea.fechaEstFin}></TareaCard>
            </div>
        </div>
        
        <main className={styles.main}>
          <div className={styles.contenedorBoton}>
            <a href='/moduloProyectos/crearTarea'><button>Agregar nueva tarea</button></a>
          </div>

        </main>
  
        <footer className={styles.footer}>

        </footer>
      </div>
    );
  }