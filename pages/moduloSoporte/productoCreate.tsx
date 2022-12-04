import styles from '../../styles/ticket.module.css'
import Head_ from '../head'
import Header from '../header'
import { ClientesProperties, EmpleadoProperties, FormProductVersionProperties, ProductProperties, TicketProperties, VersionProperties } from '../../components/soporte/types';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useNavigate } from 'react-router-dom';
import { versions } from 'process';
import VersionForm from './versionForm';



export default function TicketCreate() {

  const [versiones, setVersiones]: [Array<VersionProperties>, any] = useState([])



  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/versions")
      .then((res) => res.json())
      .then((data) => {
        setVersiones(data)
      })
  }, [])



  const { register, handleSubmit } = useForm<FormProductVersionProperties>()

  const onSubmit = handleSubmit((data) => {
    const dataVersion = {
      nombre: data.nombre_version,
      fecha_lanzamiento: data.fecha_lanzamiento_version,
    }


    fetch("https://aninfo2c222back-production.up.railway.app/api/versions", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(dataVersion), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })




    const nuevaVersion = versiones[versiones.length - 1].id + 1

    const dataProducto = {
      nombre: data.nombre,
      fecha_lanzamiento: data.fecha_lanzamiento,
      id_version: nuevaVersion,
    }

    fetch("https://aninfo2c222back-production.up.railway.app/api/productos", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(dataProducto), // data can be `string` or {object}!
      headers: {
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


        <label htmlFor="fechaEmision">Fecha de lanzamiento</label>
        <input type="date" {...register("fecha_lanzamiento")} required />
        <br></br>


        <h3>Nueva version</h3>

        <label htmlFor="titulo">Nombre</label>
        <input type="text" {...register("nombre_version")} required />
        <br></br>


        <label htmlFor="fechaEmision">Fecha de lanzamiento</label>
        <input type="date" {...register("fecha_lanzamiento_version")} required />
        <br></br>







        <div className={styles.botonesView}>
          <button type="reset">Cancelar</button>
          <button type="submit">Guardar</button>
        </div>
      </div>
    </form>
  )
}