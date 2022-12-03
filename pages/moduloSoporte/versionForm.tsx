import styles from '../../styles/ticket.module.css'
import Head_ from '../head'
import Header from '../header'
import { ClientesProperties, EmpleadoProperties, ProductProperties, TicketProperties, VersionProperties } from '../../components/soporte/types';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useNavigate } from 'react-router-dom';
import { versions } from 'process';



export default function TicketCreate() {



  const { register, handleSubmit } = useForm<ProductProperties>()

  const onSubmit = handleSubmit((data) => {
    console.log(JSON.stringify(data))
    fetch("https://aninfo2c222back-production.up.railway.app/api/versions", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
    alert("El producto se creo correctamente")
  })



  return (

    <form className={styles.versionForm} onSubmit={onSubmit}>

      <div >
        <h3>Nueva version</h3>

        <label htmlFor="titulo">Nombre</label>
        <input type="text" {...register("nombre")} required />
        <br></br>


        <label htmlFor="fechaEmision">Fecha de lanzamiento</label>
        <input type="date" {...register("fecha_lanzamiento")} required />
        <br></br>


        <div className={styles.botonesView}>
          <button type="reset">Cancelar</button>
          <button type="submit">Guardar</button>
        </div>
      </div>
    </form>
  )
}