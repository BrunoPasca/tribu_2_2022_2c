import styles from '../../styles/soporte.module.css'
import Header from '../header';
import TicketCard from './ticketCard';
import Head_ from '../head';
import ColumnaTicket from './columnaTickets';
import SearchBar from './searchBars/searchBar';
import SearchBarResponsable from './searchBars/searchBarResponsable';
import TicketData from './TicketsData.json'
import SearchBarSeveridad from './searchBars/searchBarSeveridad';
import SearchBarLegajoCliente from './searchBars/searchBarLegajoCliente';
import Link from 'next/link';
import HeaderSoporte from '../headerSoporte';



export default function Soporte() {

    return(
    <div className={styles.container}>

       <Head_ nombre='Tickets'></Head_>
      
        <HeaderSoporte></HeaderSoporte>

        <div className={styles.navbar}>
          <div className={styles.navbarIzq}> 
            <h1>Soporte</h1>
          </div>

          <div>
            <div className={styles.contenedorBoton}>
              <a href='/moduloSoporte/ticketCreate'><button>CREAR TICKET</button></a>
            </div>
          </div>
          
          <div className={styles.navbarDer}> 
          <div className={styles.contenedorBoton}>
            <Link href={"/moduloSoporte/searchTickets"}><button>Busqueda de Tickets</button></Link>
            </div>

          </div>
        </div>

        <div className={styles.titulos}>
              <div className={styles.columna}>

                <p>Abierto</p>
                
                <ColumnaTicket estadoFiltro='abierto'></ColumnaTicket>
               
              </div>

              <div className={styles.columna}>
              <p>En analisis</p>
              <ColumnaTicket estadoFiltro='en analisis'></ColumnaTicket>
              </div>
              <div className={styles.columna}>
              <p>Derivado</p>
              <ColumnaTicket estadoFiltro='derivado'></ColumnaTicket>
              </div>
              <div className={styles.columna}>
              <p>Resuelto</p>
              <ColumnaTicket estadoFiltro='resuelto'></ColumnaTicket>
              </div>
              <div className={styles.columna}>
              <p>Cancelado</p>
              <ColumnaTicket estadoFiltro='cancelado'></ColumnaTicket>


              
              </div>
            </div>
     



  
  
      </div>
    );
  }