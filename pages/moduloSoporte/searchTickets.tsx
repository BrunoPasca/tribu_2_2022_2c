import React from 'react'
import styles from '../../styles/searchTickets.module.css'
import Header from '../header';
import Head_ from '../head';
import SearchBarResponsable from './searchBars/searchBarResponsable';
import TicketData from './TicketsData.json'
import SearchBarSeveridad from './searchBars/searchBarSeveridad';
import SearchBarLegajoCliente from './searchBars/searchBarLegajoCliente';
import ColumnaTicket from './columnaTickets';
import SearchBar from './searchBars/searchBar';


export default function SearchTickets({ placeholder, data }: { placeholder: string, data: {} }) {

  return(
  <>
  <div className={styles.container}>

    <Head_ nombre='Soporte'></Head_>
    
    <Header></Header>

    <div className={styles.navbar}>
        <div className={styles.navbarIzq}> 
         <h1>Busqueda de Tickets</h1>
        </div>
    </div>

     <div className={styles.titulos}> 
     <p>
      <SearchBar placeholder='Ingrese un titulo'data={TicketData} ></SearchBar>
      
      </p>
     <p>
      <SearchBarResponsable placeholder='Ingrese id de resposable'data={TicketData} ></SearchBarResponsable>
      
      </p>
      <p>
      <SearchBarLegajoCliente placeholder="Ingrese un id de cliente" data={TicketData}/>
      
      </p>
      <p>
      <SearchBarSeveridad placeholder='Ingrese una severidad' data={TicketData}></SearchBarSeveridad>
      </p>
    </div>

   </div>
   </>
 );
}
