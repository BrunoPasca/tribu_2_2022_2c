import styles from '../../../styles/reportes.module.css'

export default function licenciaCard(props : any) {

    return(
        <div className={styles.reporteCard}>
            <div className={styles.tituloCard}>{props.tipo_licencia}</div>
            <div className={styles.tituloCard}>{props.fecha_inicio} a {props.fecha_fin}</div>
        </div>
    );
  }