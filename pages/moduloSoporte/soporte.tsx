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

    return(<div className={styles.container}>

       <Head_ nombre='Soporte'></Head_>
      
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
          
            <SearchBarResponsable placeholder='Ingrese id de resposable'data={TicketData} ></SearchBarResponsable>

            <SearchBar placeholder="Ingrese un Titulo" data={TicketData}/>
            
            <SearchBarLegajoCliente placeholder="Ingrese un id de cliente" data={TicketData}/>

            <SearchBarSeveridad placeholder='Ingrese una severidad' data={TicketData}></SearchBarSeveridad>


          </div>
        </div>

        <div className={styles.titulos}>
              <div>

                <p>Abierto</p>
                
                <ColumnaTicket estadoFiltro='abierto'></ColumnaTicket>
               
              </div>

              <div>
              <p>En analisis</p>
              <ColumnaTicket estadoFiltro='en analisis'></ColumnaTicket>
              </div>
              <div>
              <p>Derivado</p>
              <ColumnaTicket estadoFiltro='derivado'></ColumnaTicket>
              </div>
              <div>
              <p>Resuelto</p>
              <ColumnaTicket estadoFiltro='resuelto'></ColumnaTicket>
              </div>
              <div>
              <p>Cancelado</p>
              <ColumnaTicket estadoFiltro='cancelado'></ColumnaTicket>


              
              </div>
            </div>
     



  
  
      </div>
    );
  }
