import Link from 'next/link';
import TicketCard from './ticketCard';
import { TicketProperties } from './types';

import { getTickets } from "../../PSA_API/src/controllers/tickets.controller";
//probando con un array 

//aca tendria que hacer get tickets

const tickets = [
  {   
  titulo: "string",
  id: 1,
  severidad: "Critico",
  estado: "Abierto"
  },
  {   
    titulo: "dasdasda",
    id: 2,
    severidad: "Critico",
    estado: "En analisis"
  },
  {   
  titulo: "aaaa",
  id: 3,
  severidad: "Critico",
  estado: "Abierto"
  },
  {   
    titulo: "strifsaasasfasfng",
    id: 4,
    severidad: "Critico",
    estado: "Resuelto"

  },

  {   
    titulo: "me gusta mucho escribir un titulo largo asi no entra y rompe todo",
    id: 5,
    severidad: "Critico",
    estado: "Cancelado"

  },
  {   
    titulo: "strifsaasasfasfng",
    id: 6,
    severidad: "Critico",
    estado: "Derivado"

  },
  {   
    titulo: "fasfsasaf safasassaf nnasjf nasjfnasjn fjnasjn  fjansjnfsajn",
    id: 7,
    severidad: "Critico",
    estado: "En analisis"

  },
]
  
export default function ColumnaTicket({filtro}: {filtro:string}) {

    return (
        <div>
          {(tickets).filter(i => i.estado == filtro).map((ticket) => ( 
            <div key={ticket.id}>
              <Link href={'/moduloSoporte/tickets/' + ticket.id}><TicketCard titulo={ticket.titulo} id={ticket.id} severidad={ticket.severidad}></TicketCard></Link>
            </div>
          ))}
        </div>
      )
    }