import Link from 'next/link';
import styles from '../../styles/search.module.css'
import BotonFiltro from './botonFiltro';
import TicketCard from './ticketCard';
import { useEffect, useState } from "react";
import { EmpleadoProperties, TicketProperties } from './types';


export default function SearchBarSeveridad({placeholder, data}: {placeholder:string, data:{}}) {

    const [tickets, setTickets]: [Array<TicketProperties> ,any] = useState([])

    useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/tickets")
        .then((res) => res.json())
        .then((data) => {
          setTickets(data)

        })
    }, [])

    const [empleados, setEmpleados]: [Array<EmpleadoProperties> ,any] = useState([])

    useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/employees")
        .then((res) => res.json())
        .then((data) => {
          setEmpleados(data)
        })
    }, []) 


    const[filteredData , setFilteredData] = useState([]);
    const[wordEntered , setWordEntered] = useState("");

    const handleFilter = (event: { target: { value: any; }; }) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = tickets.filter((value) => {
            return value.severidad.toString().toLowerCase().includes(searchWord.toLowerCase());  ///
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

              <button onClick={clearInput}>Borrar
              </button>
            </div>

            {filteredData.length != 0 && 
              <div className={styles.stackTop}> 
                    {(tickets).filter(i => i.severidad.toString().toLowerCase() == wordEntered.toLowerCase()).map((ticket) => ( 
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