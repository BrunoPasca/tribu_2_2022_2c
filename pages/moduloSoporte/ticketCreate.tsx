import Head from 'next/head'
import styles from '../../styles/ticket.module.css'
import Head_ from '../head'
import Header from '../header'
import { ClientesProperties, EmpleadoProperties } from './types';
import { useEffect, useState } from "react";



export default function TicketCreate() {

      const [empleados, setEmpleados]: [Array<EmpleadoProperties> ,any] = useState([])

      const [clientes, setClientes]: [Array<ClientesProperties> ,any] = useState([])
   
      useEffect(() => {
        fetch("https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos")
          .then((res) => res.json())
          .then((data) => {
            setClientes(data)
          })
      }, [])

      useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/employees")
          .then((res) => res.json())
          .then((data) => {
            setEmpleados(data)
            console.log("LOS EMPLEADOS: ", data);
          })
      }, [])    
      
      return (

      <form className={styles.form} action="https://aninfo2c222back-production.up.railway.app/api/tickets" method="post" encType="mult">

      <Head_ nombre='Crear Ticket'></Head_>
      

      <Header></Header>

      <div className={styles.camposForm}>
            <h1>Nuevo Ticket</h1>

            <label htmlFor="titulo">Titulo</label>
            <input type="text" id="titulo" name="titulo" required />
            <br></br>
            
            <label htmlFor="descripcion">Descripcion</label>
            <input type="text" id="descripcion" name="descripcion" required />
            <br></br>
            <label htmlFor="id_responsable">Responsable</label>
           
            <select id="id_responsable" name='id_responsable'>
            {empleados.map((empleado) => ( 
                  <option  value={empleado.legajo}  key={empleado.legajo}>{empleado.nombre} {empleado.apellido} - Legajo: {empleado.legajo}</option>
            ))}
            </select>
            <br></br>

            <label htmlFor="estado">Estado</label>
            <select name='estado'>
                  <option id="estado" value="abierto">Abierto</option>
                  <option id="estado" value="analisis">En Analisis</option>
                  <option id="estado" value="devariado">Derivado</option>
                  <option id="estado" value="resuelto">Resuelto</option>
                  <option id="estado" value="cancelado">Cancelado</option>
            </select>
            <label htmlFor="severidad">Severidad</label>
            <select name='severidad'>
                  <option id="severidad" value="critica">Critica</option>
                  <option id="severidad" value="alta">Alta</option>
                  <option id="severidad" value="media">Media</option>
                  <option id="severidad" value="baja">Baja</option>
            </select>
            <br></br>

            <label htmlFor="id_cliente">Cliente</label>
                 
            <select name = "id_cliente">
            {clientes.map((cliente) => ( 
                  <option id="id_cliente" value={cliente.legajo} key={cliente.legajo}>{cliente.Nombre} {cliente.Apellido} - Legajo: {cliente.legajo}</option>
            ))}
            </select>

            <br></br>
             
            <label htmlFor="medio_contacto">Medio de contacto</label>
            <input type="text" id="medio_contacto" name="medio_contacto" placeholder='email, telefono, paloma'/>
            <br></br>

            <label htmlFor="dato_contacto">Dato de contacto</label>
            <input type="text" id="dato_contacto" name="dato_contacto" placeholder='pepe@gmail.com'/>
            <br></br>

            <label htmlFor="id_producto">Producto</label>
            <select name='id_producto'>
                  <option id="id_producto" value="1">Critica</option>
                  <option id="id_producto" value="2">Alta</option>
                  <option id="id_producto" value="3">Media</option>
                  <option id="id_producto" value="4">Baja</option>
            </select>
            <br></br>

            <label htmlFor="fechaEmision">Fecha de emision</label>
            <input type="date" id="fecha_emision" name="fecha_emision" required/>
            <br></br>

            <label htmlFor="fechaResolucion">Fecha de resolucion</label>
            <input type="date" id="fecha_resolcion" name="fecha_resolcion"/>
            <br></br>

            <div className={styles.botonesView}>
            <button type="reset">Cancelar</button>
            <button type="submit">Guardar</button>
            </div>
            </div>
    </form>
  )
}
