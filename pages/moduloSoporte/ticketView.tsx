import Head from 'next/head'
import styles from '../../styles/ticket.module.css'
import Head_ from '../head'
import Header from '../header'


export default function TicketView() {
    return (

        <>
        <Head_ nombre='Ticket'></Head_>

        <Header></Header>

        <div className={styles.ticketView}>
        
            <div className={styles.camposView}>
                <h1>ID - TITULO DEL TICKET</h1>
                
                
                <div>Criticidad: LA CRITICIDAD</div>
                <div>Estado: EL ESTADO</div>
                <div>Descripcion: fasjfasjbfjasbfjbas</div>
                
                <div>Datos del cliente: SDFKNASFNASKJFNAS</div>
                <div>ID CLIENTE: 3449043I295</div>
            
                <div>Medio de contacto: Email</div>
                <div>Datos de contacto: julian@gmail.com</div>
                <div>Nombre del producto: dasdasd</div>
                <div>Version del producto: 124</div>

                <div>Fecha de emision: 30/06/2022</div>
                <div>Fecha de resolucion: 12/09/2022</div>

                <div className={styles.botonesView}>
                    <button>Eliminar</button>
                    <a href='/moduloSoporte/ticketEdit'><button>Editar</button></a>
                    <button>Crear tarea</button>
                </div>
            </div>
        </div>

        </>
   
   
   )
  }