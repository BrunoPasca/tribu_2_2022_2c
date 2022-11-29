import styles from '../../styles/proyectos.module.css'
import Header from '../header';
import ProyectoCard from './proyectoCard';
import Head_ from '../head';

//proyecto de prueba
const proyecto = {
        nombre: "Gama",
        id: 1,
        cliente: "Microsoft",
        estado: "Completado", 
        fechaInicio: "01/01/2022", 
        pm: "Juan"
    }


export default function Soporte() {

    return(<div className={styles.container}>

       <Head_ nombre='Proyectos'></Head_>
      
        <Header></Header>

        <div className={styles.navbar}>
          <div className={styles.navbarIzq}> 
            <h1>Proyectos</h1>
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

        {/*<div className={styles.tituloPrincipal}>
            <div><p>Proyectos</p></div>
            <div>
                <form className={styles.barraBusqueda}>
                  <input id="buscar" type="text" placeholder="Buscar..."/>
                </form>
            </div>
    </div>*/}

        <div className={styles.grilla}>
            <div key={proyecto.id}>
              <ProyectoCard nombre={proyecto.nombre} id={proyecto.id} cliente={proyecto.cliente} estado={proyecto.estado} fechaInicio={proyecto.fechaInicio} pm={proyecto.pm}></ProyectoCard>
            </div>
        </div>
        
        <main className={styles.main}>
   
            <a href='/moduloProyectos/crearProyecto'><button>Agregar nuevo proyecto</button></a>

        </main>
  
        <footer className={styles.footer}>

        </footer>
      </div>
    );
  }