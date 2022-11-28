import styles from '../../styles/soporte.module.css'
import Header from '../header';
import Head_ from '../head';


export default function LandingRecurso() {

    return (<div className={styles.container}>

        <Head_ nombre='Recursos'></Head_>

        <Header></Header>

        <div className={styles.navbar}>
            <div className={styles.navbarIzq}>
                <h1>Recursos</h1>
            </div>
            <div className={styles.navbarDer}>
                <input placeholder='ingrese un nombre'></input>
                <select>
                    <option>Creador</option>
                    <option>Resolutor</option>
                    <option>Responsable</option>
                    <option>Cliente</option>
                </select>

                <button>Filtrar</button>

            </div>
        </div>

        <div className={styles.titulos}>
            <div>

            </div>
        </div>
    </div>
    );
}
