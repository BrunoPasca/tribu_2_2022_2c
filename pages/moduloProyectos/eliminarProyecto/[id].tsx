import Head_ from "../../head";
import Header from "../../header";
import { useRouter } from 'next/router'
import styles from '../../../styles/proyectos.module.css'
import path from "path";
import Link from "next/link";

export default function eliminarProyecto(){
    const router = useRouter();
    const {id} = router.query;


    function deleteById(){
        fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos/"+id, {
           method: 'DELETE',
         })
         alert("Proyecto eliminado");
   }




    return (
        <>
        <Head_ nombre='Eliminar proyecto'></Head_>
        <Header></Header>
        <main className={styles.main}>
            <form action ='' >
            <div className={styles.container}>
                <div className={styles.confirmacion}>
                    <h1 className={styles.tituloForm}>¡Atención!</h1>
                    <h3>Está a punto de eliminar el siguiente proyecto: {id}</h3>
                    <h3>¿Desea continuar?</h3>
                </div>

                
            </div>
        </form>
        <div className={styles.botonesView}>
                <a href="/moduloProyectos/proyectos">
                    <button onClick = {deleteById}>Confirmar</button>
                </a>
                
                <a href="/moduloProyectos/proyectos"><button >Cancelar</button></a>
                </div>
        
        </main>
        </>
    )
}
