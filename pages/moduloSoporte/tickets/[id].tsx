import Head_ from "../../head";
import Header from "../../header";
import { useRouter } from 'next/router'
import styles from '../../../styles/ticket.module.css'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TicketView() {
    
    const router = useRouter();
    const {id} = router.query;



    const [ticket, setTickets]: [any ,any] = useState(0)


    useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/tickets/" + id )

        .then((res) => res.json())
        .then((data) => {
          setTickets(data)        
        })
    }, [])


    function deleteById(){
         fetch('https://aninfo2c222back-production.up.railway.app/api/tickets/' + id, {
            method: 'DELETE',
          })
    }
    
    
  

    return (

        <>
        <Head_ nombre='Ticket'></Head_>

        <Header></Header>

        <div className={styles.ticketView}>
        
            <div className={styles.camposView}>
                <h1>{ticket?.id} - {ticket?.titulo}</h1>
                
                
                <div>Severidad: {ticket?.severidad}</div>
                <div>Estado: {ticket?.estado}</div>
                <div>Descripcion: {ticket?.descripcion}</div>

                <br></br>

                <div>ID del cliente: {ticket?.id_cliente}</div>

                <div>Medio de contacto: {ticket?.medio_contacto}</div>
                <div>Datos de contacto: {ticket?.dato_contacto}</div>


                <br></br>

                <div>Identificacion del producto: {ticket?.id_producto}</div>
                <br></br>

                <div>Fecha de emision: {ticket?.fecha_emision}</div>

                <div>Fecha de resolucion: {ticket?.fecha_resolucion}</div>

                <br></br>

                <div>Identificacion del responsable: {ticket?.id_responsable}</div>

                <div className={styles.botonesView}>

                    <Link href={"/moduloSoporte/soporte"}><button onClick={deleteById}>Eliminar</button></Link>
                  
                  
                    <Link href={'/moduloSoporte/ticketsEdit/' + id}><button>Editar</button></Link>
                    <button>Crear tarea</button>
                </div>
            </div>
        </div>

        </>
   
   
   )
  }

