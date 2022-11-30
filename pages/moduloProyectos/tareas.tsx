import styles from '../../styles/proyectos.module.css'
import Header from '../header';
import Head_ from '../head';
import ColumnaTarea from './columnaTareas';
import React from 'react';

export default function Tarea() {

  const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
	React.useEffect(() => {
		setInitialRenderComplete(true);
	}, []);

	if (!initialRenderComplete) {
		return null;
	} else {

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
            <div>
              <h2 className={styles.grillaEncabezado}>A</h2>  
              <ColumnaTarea estadoFiltro='A'></ColumnaTarea>  
            </div>
            <div>
            <h2 className={styles.grillaEncabezado}>B</h2>  
              <ColumnaTarea estadoFiltro='B'></ColumnaTarea>
            </div>
            <div>
            <h2 className={styles.grillaEncabezado}>C</h2>  
              <ColumnaTarea estadoFiltro='C'></ColumnaTarea>
            </div>
            <div>
            <h2 className={styles.grillaEncabezado}>D</h2>  
              <ColumnaTarea estadoFiltro='D'></ColumnaTarea>
            </div>
            <div>
            <h2 className={styles.grillaEncabezado}>E</h2>  
              <ColumnaTarea estadoFiltro='E'></ColumnaTarea>
            </div>
          </div>
        
        <main className={styles.colorFondo}>
          <div className={styles.contenedorBoton}>
            <a href='/moduloProyectos/crearTarea'><button>Agregar nueva tarea</button></a>
          </div>

        </main>
  
        <footer className={styles.footer}>

        </footer>
      </div>
    );
  }
}