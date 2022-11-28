import styles from '../../styles/soporte.module.css'
import Header from '../header';
import Head_ from '../head';


export default function LandingRecurso() {

    return (<div className={styles.container}>

        <Head_ nombre='Recursos'></Head_>

        <Header></Header>

        <div className={styles.navbar}>
            <div className={styles.navbarIzq}>
                <h1>RRHH</h1>

            </div>
            <div className={styles.navbarDer}>
                <input placeholder='Empleado o proyecto'></input>
                <button>Cargar Horas</button>

            </div>
        </div>

        <div className={styles.titulos}>
            <div>
                <select>
                    <option disabled={true} value="">
                        Cargar Horas
                    </option>
                    <option>Horas</option>
                    <option>Licencia</option>
                    <option>Faltas</option>
                </select>

                <select>
                    <option disabled={true} value="">
                        Consultar Recursos
                    </option>
                    <option>Por Persona</option>
                    <option>Por Recurso</option>
                </select>
            </div>
        </div>
    </div>
    );
}
