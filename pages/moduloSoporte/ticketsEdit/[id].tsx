import Head from 'next/head'
import styles from '../../../styles/ticket.module.css'
import Head_ from '../../head'
import Header from '../../header'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ClientesProperties, ClientesYProductosProperties, EmpleadoProperties, ProductProperties, RecursosProperties, TicketProperties } from '../../../components/soporte/types';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import HeaderSoporte from '../../headerSoporte';


export default function TicketEdit() {

      const router = useRouter();
      const { id } = router.query;

      const [clientes, setClientes]: [Array<ClientesProperties>, any] = useState([])

      useEffect(() => {
            fetch("https://aninfo2c222back-production.up.railway.app/api/clients_ext")
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

      const [empleados, setEmpleados]: [Array<RecursosProperties>, any] = useState([])


      useEffect(() => {
            fetch("https://aninfo2c222back-production.up.railway.app/api/recursos_ext")
                  .then((res) => res.json())
                  .then((data) => {
                        setEmpleados(data)
                        console.log("LOS EMPLEADOS: ", data);
                  })
      }, [])

      const [cliente, setCliente]: [any, any]= useState()

      const [clientesYProductos, setClientesYProductos]: [Array<ClientesYProductosProperties>, any] = useState([])

      useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/cliente_prod")
          .then((res) => res.json())
          .then((data) => {
            setClientesYProductos(data)
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


      const { register, handleSubmit } = useForm<TicketProperties>()

      const onSubmit = handleSubmit((data) => {
            data.titulo = ticket.titulo;
            const url = "https://aninfo2c222back-production.up.railway.app/api/tickets/" + id
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

                  <HeaderSoporte></HeaderSoporte>

                  <div className={styles.camposForm}>
                        <h1>{ticket?.id} - {ticket?.titulo}</h1>

                        <label htmlFor="last">Descripcion</label>
                        <input type="text" {...register("descripcion")} required placeholder='Escribe una nueva descripccion'/>
                        <br></br>

                        <label htmlFor="last">Responsable</label>

                        <select {...register("id_responsable")}>
                              {empleados.map((empleado) => (
                                    <option value={Number(empleado.legajo)} key={empleado.legajo}>{empleado.Nombre} {empleado.Apellido} - Legajo: {empleado.legajo}</option>
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

                        <select {...register("id_cliente") }onChange={e => setCliente(e.target.value)}>
                              {clientes.map((cliente) => (
                                    <option value={Number(cliente.id)} key={Number(cliente.id)}>{cliente['razon social']} {cliente.CUIT} - Legajo: {cliente.id}</option>
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

                        <label htmlFor="id_producto">Producto</label>
                        <select {...register("id_producto")}>
                              {(clientesYProductos).filter(i => i.id_cliente == cliente).map((a) => (
                                    <option key={a.id_producto} value={a.id_producto}>
                                          {productos.find(element => element.id == a.id_producto)?.nombre} - Version: {productos.find(element => element.id == a.id_producto)?.id_version}
                                                
                                    </option>
                              ))}
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
