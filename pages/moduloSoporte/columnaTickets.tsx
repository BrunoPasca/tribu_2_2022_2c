import Link from 'next/link';
import TicketCard from './ticketCard';
import { TicketProperties } from './types';

import { getTickets } from "../../PSA_API/src/controllers/tickets.controller";
//probando con un array 

//aca tendria que hacer get tickets

const tickets = [
  {   
  titulo: "Arreglar front",
  id: 1,
  severidad: "Critico",
  estado: "Abierto",
  descripcion:"tengo que arreglar el front porque sino desaprobaremos la materia. Juan ceo quiere que se vea lindo" ,
  datosCliente: "Dasdasdas",
  idCliente: 3,
  medioContacto: "email",
  datoContacto: "julian@gmail",
  nombreProducto: "fasfaf",
  versionProducto: "fasfsafsa",
  fechaEmision: "fecha efassa",
  fechaResolucion:"fdafasfsa",

  },
  {   
    titulo: "Hacer sistema de tickets",
    id: 2,
    severidad: "Critico",
    estado: "En analisis",
    descripcion:"lorem ipsum" ,
    datosCliente: "Dasdasdas",
    idCliente: 3,
    medioContacto: "email",
    datoContacto: "julian@gmail",
    nombreProducto: "fasfaf",
    versionProducto: "fasfsafsa",
    fechaEmision: "fecha efassa",
    fechaResolucion:"fdafasfsa",
  },
  {   
  titulo: "Vacaciones",
  id: 3,
  severidad: "Critico",
  estado: "Abierto",
  descripcion:"lorem ipsum" ,
  datosCliente: "Dasdasdas",
  idCliente: 3,
  medioContacto: "email",
  datoContacto: "julian@gmail",
  nombreProducto: "fasfaf",
  versionProducto: "fasfsafsa",
  fechaEmision: "fecha efassa",
  fechaResolucion:"fdafasfsa",
  },
  {   
    titulo: "Contar hasta 43",
    id: 4,
    severidad: "Critico",
    estado: "Resuelto",
    descripcion:"lorem ipsum" ,
    datosCliente: "Dasdasdas",
    idCliente: 3,
    medioContacto: "email",
    datoContacto: "julian@gmail",
    nombreProducto: "fasfaf",
    versionProducto: "fasfsafsa",
    fechaEmision: "fecha efassa",
    fechaResolucion:"fdafasfsa",

  },

  {   
    titulo: "me gusta mucho escribir un titulo largo asi no entra y rompe todo",
    id: 5,
    severidad: "Critico",
    estado: "Cancelado",
    descripcion:"lorem ipsum" ,
    datosCliente: "Dasdasdas",
    idCliente: 3,
    medioContacto: "email",
    datoContacto: "julian@gmail",
    nombreProducto: "fasfaf",
    versionProducto: "fasfsafsa",
    fechaEmision: "fecha efassa",
    fechaResolucion:"fdafasfsa",

  },
  {   
    titulo: "Aprender next",
    id: 6,
    severidad: "Critico",
    estado: "Derivado",
    descripcion:"lorem ipsum" ,
    datosCliente: "Dasdasdas",
    idCliente: 3,
    medioContacto: "email",
    datoContacto: "julian@gmail",
    nombreProducto: "fasfaf",
    versionProducto: "fasfsafsa",
    fechaEmision: "fecha efassa",
    fechaResolucion:"fdafasfsa",

  },
  {   
    titulo: "Vamos river",
    id: 7,
    severidad: "Critico",
    estado: "En analisis",
    descripcion:"lorem ipsum" ,
    datosCliente: "Dasdasdas",
    idCliente: 3,
    medioContacto: "email",
    datoContacto: "julian@gmail",
    nombreProducto: "fasfaf",
    versionProducto: "fasfsafsa",
    fechaEmision: "fecha efassa",
    fechaResolucion:"fdafasfsa",

  },
]
  
export default function ColumnaTicket({estadoFiltro}: {estadoFiltro:string}) {

    return (
        <div>
          {(tickets).filter(i => i.estado == estadoFiltro).map((ticket) => ( 
            <div key={ticket.id}>
              <Link href={'/moduloSoporte/tickets/' + ticket.id}><TicketCard titulo={ticket.titulo} id={ticket.id} severidad={ticket.severidad}></TicketCard></Link>
            </div>
          ))}
        </div>
      )
    }