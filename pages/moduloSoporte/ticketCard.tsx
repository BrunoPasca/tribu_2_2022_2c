import styles from '../../styles/ticket.module.css'

export default function ticketCard({titulo, id,severidad}: {titulo:string, id: number, severidad: string}) {

    return(
        <div className={styles.ticketCard}>
            <div className={styles.tituloCard}>{id} - {titulo}</div>
            <div className={styles.severidadCard}>{severidad}</div>
        </div>
    );
  }