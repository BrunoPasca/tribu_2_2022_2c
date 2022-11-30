import Link from 'next/link';
import React, { useState } from 'react'
import styles from '../../styles/search.module.css'
import BotonFiltro from './botonFiltro';
import TicketCard from './ticketCard';

const tickets = [
    {   
    titulo: "Arreglar front",
    id: 1,
    severidad: "Critico",
    estado: "Abierto",
    descripcion:"lorem ipsum" ,
    datosCliente: "Diego",
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
      datosCliente: "Roberto",
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
      datosCliente: "Diego",
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
      datosCliente: "Juan",
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
      datosCliente: "Alvarez",
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
      datosCliente: "Carlos",
      idCliente: 3,
      medioContacto: "email",
      datoContacto: "julian@gmail", 
      nombreProducto: "fasfaf",
      versionProducto: "fasfsafsa",
      fechaEmision: "fecha efassa",
      fechaResolucion:"fdafasfsa",
  
    },
  ]

export default function SearchBar({placeholder, data}: {placeholder:string, data:{}}) {
  
    const[filteredData , setFilteredData] = useState([]);
    const[wordEntered , setWordEntered] = useState("");

    const handleFilter = (event: { target: { value: any; }; }) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = tickets.filter((value) => {
            return value.datosCliente.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

    return (
        <div className={styles.search}>

            <div className={styles.searchInput}> 
                <input type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter}/> 
            </div> 

            <div className={styles.navbarDer}> 
                <select>
                  <option>Creador</option>
                  <option>Resolutor</option>
                  <option>Responsable</option>
                  <option>Cliente</option>
                </select>
              <BotonFiltro searchedWord={wordEntered}/>
              <button onClick={clearInput}>Borrar
              </button>
            </div>

            {filteredData.length != 0 && 
              <div className={styles.stackTop}> 
                    {(tickets).filter(i => i.datosCliente.toLowerCase() == wordEntered.toLowerCase()).map((ticket) => ( 
                      <div key={ticket.id}>
                        <Link href={'/moduloSoporte/tickets/' + ticket.id}>
                          <TicketCard titulo={ticket.titulo} id={ticket.id} severidad={ticket.severidad}></TicketCard>
                        </Link>
                      </div>
                    ))} 
              </div>
            }
            
        </div>             
    );
}