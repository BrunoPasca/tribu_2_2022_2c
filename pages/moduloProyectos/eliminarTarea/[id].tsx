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
        <Head_ nombre='Eliminar tarea'></Head_>
        <Header></Header>

        <div className={styles.new_project_window}>
        <div>
                    Confirmacion. Desea eliminar la tarea: {id}?
        </div>
        <a href= "/moduloProyectos/proyectoView">
        <button onClick = {function_button}className = {styles.positive_button_style}>
                        Confirmar
        </button>
        </a>
        
        <a href="/moduloProyectos/proyectoView">
        <button className = {styles.negative_button_style}>
                        Cancelar
        </button>
        </a>
     
        </div>
        </>

        

    )
}

/*Aca el back tiene que editar los campos*/
function button_press(){
    alert("back end eliminame la tarea");
    return true;
}
var function_button = button_press;