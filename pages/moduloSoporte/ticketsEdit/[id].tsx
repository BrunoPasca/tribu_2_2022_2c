import Head from 'next/head'
import styles from '../../../styles/ticket.module.css'
import Head_ from '../../head'
import Header from '../../header'
import { useRouter } from 'next/router';
import Link from 'next/link';
import ClienteSelect from '../clienteSelect';


export default function TicketEdit() {

    const router = useRouter();
    const {id} = router.query;
    const tickets = [
        {   
        titulo: "Arreglar front",
        id: 1,
        severidad: "Critico",
        estado: "Abierto",
        descripcion:"tengo que arreglar el front porque sino desaprobaremos la materia. Juan ceo quiere que se vea lindo" ,
        datosCliente: "Dasdasdas",
        idCliente: 3,
        medioContacto: "email",
        datoContacto: "julian@gmail",
        nombreProducto: "fasfaf",
        versionProducto: "fasfsafsa",
        fechaEmision: new Date('Jul 12 2011').toDateString(),
        fechaResolucion:new Date('Jul 12 2011').toDateString(),
      
        },
        {   
          titulo: "Hacer sistema de tickets",
          id: 2,
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
          fechaResolucion:"fdafasfsa",
        },
        {   
        titulo: "Vacaciones",
        id: 3,
        severidad: "Critico",
        estado: "Abierto",
        descripcion:"lorem ipsum" ,
        datosCliente: "Dasdasdas",
        idCliente: 3,
        medioContacto: "email",
        datoContacto: "julian@gmail",
        nombreProducto: "fasfaf",
        versionProducto: "fasfsafsa",
        fechaEmision: "fecha efassa",
        fechaResolucion:"fdafasfsa",
        },
        {   
          titulo: "Contar hasta 43",
          id: 4,
          severidad: "Critico",
          estado: "Resuelto",
          descripcion:"lorem ipsum" ,
          datosCliente: "Dasdasdas",
          idCliente: 3,
          medioContacto: "email",
          datoContacto: "julian@gmail",
          nombreProducto: "fasfaf",
          versionProducto: "fasfsafsa",
          fechaEmision: "fecha efassa",
          fechaResolucion:"fdafasfsa",
      
        },
      
        {   
          titulo: "me gusta mucho escribir un titulo largo asi no entra y rompe todo",
          id: 5,
          severidad: "Critico",
          estado: "Cancelado",
          descripcion:"lorem ipsum" ,
          datosCliente: "Dasdasdas",
          idCliente: 3,
          medioContacto: "email",
          datoContacto: "julian@gmail",
          nombreProducto: "fasfaf",
          versionProducto: "fasfsafsa",
          fechaEmision: "fecha efassa",
          fechaResolucion:"fdafasfsa",
      
        },
        {   
          titulo: "Aprender next",
          id: 6,
          severidad: "Critico",
          estado: "Derivado",
          descripcion:"lorem ipsum" ,
          datosCliente: "Dasdasdas",
          idCliente: 3,
          medioContacto: "email",
          datoContacto: "julian@gmail",
          nombreProducto: "fasfaf",
          versionProducto: "fasfsafsa",
          fechaEmision: "fecha efassa",
          fechaResolucion:"fdafasfsa",
      
        },
        {   
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
          fechaResolucion:"fdafasfsa",
      
        },
      ]
    
    // ya tengo el id ahora solo tendria que hacer get ticket by id
    //const ticket = getTicketById(id);

    const ticket = tickets.find(t => t.id == Number(id)) 


    return (
      <form className={styles.form} action="/moduloSoporte/soporte" method="post">
      
      <Head_ nombre='Editar Ticket'></Head_>

      <Header></Header>
      
      <div className={styles.camposForm}>
            <h1>{ticket?.id} - {ticket?.titulo}</h1>

            <label htmlFor="last">Descripcion</label>
            <input type="text" id="last" name="last" required value={ticket?.descripcion}/>
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
            <input type="text" id="datosCliente" name="datosCliente" value={ticket?.datosCliente}/>
            <br></br>
            
            <label htmlFor="medioContacto">Medio de contacto</label>
            <input type="text" id="medioContacto" name="medioContacto" value={ticket?.medioContacto}/>
            <br></br>

            <label htmlFor="datoContacto">Dato de contacto</label>
            <input type="text" id="datoContacto" name="datoContacto" value={ticket?.datoContacto}/>
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
            <input type="date" id="fechaEmision" name="fechaEmsion" required />
            <br></br>

            <label htmlFor="fechaResolucion">Fecha de resolucion</label>
            <input type="date" id="fechaResolcion" name="fechaResolcion"/>
            <br></br>

            <div className={styles.botonesView}>
            <Link href={'/moduloSoporte/tickets/' + id}> <button type="reset">Cancelar</button> </Link>
                  <button type="submit">Guardar</button>
            <div/>
        
      </div>
      </div>
      </form>
    )
  }
  