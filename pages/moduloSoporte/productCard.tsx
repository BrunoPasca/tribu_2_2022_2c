import styles from '../../styles/productCard.module.css'

export default function ProductCard({titulo, id,fecha_lanzamiento}: {titulo:string, id: number, fecha_lanzamiento: string}) {

    function deleteById(){
        fetch('https://aninfo2c222back-production.up.railway.app/api/productos/' + id, {
           method: 'DELETE',
         })
   }

    return(
        <div className={styles.productCard}>
            <div className={styles.izquierda}>
                <div className={styles.tituloCard}>{id} - {titulo}</div>
                <div className={styles.fechaLanzamiento}>Fecha de lanzamiento: {fecha_lanzamiento}</div>
            </div>
            <div className={styles.derecha}>
                
                <button onClick={deleteById}>Borrar</button>
            </div>
            
        </div>
    );
  }