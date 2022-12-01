import styles from '../../../styles/reportes.module.css'

export default function faltaCard(props : any) {

    let fechaSql= props.fecha

    const fecha = new Date(fechaSql); 

    return(
        <div className={styles.reporteCard}>
            <div className={styles.tituloCard}>{fecha.toLocaleDateString()}</div>
            <div className={styles.severidadCard}>Recurso: {props.legajo_empleado}</div>
        </div>
    );
  }