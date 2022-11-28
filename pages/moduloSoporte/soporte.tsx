import styles from '../../styles/soporte.module.css'
import Header from '../header';
import Ticket from './ticket';
import Head_ from '../head';

export default function Soporte() {

    return(<div className={styles.container}>

       <Head_ nombre='Soporte'></Head_>
      
        <Header></Header>

        <div className={styles.titulos}>
              <div>
                <p>Abierto</p>
                <Ticket></Ticket>
              </div>
              <div>
              <p>En analisis</p>
                <Ticket></Ticket>
              </div>
              <div>
              <p>Derivado</p>
                <Ticket></Ticket>
              </div>
              <div>
              <p>Resuelto</p>
                <Ticket></Ticket>
              </div>
              <div>
              <p>Cancelado</p>
                <Ticket></Ticket>
                <Ticket></Ticket>
                <Ticket></Ticket>
                <Ticket></Ticket>
              
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
