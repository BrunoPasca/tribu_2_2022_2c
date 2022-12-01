import styles from '../../../styles/reportes.module.css'

export default function tareaCard(props : any) {

    let fechaSql= props.fecha

    const fecha = new Date(fechaSql); 

    return(
        <div className={styles.reporteCard}>
            <div className={styles.tituloCard}>{fecha.toLocaleDateString()}</div>
            <div className={styles.severidadCard}>ID Tarea: {props.id_tarea}</div>
            <div className={styles.severidadCard}>Horas: {props.cant_horas}</div>
        </div>
    );
  }