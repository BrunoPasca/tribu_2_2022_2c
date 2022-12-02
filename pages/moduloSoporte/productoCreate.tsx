import styles from '../../styles/ticket.module.css'
import Head_ from '../head'
import Header from '../header'
import { ClientesProperties, EmpleadoProperties, ProductProperties, TicketProperties, VersionProperties } from './types';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useNavigate } from 'react-router-dom';
import { versions } from 'process';



export default function TicketCreate() {

      const [versiones, setVersiones]: [Array<VersionProperties> ,any] = useState([])



      useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/versions")
          .then((res) => res.json())
          .then((data) => {
            setVersiones(data)
          })
      }, [])    
      

      const {register, handleSubmit} = useForm<ProductProperties>()

      const onSubmit = handleSubmit((data) =>{
            console.log(JSON.stringify(data))
            fetch("https://aninfo2c222back-production.up.railway.app/api/productos", {
                  method: 'POST', // or 'PUT'
                  body: JSON.stringify(data), // data can be `string` or {object}!
                  headers:{
                    'Content-Type': 'application/json'
                  }
                })
            alert("El producto se creo correctamente")
      })



     

      return (

      <form className={styles.form} onSubmit={onSubmit}>

      <Head_ nombre='Crear Ticket'></Head_>
      

      <Header></Header>

      <div className={styles.camposForm}>
            <h1>Nuevo Producto</h1>

            <label htmlFor="titulo">Nombre</label>
            <input type="text" {...register("nombre")} required />
            <br></br>
            
            <label htmlFor="id_responsable">Version de producto</label>
           
            <select {...register("id_version")}>
            {versiones.map((version) => ( 
                  <option  value={Number(version.id)}  key={version.id}>{version.nombre} </option>
            ))}
            </select>
            <br></br>


            <label htmlFor="fechaEmision">Fecha de lanzamiento</label>
            <input type="date" {...register("fecha_lanzamiento")} required/>
            <br></br>



            <div className={styles.botonesView}>
            <button type="reset">Cancelar</button>
            <button type="submit">Guardar</button>
            </div>
            </div>
    </form>
  )
}