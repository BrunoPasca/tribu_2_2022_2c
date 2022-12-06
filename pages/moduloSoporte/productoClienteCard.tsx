import styles from '../../styles/productCard.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { VersionProperties } from '../../components/soporte/types';


export default function ClienteProductoCard({titulo, id,fecha_lanzamiento,activo,id_version}: {titulo:string | undefined , id: number | undefined, fecha_lanzamiento: string | undefined, activo:number, id_version:number| undefined}) {

    const [versiones, setVersiones]: [Array<VersionProperties>, any] = useState([])

    useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/versions")
        .then((res) => res.json())
        .then((data) => {
          setVersiones(data)
        })
    }, [])

    const version = versiones.find(element => element.id == id_version)
  



    return(
        <div className={styles.productCard}>
            <div className={styles.izquierda}>
                <div className={styles.tituloCard}>{id} - {titulo}</div>
                <div className={styles.fechaLanzamiento}>Fecha de lanzamiento: {fecha_lanzamiento}</div>
            </div>

            <div className={styles.medio}>  
            Version: {version?.nombre}

            </div>
            
            <div className={styles.derecha}>

    
            
            </div>


            
        </div>
    );
  }