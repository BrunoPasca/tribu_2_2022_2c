import styles from '../../styles/soporte.module.css'
import Header from '../header';
import TicketCard from './ticketCard';
import Head_ from '../head';
import ColumnaTicket from './columnaTickets';
import SearchBar from './searchBar';
import SearchBarResponsable from './searchBarResponsable';
import TicketData from './TicketsData.json'
import SearchBarSeveridad from './searchBarSeveridad';



export default function Soporte() {

    return(<div className={styles.container}>

       <Head_ nombre='Soporte'></Head_>
      
        <Header></Header>

        <div className={styles.navbar}>
          <div className={styles.navbarIzq}> 
            <h1>Soporte</h1>
          </div>
          <div className={styles.navbarDer}> 
          
<<<<<<< HEAD
            <SearchBar placeholder="Ingrese un Titulo" data={TicketData}/>
            <SearchBarSeveridad placeholder="Ingrese una Severidad" data={TicketData}/>
          
=======
            <SearchBar filtro="titulo" placeholder="Ingrese un nombre" data={TicketData}/>

            <SearchBarResponsable placeholder='Ingrese id de resposable'data={TicketData} ></SearchBarResponsable>
>>>>>>> 83a3cb2268b407d78d23a2bd3d92402a61fab96a

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
     


            <div className={styles.contenedorBoton}>
            <a href='/moduloSoporte/ticketCreate'><button>CREAR TICKET</button></a>
            </div>
  
  
      </div>
    );
  }
