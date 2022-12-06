import styles from '../../styles/proyectos.module.css'

export default function tareaCard({id_proyecto,id_tarea, desc, estado, fechaEstFin}: {id_tarea:Number, id_proyecto: number, desc: string, estado: string, fechaEstFin: string}) {

    return(
        <a href={"/moduloProyectos/tareaView/"+id_tarea}>
        <div className={styles.proyectoCard}>
            <div className={styles.tituloCard}>{id_tarea} - {id_proyecto}</div>
            <div className={styles.textoCard}>{desc}</div>
            <div className={styles.textoCard}>{estado}</div>
        </div>
        </a>
    );
  }