import TicketCard from './ticketCard';
import { TicketProperties } from './types';
//probando con un array 

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
      id: 4,
      severidad: "Critico",
      estado: "Cancelado"
  
    },
    {   
      titulo: "strifsaasasfasfng",
      id: 4,
      severidad: "Critico",
      estado: "Derivado"
  
    },
    {   
      titulo: "fasfsasaf safasassaf nnasjf nasjfnasjn fjnasjn  fjansjnfsajn",
      id: 4,
      severidad: "Critico",
      estado: "En analisis"
  
    },
  ]
  
export default function ColumnaTicket({filtro}: {filtro:string}) {

    return (
        <div>
          {(tickets).filter(i => i.estado == filtro).map((ticket) => ( 
            <div key={ticket.id}>
              <TicketCard titulo={ticket.titulo} id={ticket.id} severidad={ticket.severidad }></TicketCard>
            </div>
          ))}
        </div>
      )
    }