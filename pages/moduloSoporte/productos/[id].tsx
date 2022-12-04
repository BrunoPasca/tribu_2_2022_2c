import Head_ from "../../head";
import Header from "../../header";
import { useRouter } from 'next/router'
import styles from '../../../styles/ticket.module.css'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TicketView() {
    
    const router = useRouter();
    const {id} = router.query;



    const [producto, setProducto]: [any ,any] = useState(0)


    useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/productos/" + id )

        .then((res) => res.json())
        .then((data) => {
          setProducto(data)        
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
   

                <p>Versiones</p>


    
            </div>

   

        </div>

        </>
   
   
   )
  }

