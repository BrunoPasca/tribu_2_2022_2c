import styles from '../../styles/proyectos.module.css'
import Header from '../header';
import ProyectoCard from './proyectoCard';
import Head_ from '../head';
import { useEffect, useState } from 'react';



    /*intento de conectar con el back*/
    interface ProyectosProperties{
      id: number,
      nombre:string ,
      fecha_inicio:string,
      fecha_fin:string,
      fecha_fin_estimado: string,
      estado:string,
      prioridad:string,
      costo_acumulado:number,
      horas_estimadas:number,
      horas_reales:number,
      tipo: string,
    }





export default function Soporte() {

  const [proyectos, setProyectos]: [Array<ProyectosProperties> ,any] = useState([])
 
 
 useEffect(() => {
   fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos")
     .then((res) => res.json())
     .then((data) => {
       setProyectos(data)
 
     })
 }, [])
 /*
 <div className={styles.navbarDer}>
           <input placeholder='Buscar...'></input>
           <button className={styles.botonBuscar}>Buscar</button>
         </div>
 */
   return(<div className={styles.container}>
 
      <Head_ nombre='Proyectos'></Head_>
    
       <Header></Header>
 
       <div className={styles.navbar}>
         <div className={styles.navbarIzqP}>
           <h1>PROYECTOS</h1>
         </div>
         
       </div>
 
       <div className={styles.grilla}>
         {(proyectos).map((proyecto) => (
           <div key={proyecto.id}>
             <ProyectoCard nombre={proyecto.nombre} id={proyecto.id} estado={proyecto.estado} fechaInicio={proyecto.fecha_inicio} fechaFinEstimado={proyecto.fecha_fin_estimado}></ProyectoCard>
           </div>
         ))}
       </div>
        
       <main className={styles.colorFondo}>
         <div className={styles.contenedorBoton}>
           <a href='/moduloProyectos/crearProyecto'><button>Agregar nuevo proyecto</button></a>
         </div>
 
       </main>
        <footer className={styles.footer}>
 
       </footer>
     </div>
   );

  }