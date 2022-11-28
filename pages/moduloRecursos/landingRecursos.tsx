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
                <input placeholder='Empleado o p royecto'></input>
                <button>Cargar Horas</button>

            </div>
        </div>

        <div className={styles.titulos}>
            <div>

            </div>
        </div>
    </div>
    );
}
