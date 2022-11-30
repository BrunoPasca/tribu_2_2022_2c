import styles from '../../styles/recursos.module.css'
import Header from '../header';
import Head_ from '../head';
import Link from 'next/link';


export default function LandingRecurso() {

    return (
        <div className={styles.container}>

            <Head_ nombre='Recursos'></Head_>

            <Header></Header>

            <div className={styles.navbar}>
                <div className={styles.navbarIzq}>
                    <h1>RRHH</h1>
                </div>
                <div className={styles.navbarDer}>
                    <input placeholder='Empleado o proyecto'></input>
                    <Link href="./cargarDatos"><button>Cargar Horas</button></Link>
                </div>
            </div>

            <div className={styles.titulos} style={{ justifyContent: "center" }}>
                <div style={{ justifyContent: "space-between" }}>
                    <select className={styles.select}>
                        <option disabled={true} value="">
                            Cargar Horas
                        </option>
                        <option>Horas</option>
                        <option>Licencia</option>
                        <option>Faltas</option>
                    </select>

                    <select className={styles.select}>
                        <option disabled={true} value="">
                            Consultar Recursos
                        </option>
                        <option>Por Persona</option>
                        <option>Por Recurso</option>
                    </select>
                </div>
            </div>
        </div >
    );
}
