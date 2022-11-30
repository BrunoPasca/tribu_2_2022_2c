import React, { useState } from 'react'
import styles from '../../styles/search.module.css'

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
      datosCliente: "Quien",
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

    const handleFilter = (event: { target: { value: any; }; }) => {
        const searchWord = event.target.value;
        const newFilter = tickets.filter((value) => {
            return value.datosCliente.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    return (
        <div className={styles.search}>
            <div className={styles.searchInput}> 
                <input type='text' placeholder={placeholder} onChange={handleFilter}/>
                <div className={styles.searchIcon}> <img className={styles.icono} src={"/searchIcon.png"} alt={"Icono Soporte"} width={20} height={20}/> </div>

            </div> 
            {   filteredData.length != 0 && 
                <div className={styles.dataResult}> 
                    {filteredData.map((value,key) => {
                        return ( 
                        <a className={styles.dataItem} href={'/moduloSoporte/tickets/' + value.id}> 
                           <p className={styles.p}> {value.datosCliente} </p>
                        </a>
                        );
                })} 
            </div>
            } 
        </div>             
    );
}