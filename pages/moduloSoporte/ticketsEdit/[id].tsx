import Head from 'next/head'
import styles from '../../../styles/ticket.module.css'
import Head_ from '../../head'
import Header from '../../header'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ClientesProperties, EmpleadoProperties, TicketProperties } from '../../../components/soporte/types';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';


export default function TicketEdit() {

      const router = useRouter();
      const { id } = router.query;

      const [clientes, setClientes]: [Array<ClientesProperties>, any] = useState([])

      useEffect(() => {
            fetch("https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos")
                  .then((res) => res.json())
                  .then((data) => {
                        setClientes(data)
                  })
      }, [])


      const [ticket, setTickets]: [any, any] = useState(0)


      useEffect(() => {
            fetch("https://aninfo2c222back-production.up.railway.app/api/tickets/" + id)

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
                        console.log("LOS EMPLEADOS: ", data);
                  })
      }, [])


      const { register, handleSubmit } = useForm<TicketProperties>()

      const onSubmit = handleSubmit((data) => {
            data.titulo = ticket.titulo;
            console.log("ESTA ES LA DATA QUE EDITE : ", JSON.stringify(data))
            const url = "https://aninfo2c222back-production.up.railway.app/api/tickets/" + id
            console.log("URL: ", url)
            fetch(url, {
                  method: 'PUT', // or 'PUT'
                  body: JSON.stringify(data), // data can be `string` or {object}!
                  headers: {
                        'Content-Type': 'application/json'
                  }
            })
            alert("El ticket se edito correctamente")

      })



      return (
            <form className={styles.form} onSubmit={onSubmit}>

                  <Head_ nombre='Editar Ticket'></Head_>

                  <Header></Header>

                  <div className={styles.camposForm}>
                        <h1>{ticket?.id} - {ticket?.titulo}</h1>

                        <label htmlFor="last">Descripcion</label>
                        <input type="text" {...register("descripcion")} required placeholder='Escribe una nueva descripccion' />
                        <br></br>

                        <label htmlFor="last">Responsable</label>

                        <select {...register("id_responsable")}>
                              {empleados.map((empleado) => (
                                    <option value={Number(empleado.legajo)} key={empleado.legajo}>{empleado.nombre} {empleado.apellido} - Legajo: {empleado.legajo}</option>
                              ))}
                        </select>

                        <br></br>

                        <label htmlFor="last">Estado</label>
                        <select {...register("estado")}>
                              <option value="abierto">Abierto</option>
                              <option value="en analisis">En Analisis</option>
                              <option value="derivado">Derivado</option>
                              <option value="resuelto">Resuelto</option>
                              <option value="cancelado">Cancelado</option>
                        </select>
                        <label htmlFor="last">Severidad</label>
                        <select {...register("severidad")}>
                              <option value="critica">Critica</option>
                              <option value="alta">Alta</option>
                              <option value="media">Media</option>
                              <option value="baja">Baja</option>
                        </select>
                        <br></br>

                        <label htmlFor="last">Cliente</label>

                        <select {...register("id_cliente")}>
                              {clientes.map((cliente) => (
                                    <option value={Number(cliente.legajo)} key={Number(cliente.legajo)}>{cliente.Nombre} {cliente.Apellido} - Legajo: {cliente.legajo}</option>
                              ))}
                        </select>

                        <br></br>


                        <label htmlFor="medio_contacto">Medio de contacto</label>
                        <select {...register("medio_contacto")}>
                              <option id="id_producto" value={"Email"}>Email</option>
                              <option id="id_producto" value={"Telefono"}>Telefono</option>
                        </select>
                        <br></br>

                        <label htmlFor="datoContacto">Dato de contacto</label>
                        <input type="text" {...register("dato_contacto")} value={ticket?.datoContacto} />
                        <br></br>

                        <label htmlFor="last">Producto</label>
                        <select {...register("id_producto")}>
                              <option id="id_producto" value={1}>Producto 1</option>
                              <option id="id_producto" value={2}>Producto 2</option>
                              <option id="id_producto" value={3}>Producto 3</option>
                              <option id="id_producto" value={4}>Producto 4</option>
                        </select>
                        <br></br>

                        <label htmlFor="fechaEmision">Fecha de emision</label>
                        <input type="date" {...register("fecha_emision")} required />
                        <br></br>

                        <label htmlFor="fechaResolucion">Fecha de resolucion</label>
                        <input type="date" {...register("fecha_resolucion")} />
                        <br></br>

                        <div className={styles.botonesView}>
                              <Link href={'/moduloSoporte/tickets/' + id}> <button type="reset">Cancelar</button> </Link>
                              <button type="submit">Guardar</button>
                              <div />

                        </div>
                  </div>
            </form>
      )
}
