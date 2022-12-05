import styles from '../../../styles/ticket.module.css'
import Head_ from '../../head'
import Header from '../../header'
import { ClientesProperties, EmpleadoProperties, FormProductVersionProperties, ProductProperties, ProyectoProperties, TareaPropeties, TicketProperties, VersionProperties } from '../../../components/soporte/types';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useNavigate } from 'react-router-dom';
import { versions } from 'process';
import { useRouter } from 'next/router';



export default function TicketCreate() {

const router = useRouter();
const {id} = router.query;

const [proyectos, setProyectos]: [Array<ProyectoProperties>, any] = useState([])

useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos/")
            .then((res) => res.json())
            .then((data) => {
                  setProyectos(data)
            })
}, [])

  const { register, handleSubmit } = useForm<TareaPropeties>()

  const onSubmit = handleSubmit((data) => {

    data.estado = "Activo"
    data.horas_estimadas = 0

    fetch("https://aninfo2c222back-production.up.railway.app/api/tareas", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
              'Content-Type': 'application/json'
        }
    })
    alert("La tareas se creo correctamente")

  })



  return (

    <form className={styles.form} onSubmit={onSubmit}>

      <Head_ nombre='Crear Ticket'></Head_>


      <Header></Header>

      <div className={styles.camposForm}>
        <h1>Nueva Tarea</h1>

        <label htmlFor="titulo">Descripcion</label>
        <input type="text" {...register("descripcion")} required />
        <br></br>

        <label htmlFor="titulo">Horas estimadas</label>
        <input type="number" {...register("horas_estimadas")} required />
        <br></br>

        <label htmlFor="id_cliente">Proyecto</label>

        <select {...register("id_proyecto")}>
            {proyectos.map((proyecto) => (
                    <option id="id_cliente" value={Number(proyecto.id)} key={proyecto.id}>{proyecto.nombre} - ID: {proyecto.id}</option>
            ))}
        </select>







        <div className={styles.botonesView}>
          <button type="reset">Cancelar</button>
          <button type="submit">Guardar</button>
        </div>
      </div>
    </form>
  )
}