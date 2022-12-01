import styles from '../../../styles/reportes.module.css'

export default function faltaCard(props : any) {

    return(
        <div className={styles.reporteCard}>
            <div className={styles.tituloCard}>{props.fecha}</div>
            <div className={styles.severidadCard}>Recurso: {props.legajo_empleado}</div>
        </div>
    );
  }