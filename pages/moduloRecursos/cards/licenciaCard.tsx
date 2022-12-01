import styles from '../../../styles/reportes.module.css'

export default function licenciaCard(props : any) {
    let fechaSqlInicio = props.fecha_inicio
    const fechaInicio = new Date(fechaSqlInicio); 

    let fechaSqlFin = props.fecha_fin
    const fechaFin = new Date(fechaSqlFin); 

    return(
        <div className={styles.reporteCard}>
            <div className={styles.tituloCard}>{props.tipo_licencia}</div>
            <div className={styles.severidadCard}>{fechaInicio.toLocaleDateString()} a {fechaFin.toLocaleDateString()}</div>
        </div>
    );
  }