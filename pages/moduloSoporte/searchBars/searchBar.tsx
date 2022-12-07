import Link from 'next/link';
import styles from "../../../styles/search.module.css"
import BotonFiltro from './botonFiltro';
import TicketCard from '../ticketCard';
import { JSXElementConstructor, ReactElement, ReactFragment, SetStateAction, useEffect, useState } from "react";
import { EmpleadoProperties, TicketProperties } from '../../../components/soporte/types';


export default function SearchBar({ placeholder, data }: { placeholder: string, data: {} }) {

  const [tickets, setTickets]: [Array<TicketProperties>, any] = useState([])

  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/tickets")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data)

      })
  }, [])

  const [empleados, setEmpleados]: [Array<EmpleadoProperties>, any] = useState([])

  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/employees")
      .then((res) => res.json())
      .then((data) => {
        setEmpleados(data)
      })
  }, [])

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event: { target: { value: any; }; }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = tickets.filter((value) => {
      return value.titulo.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      //setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const [value, setValue] = useState("");
  const onChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm: SetStateAction<string>) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };


  return (
    <div className={styles.search}>

      <div className={styles.searchInput}>
        <input type='text' placeholder={placeholder} value={value} onChange={onChange} />
      
      

      {(tickets).filter(i => i.titulo.toString().toLowerCase() == value.toLowerCase()).map((ticket) => (
              <div key={ticket.id}>
                <Link href={'/moduloSoporte/tickets/' + ticket.id}><TicketCard titulo={ticket.titulo} id={ticket.id} severidad={ticket.severidad}></TicketCard></Link>
              </div>
            ))}
              <div className={styles.dropdown}>
          {tickets.filter((item: { titulo: string; }) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.titulo.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.titulo)}
                className="dropdown-row"
                key={item.titulo}
              >
                {item.titulo}
              </div>
            ))}
        </div>


      </div>



    </div>
  );
}