import styles from '../../styles/productCard.module.css'

export default function ProductCard({titulo, id,fecha_lanzamiento,activo}: {titulo:string, id: number, fecha_lanzamiento: string, activo:number}) {

    var estado;

    if(activo == 1){
        estado = "Activo"
    }else{
        estado = "Deprecado"
    }


    return(
        <div className={styles.productCard}>
            <div className={styles.izquierda}>
                <div className={styles.tituloCard}>{id} - {titulo}</div>
                <div className={styles.fechaLanzamiento}>Fecha de lanzamiento: {fecha_lanzamiento}</div>
            </div>
            <div className={styles.derecha}>
                
                <div>Estado: {estado}</div>
            
            </div>
            
        </div>
    );
  }