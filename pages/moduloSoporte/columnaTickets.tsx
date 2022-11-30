import Link from 'next/link';
import { useEffect, useState } from 'react';
import TicketCard from './ticketCard';
import { TicketProperties, TicketProperties_2 } from './types';

//probando con un array 

//aca tendria que hacer get tickets



  
export default function ColumnaTicket({estadoFiltro}: {estadoFiltro:string}) {

  const [tickets, setTickets]: [Array<TicketProperties_2> ,any] = useState([])


  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/tickets")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data)
      })
  }, [])

    return (
        <div>
          {(tickets).filter(i => i.estado == "lo mismo, maestro de estados").map((ticket) => ( 
            <div key={ticket.id}>
              <Link href={'/moduloSoporte/tickets/' + ticket.id}><TicketCard titulo={ticket.nombre} id={ticket.id} severidad={ticket.severidad}></TicketCard></Link>
            </div>
          ))}
        </div>
      )
    }