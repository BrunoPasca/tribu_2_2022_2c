import styles from '../../styles/productCard.module.css'
import Link from 'next/link';


export default function VersionCard({titulo, id,fecha_lanzamiento,activo,id_version}: {titulo:string | undefined , id: number | undefined, fecha_lanzamiento: string | undefined, activo:number | undefined, id_version:number| undefined}) {

    var estado;
    var aux:number;

    if(activo == 1){
        estado = "Activo"
        aux = 0
    }else{
        estado = "Deprecado"
        aux = 1
    }

    function cambiarEstado(){

        let data = {
            fecha_lanzamiento: fecha_lanzamiento,
            nombre: titulo,
            activo: aux,
        }

        console.log(data)

        fetch("https://aninfo2c222back-production.up.railway.app/api/versions/" + id, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
              'Content-Type': 'application/json'
            }
          })

          alert("Se cambio el estado del producto correctamente")
          location.reload()
          location.href = "moduloSoporte/soporte"
   }



    return(
        <div className={styles.productCard}>
            <div className={styles.izquierda}>
                <div className={styles.tituloCard}>{id} - {titulo}</div>
                <div className={styles.fechaLanzamiento}>Fecha de lanzamiento: {fecha_lanzamiento}</div>
            </div>

            <div className={styles.medio}>  
            </div>
            
            <div className={styles.derecha}>

                
                <div>Estado: {estado}</div>
                

                <button onClick={cambiarEstado}>Cambiar estado</button>
            
            </div>


            
        </div>
    );
  }