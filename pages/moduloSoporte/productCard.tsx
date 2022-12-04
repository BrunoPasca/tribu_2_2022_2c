import styles from '../../styles/productCard.module.css'

export default function ProductCard({titulo, id,fecha_lanzamiento}: {titulo:string, id: number, fecha_lanzamiento: string}) {

    return(
        <div className={styles.productCard}>
            <div className={styles.tituloCard}>{id} - {titulo}</div>
            <div className={styles.severidadCard}>{fecha_lanzamiento}</div>
        </div>
    );
  }