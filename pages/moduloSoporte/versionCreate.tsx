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

  const [versiones, setVersiones]: [Array<VersionProperties>, any] = useState([])

  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/versions")
      .then((res) => res.json())
      .then((data) => {
        setVersiones(data)
      })
  }, [])

  const [productos, setProductos]: [Array<ProductProperties>, any] = useState([])

  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data)
      })
  }, [])


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

    const IdNuevaVersion = versiones[versiones.length - 1].id + 1
    const IdNuevoProducto = productos[productos.length-1].id + 1

    const dataProdVersions = {
      producto_id: IdNuevoProducto,
      version_id: IdNuevaVersion,
    }

    fetch("https://aninfo2c222back-production.up.railway.app/api/prodversions", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(dataProdVersions), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })


    alert("La version se creo correctamente")
  })



  return (

    <form className={styles.form} onSubmit={onSubmit}>

      <Head_ nombre='Crear Version'></Head_>


      <Header></Header>

      <div className={styles.camposForm}>
        <h1>Nueva version</h1>

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