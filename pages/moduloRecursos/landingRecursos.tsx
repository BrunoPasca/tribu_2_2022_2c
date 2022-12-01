import styles from '../../styles/recursos.module.css'
import Header from '../header';
import Head_ from '../head';
import Link from 'next/link';
import { useRouter } from "next/router";
import Reportes from './reportes';


export default function LandingRecurso() {

    const router = useRouter()

    function handleChange(event: any) {
        router.push("/moduloRecursos/" + event.currentTarget.value)
    }
    return (
        <div className={styles.container}>

            <Head_ nombre='Recursos'></Head_>

            <Header></Header>

            <div className={styles.navbar}>
                <div className={styles.navbarIzq}>
                    <h1>RRHH</h1>
                </div>
            </div>

            <div className={styles.titulos} style={{ justifyContent: "center" }}>
                <div style={{ justifyContent: "space-between" }}>
                    <Link href="./cargarDatos"><button className={styles.select}>Cargar Horas</button></Link>

                    <select onChange={handleChange} className={styles.select}>
                        <option disabled={true} value="" selected>
                            Consultar Recursos
                        </option>
                        <option value={"/cargarPorPersonas"}>Por Persona</option>
                        <option value={"/cargarPorRecursos"}>Por Recurso</option>
                    </select>
                </div>
            </div>
            <Reportes></Reportes>
        </div >
    );
}
