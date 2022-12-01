import styles from '../../../styles/reportes.module.css'

export default function tareaCard(props : any) {

    return(
        <div className={styles.reporteCard}>
            <div className={styles.tituloCard}>{props.fecha}</div>
            <div className={styles.severidadCard}>ID Tarea: {props.id_tarea}</div>
            <div className={styles.severidadCard}>Horas: {props.cant_horas}</div>
        </div>
    );
  }