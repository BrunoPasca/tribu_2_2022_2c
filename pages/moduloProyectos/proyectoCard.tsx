import styles from '../../styles/proyectos.module.css'

export default function proyectoCard({nombre, id, cliente, estado, fechaInicio, pm}: {nombre:string, id: number, cliente: string, estado: string, fechaInicio: string, pm: string}) {

    return(
        <a href="/moduloProyectos/proyectoView">
        <div className={styles.proyectoCard}>
            <div className={styles.tituloCard}>{nombre}</div>
            <div className={styles.textoCard}>{id}</div>
            <div className={styles.textoCard}>{cliente}</div>
            <div className={styles.textoCard}>{estado}</div>
            <div className={styles.textoCard}>{fechaInicio}</div>
            <div className={styles.textoCard}>{pm}</div>
        </div>
        </a>
    );
  }