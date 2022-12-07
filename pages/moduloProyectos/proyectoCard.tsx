import styles from '../../styles/proyectos.module.css'

export default function proyectoCard({nombre, id, estado, fechaInicio, fechaFinEstimado}: {nombre:string, id: number, estado: string, fechaInicio: string, fechaFinEstimado: string}) {

    return(
        <a href={"/moduloProyectos/projectView/" + id}>
        <div className={styles.proyectoCard}>
            <div className={styles.tituloCard}>{id} - {nombre}</div>
            <div className={styles.textoCard}>{estado}</div>
            <div className={styles.textoCard}>{fechaInicio} - {fechaFinEstimado}</div>
        </div>
        </a>
    );
  }