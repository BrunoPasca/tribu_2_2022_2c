import styles from '../../styles/productCard.module.css'
import Link from 'next/link';


export default function ClienteCard({id,razon_social,CUIT}: {id: number, razon_social: string, CUIT:string}) {

   

    return(
        <div className={styles.productCard}>
            <div className={styles.izquierda}>
                <div className={styles.tituloCard}>{id} - {razon_social}</div>
            </div>

            <div className={styles.medio}>  
            {CUIT}
            </div>
            
            <div className={styles.derecha}>
            
            </div>


            
        </div>
    );
  }