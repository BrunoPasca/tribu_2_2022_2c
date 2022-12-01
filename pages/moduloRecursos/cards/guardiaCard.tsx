import styles from '../../../styles/reportes.module.css'

export default function GuardiaCard(props : any) {

    return(
        <div className={styles.reporteCard}>
            <div className={styles.tituloCard}>Legajo: {props.legajo_empleado}</div>
            <div className={styles.severidadCard}>Inicio: {props.fecha_inicio}</div>
            <div className={styles.severidadCard}>Fin: {props.fecha_fin}</div>
        </div>
    );
  }