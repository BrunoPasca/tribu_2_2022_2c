import Head_ from "../../head";
import Header from "../../header";
import { useRouter } from 'next/router'
import styles from '../../../styles/versiones.module.css'
import Link from "next/link";
import { useEffect, useState } from "react";
import { ClientesProperties, ClientesYProductosProperties, ProductProperties, ProdVerProperties, VersionProperties } from "../../../components/soporte/types";
import VersionCard from "../versionCard";
import HeaderSoporte from "../../headerSoporte";
import ClienteProductoCard from "../productoClienteCard";

export default function TicketView() {
    
    const router = useRouter();
    const {id} = router.query;
    var cambioDeEstado;


    const [producto, setProducto]: [any ,any] = useState(0)


    useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/productos/" + id )

        .then((res) => res.json())
        .then((data) => {
        
          setProducto(data)        
        })
    }, [])

    if(producto?.activo == 1){
        cambioDeEstado = "Deprecar"
    }
    else{
        cambioDeEstado = "Activar"
    }



    const [clientes, setClientes]: [Array<ClientesProperties>, any] = useState([])

    useEffect(() => {
      fetch("https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/clientes-psa/1.0.0/m/api/clientes")
        .then((res) => res.json())
        .then((data) => {
          setClientes(data)
        })
    }, [])

    const cliente = clientes.find(c => c.id == Number(id))

    const [productos, setProductos]: [Array<ProductProperties>, any] = useState([])

    useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/productos")
        .then((res) => res.json())
        .then((data) => {
          setProductos(data)
        })
    }, [])


    const [versiones, setVersiones]: [Array<VersionProperties>, any] = useState([])

    useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/versions")
        .then((res) => res.json())
        .then((data) => {
          setVersiones(data)
        })
    }, [])

    const [clientesYProductos, setClientesYProductos]: [Array<ClientesYProductosProperties>, any] = useState([])

    useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/cliente_prod")
        .then((res) => res.json())
        .then((data) => {
          setClientesYProductos(data)
        })
    }, [])

    
  

    return (

        <>
        <Head_ nombre='Detalle producto'></Head_>

        <HeaderSoporte></HeaderSoporte>

        <div className={styles.ticketView}>
        
            <div className={styles.camposView}>
                <h1>ID: {cliente?.id} - CUIT: {cliente?.CUIT}</h1>
                
                    

            <div className={styles.botonesView}>

                <Link href={"/moduloSoporte/agregarProductoACliente/" + id}><button>Agregar Producto</button></Link>

            </div>  

       
                   
            </div>

            <div>
                {(clientesYProductos).filter(i => i.id_cliente == Number(id)).map((a) => (
                    <div key={a.id_producto}>
                        <ClienteProductoCard 
                        titulo= {productos.find(element => element.id == a.id_producto)?.nombre}
                        id={productos.find(element => element.id == a.id_producto)?.id} 
                        fecha_lanzamiento={productos.find(element => element.id == a.id_producto)?.fecha_lanzamiento.slice(0,10)}  activo={0} 
                        id_version={productos.find(element => element.id == a.id_producto)?.id_version}></ClienteProductoCard>
                        
                       
                        
                    </div>
                ))}
            </div>
        
        

        </div>

        </>
   
   
   )
  }

