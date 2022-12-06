import styles from '../../styles/proyectos.module.css'

export default function proyectoCard({nombre, id, id_cliente, estado, fechaInicio, pm}: {nombre:string, id: number, id_cliente: number, estado: string, fechaInicio: string, pm: string}) {

    return(
        <a href={"/moduloProyectos/projectView/" + id}>
        <div className={styles.proyectoCard}>
            <div className={styles.tituloCard}>{id} - {nombre}</div>
            <div className={styles.textoCard}>{estado}</div>
            <div className={styles.textoCard}>{fechaInicio}</div>
        </div>
        </a>
    );
  }