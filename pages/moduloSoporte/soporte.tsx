import styles from '../../styles/soporte.module.css'
import Header from '../header';
import TicketCard from './ticketCard';
import Head_ from '../head';
import ColumnaTicket from './columnaTickets';


export default function Soporte() {

    return(<div className={styles.container}>

       <Head_ nombre='Soporte'></Head_>
      
        <Header></Header>

        <div className={styles.titulos}>
              <div>

                <p>Abierto</p>
                <ColumnaTicket filtro='Abierto'></ColumnaTicket>
               
              </div>

              <div>
              <p>En analisis</p>
              <ColumnaTicket filtro='En analisis'></ColumnaTicket>
              </div>
              <div>
              <p>Derivado</p>
              <ColumnaTicket filtro='Derivado'></ColumnaTicket>
              </div>
              <div>
              <p>Resuelto</p>
              <ColumnaTicket filtro='Resuelto'></ColumnaTicket>
              </div>
              <div>
              <p>Cancelado</p>
              <ColumnaTicket filtro='Cancelado'></ColumnaTicket>


              
              </div>
            </div>
        <main className={styles.main}>
   
            <a href='/moduloSoporte/ticketCreate'><button>CREAR TICKET</button></a>

        </main>
  
        <footer className={styles.footer}>

        </footer>
      </div>
    );
  }