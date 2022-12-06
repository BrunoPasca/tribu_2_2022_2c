import styles from '../../styles/ticket.module.css'
import Head_ from '../head'
import Header from '../header'
import { ClientesProperties, EmpleadoProperties, RecursosProperties, TicketProperties } from '../../components/soporte/types';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useNavigate } from 'react-router-dom';
import HeaderSoporte from '../headerSoporte';



export default function TicketCreate() {

      const [empleados, setEmpleados]: [Array<RecursosProperties>, any] = useState([])

      const [clientes, setClientes]: [Array<ClientesProperties>, any] = useState([])

      useEffect(() => {
            fetch("https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/clientes-psa/1.0.0/m/api/clientes")
                  .then((res) => res.json())
                  .then((data) => {
                        setClientes(data)
                  })
      }, [])

      useEffect(() => {
            fetch("https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos")
                  .then((res) => res.json())
                  .then((data) => {
                        setEmpleados(data)
                  })
      }, [])


      const { register, handleSubmit } = useForm<TicketProperties>()

      const onSubmit = handleSubmit((data) => {
            fetch("https://aninfo2c222back-production.up.railway.app/api/tickets", {
                  method: 'POST', // or 'PUT'
                  body: JSON.stringify(data), // data can be `string` or {object}!
                  headers: {
                        'Content-Type': 'application/json'
                  }
            })
            alert("El ticket se creo correctamente")
      })





      return (

            <form className={styles.form} onSubmit={onSubmit}>

                  <Head_ nombre='Crear Ticket'></Head_>


                  <HeaderSoporte></HeaderSoporte>

                  <div className={styles.camposForm}>
                        <h1>Nuevo Ticket</h1>

                        <label htmlFor="titulo">Titulo</label>
                        <input type="text" {...register("titulo")} required />
                        <br></br>

                        <label htmlFor="descripcion">Descripcion</label>
                        <input type="text" {...register("descripcion")} required />
                        <br></br>
                        <label htmlFor="id_responsable">Responsable</label>

                        <select {...register("id_responsable")}>
                              {empleados.map((empleado) => (
                                    <option value={Number(empleado.legajo)} key={empleado.legajo}>{empleado.Nombre} {empleado.Apellido} - Legajo: {empleado.legajo}</option>
                              ))}
                        </select>
                        <br></br>

                        <label htmlFor="estado">Estado</label>
                        <select {...register("estado")}>
                              <option id="estado" value="abierto">Abierto</option>
                              <option id="estado" value="en analisis">En Analisis</option>
                              <option id="estado" value="derivado">Derivado</option>
                              <option id="estado" value="resuelto">Resuelto</option>
                              <option id="estado" value="cancelado">Cancelado</option>
                        </select>
                        <label htmlFor="severidad">Severidad</label>
                        <select {...register("severidad")}>
                              <option id="severidad" value="critica">Critica</option>
                              <option id="severidad" value="alta">Alta</option>
                              <option id="severidad" value="media">Media</option>
                              <option id="severidad" value="baja">Baja</option>
                        </select>
                        <br></br>

                        <label htmlFor="id_cliente">Cliente</label>

                        <select {...register("id_cliente")}>
                              {clientes.map((cliente) => (
                                    <option id="id_cliente" value={Number(cliente.id)} key={cliente.id}>{cliente['razon social']} - CUIT: {cliente.CUIT} - ID: {cliente.id}</option>
                              ))}
                        </select>

                        <br></br>

                        <label htmlFor="medio_contacto">Medio de contacto</label>
                        <select {...register("medio_contacto")}>
                              <option id="id_producto" value={"Email"}>Email</option>
                              <option id="id_producto" value={"Telefono"}>Telefono</option>
                        </select>
                        <br></br>

                        <label htmlFor="dato_contacto">Dato de contacto</label>
                        <input type="text" {...register("dato_contacto")} placeholder='ingrese datos de contacto' />
                        <br></br>

                        <label htmlFor="id_producto">Producto</label>
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

                        <label htmlFor="fechaResolucion">Fecha de resolucion estimada</label>
                        <input type="date" {...register("fecha_resolucion")} />
                        <br></br>

                        <div className={styles.botonesView}>
                              <button type="reset">Cancelar</button>
                              <button type="submit">Guardar</button>
                        </div>
                  </div>
            </form>
      )
}
