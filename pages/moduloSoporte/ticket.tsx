import styles from '../../styles/ticket.module.css'

export default function Ticket() {

    return(
        <a href="/moduloSoporte/ticketView">
        <div className={styles.ticketCard}>
            <div className={styles.tituloCard}>01 - TITULO DEL TICKET</div>
            <div className={styles.severidadCard}>SEVERIDAD</div>
        </div>
        </a>
    );
  }