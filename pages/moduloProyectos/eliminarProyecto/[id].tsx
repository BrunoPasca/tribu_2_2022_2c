import Head_ from "../../head";
import Header from "../../header";
import { useRouter } from 'next/router'
import styles from '../../../styles/proyectos.module.css'
import path from "path";
import Link from "next/link";

export default function eliminarProyecto(){
    const router = useRouter();
    const {id} = router.query;

/*chequeame que los proyectos existan llamando al backend y comparando con el id*/


    return (
        <>
        <Head_ nombre='Eliminar proyecto'></Head_>
        <Header></Header>
        <main className={styles.main}>
            <form method = "GET" action = {"https://aninfo2c222back-production.up.railway.app/api/proyectos/"+id}>
            <div className={styles.container}>
                <div className={styles.confirmacion}>
                    <h1 className={styles.tituloForm}>¡Atención!</h1>
                    <h3>Está a punto de eliminar el siguiente proyecto: {id}</h3>
                    <h3>¿Desea continuar?</h3>
                </div>

                <div className={styles.botonesView}>
                    <button onClick={function_button}>Confirmar</button>
                    <a href="/moduloProyectos/proyectoView"><button type = "submit">Cancelar</button></a>
                </div>
            </div>
        </form>

        </main>
        </>
    )
}

/*Aca el back tiene que editar los campos*/
function button_press(){
    alert("back end eliminame el proyecto");
    return true;
}
var function_button = button_press;