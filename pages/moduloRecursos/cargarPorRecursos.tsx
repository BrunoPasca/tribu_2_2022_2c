import styles from '../../styles/recursos.module.css'
import Header from '../header';
import Head_ from '../head';
import Link from 'next/link';
import { useRouter } from "next/router";
import TablaRecursos from './tablaRecursosProyectos';

export default function cargarPorRecursos() {

    const router = useRouter()

    function handleChange(event: any) {
        router.push("/moduloRecursos/" + event.currentTarget.value)
    }
    return (
        <div className={styles.container}>
            <Header></Header>


            <div className={styles.titulos} style={{ justifyContent: "center" }}>
                <div style={{ justifyContent: "space-between", alignItems: "center", width: "80%" }}>
                    <TablaRecursos></TablaRecursos>
                </div>
            </div>
        </div >
    );
}
