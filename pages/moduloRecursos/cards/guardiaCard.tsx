import styles from '../../../styles/reportes.module.css'

export default function GuardiaCard(props : any) {

    return(
        <div className={styles.reporteCard}>
            <div className={styles.tituloCard}>{props.legajo_empleado}</div>
            <div className={styles.severidadCard}>{props.fecha_inicio} a {props.fecha_fin}</div>
        </div>
    );
  }