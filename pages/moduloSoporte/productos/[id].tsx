import Head_ from "../../head";
import Header from "../../header";
import { useRouter } from 'next/router'
import styles from '../../../styles/versiones.module.css'
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductProperties, ProdVerProperties, VersionProperties } from "../../../components/soporte/types";
import VersionCard from "../versionCard";

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



    const [prover, setProver]: [Array<ProdVerProperties>, any] = useState([])

    useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/prodversions")
        .then((res) => res.json())
        .then((data) => {
          setProver(data)
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


    
  

    return (

        <>
        <Head_ nombre='Detalle producto'></Head_>

        <Header></Header>

        <div className={styles.ticketView}>
        
            <div className={styles.camposView}>
                <h1>{producto?.id} - {producto?.nombre}</h1>
                
                
                <div>Fecha de lanzamiento: {producto?.fecha_lanzamiento}</div>
    

            <div className={styles.botonesView}>

                <Link href={"/moduloSoporte/versionCreate/" + id}><button>Agregar version</button></Link>

            </div>  

            </div>


            <div>
                {(prover).filter(i => i.producto_id == Number(id)).map((a) => (
                    <div key={a.id}>
                        <VersionCard titulo={versiones.find(element => element.id == a.version_id)?.nombre}
                        id={versiones.find(element => element.id == a.version_id)?.id}
                        fecha_lanzamiento={versiones.find(element => element.id == a.version_id)?.fecha_lanzamiento.slice(0,10)}
                        activo={0} id_version={0}></VersionCard>
                        
                    </div>
                ))}
            </div>
        

        </div>

        </>
   
   
   )
  }

