import Head from 'next/head'
import styles from '../../styles/ticket.module.css'
import Head_ from '../head'
import Header from '../header'
import ClienteSelect from './clienteSelect';
import { ClientesProperties } from './types';


export default function TicketCreate() {

  
      return (

      <form className={styles.form} action="https://aninfo2c222back-production.up.railway.app/api/tickets" method="post">

      <Head_ nombre='Crear Ticket'></Head_>
      

      <Header></Header>

      <div className={styles.camposForm}>
            <h1>Nuevo Ticket</h1>

            <label htmlFor="first">Titulo</label>
            <input type="text" id="first" name="first" required />
            <br></br>
            
            <label htmlFor="last">Descripcion</label>
            <input type="text" id="last" name="last" required />
            <br></br>
            <label htmlFor="last">Responsable</label>
            <select>
                  <option value="juan1">juan1</option>
                  <option value="juan2">juan2</option>
                  <option value="juan3">juan3</option>
            </select>
            <br></br>

            <label htmlFor="last">Estado</label>
            <select>
                  <option value="abierto">Abierto</option>
                  <option value="analisis">En Analisis</option>
                  <option value="devariado">Derivado</option>
                  <option value="resuelto">Resuelto</option>
                  <option value="cancelado">Cancelado</option>
            </select>
            <label htmlFor="last">Severidad</label>
            <select>
                  <option value="critica">Critica</option>
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
            </select>
            <br></br>

            <label htmlFor="last">Cliente</label>
            
            <ClienteSelect></ClienteSelect>
            
            <br></br>
            
            <label htmlFor="datosCliente">Datos del cliente</label>
            <input type="text" id="datosCliente" name="datosCliente" />
            <br></br>
            
            <label htmlFor="medioContacto">Medio de contacto</label>
            <input type="text" id="medioContacto" name="medioContacto" placeholder='email, telefono, paloma'/>
            <br></br>

            <label htmlFor="datoContacto">Dato de contacto</label>
            <input type="text" id="datoContacto" name="datoContacto" placeholder='pepe@gmail.com'/>
            <br></br>

            <label htmlFor="last">Producto</label>
            <select>
                  <option value="critica">Critica</option>
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
            </select>
            <br></br>

            <label htmlFor="fechaEmision">Fecha de emision</label>
            <input type="date" id="fechaEmision" name="fechaEmsion" required/>
            <br></br>

            <label htmlFor="fechaResolucion">Fecha de resolucion</label>
            <input type="date" id="fechaResolcion" name="fechaResolcion"/>
            <br></br>

            <div className={styles.botonesView}>
            <button type="reset">Cancelar</button>
            <button type="submit">Guardar</button>
            </div>
            </div>
    </form>
  )
}
/*
titulo: "Vamos river",
id: 7,
severidad: "Critico",
estado: "En analisis",
descripcion:"lorem ipsum" ,
datosCliente: "Dasdasdas",
idCliente: 3,
medioContacto: "email",
datoContacto: "julian@gmail",
nombreProducto: "fasfaf",
versionProducto: "fasfsafsa",
fechaEmision: "fecha efassa",
fechaResolucion:"fdafasfsa",*/