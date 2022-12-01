import styles from '../../../styles/reportes.module.css'

export default function GuardiaCard(props : any) {

    let fechaSqlInicio = props.fecha_inicio
    const fechaInicio = new Date(fechaSqlInicio); 

    let fechaSqlFin = props.fecha_fin
    const fechaFin = new Date(fechaSqlFin); 

    return(
        <div className={styles.reporteCard}>
            <div className={styles.tituloCard}>Legajo: {props.legajo_empleado}</div>
            <div className={styles.severidadCard}>Inicio: {fechaInicio.toLocaleDateString()}</div>
            <div className={styles.severidadCard}>Fin: {fechaFin.toLocaleDateString()}</div>
        </div>
    );
  }