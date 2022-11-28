import Head from 'next/head'
import styles from '../../styles/ticket.module.css'
import Header from '../header'


export default function TicketView() {
    return (

        <>
        <Header></Header>

        <div className={styles.ticketView}>
        
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

            <div className={styles.botonesView}>
                <button>Eliminar</button>
                <a href='/moduloSoporte/edit'><button>Editar</button></a>
                <button>Crear tarea</button>
            </div>

        </div>

        </>
   
   
   )
  }