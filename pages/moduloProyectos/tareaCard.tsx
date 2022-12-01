import styles from '../../styles/proyectos.module.css'

export default function tareaCard({nombre, id, desc, estado, fechaEstFin}: {nombre:string, id: number, desc: string, estado: string, fechaEstFin: string}) {

    return(
        <a href={"/moduloProyectos/tareaView/"+id}>
        <div className={styles.proyectoCard}>
            <div className={styles.tituloCard}>{id} - {nombre}</div>
            <div className={styles.textoCard}>{desc}</div>
            <div className={styles.textoCard}>{estado}</div>
        </div>
        </a>
    );
  }