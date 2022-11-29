import Head_ from "../../head";
import Header from "../../header";
import { useRouter } from 'next/router'
import styles from '../../../styles/proyectos.module.css'
import path from "path";
import Link from "next/link";

export default function eliminarProyecto(){
    const router = useRouter();
    const {id} = router.query;
    return (
        <>
        <Head_ nombre='Eliminar proyecto'></Head_>
        <Header></Header>

        <div className={styles.new_project_window}>
        <div>
                    Confirmacion. Desea eliminar el proyecto: {id}?
        </div>
        <button className = {styles.positive_button_style}>
                        Confirmar
        </button>
        <a href="/moduloProyectos/proyectoView">
        <button className = {styles.negative_button_style}>
                        Cancelar
        </button>
        </a>
     
        </div>
        </>

        

    )
}