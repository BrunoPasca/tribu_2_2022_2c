import Head_ from "../../head";
import Header from "../../header";
import { useRouter } from 'next/router'
import styles from '../../../styles/ticket.module.css'
import path from "path";

export default function TicketView() {

    //aca tendria que haber un get ticket by id
    
    const router = useRouter();
    const {id} = router.query;

    const tickets = [
        {   
        titulo: "string",
        id: 1,
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
          titulo: "dasdasda",
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
        titulo: "aaaa",
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
          titulo: "strifsaasasfasfng",
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
          titulo: "strifsaasasfasfng",
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
          titulo: "fasfsasaf safasassaf nnasjf nasjfnasjn fjnasjn  fjansjnfsajn",
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

        <>
        <Head_ nombre='Ticket'></Head_>

        <Header></Header>

        <div className={styles.ticketView}>
        
            <div className={styles.camposView}>
                <h1>{ticket?.id} - {ticket?.titulo}</h1>
                
                
                <div>Severidad: {ticket?.severidad}</div>
                <div>Estado: {ticket?.estado}</div>
                <div>Descripcion: {ticket?.descripcion}</div>
                
                <div>Datos del cliente: {ticket?.datosCliente}</div>
                <div>ID CLIENTE: {ticket?.idCliente}</div>
            
                <div>Medio de contacto: {ticket?.medioContacto}</div>
                <div>Datos de contacto: {ticket?.datoContacto}</div>
                <div>Nombre del producto: {ticket?.nombreProducto}</div>
                <div>Version del producto: {ticket?.versionProducto}</div>

                <div>Fecha de emision: {ticket?.fechaEmision}</div>
                <div>Fecha de resolucion: {ticket?.fechaResolucion}</div>

                <div className={styles.botonesView}>
                    <button>Eliminar</button>
                    <a href='/moduloSoporte/ticketEdit'><button>Editar</button></a>
                    <button>Crear tarea</button>
                </div>
            </div>
        </div>

        </>
   
   
   )
  }

