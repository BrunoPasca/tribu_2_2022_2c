import styles from '../../styles/recursos.module.css'
import Header from '../header';
import Head_ from '../head';
import Link from 'next/link';
import { useRouter } from "next/router";
import TablaPersonas from './tablaPersonas';

export default function CargarPorPersonas() {

    const router = useRouter()

    function handleChange(event: any) {
        router.push("/moduloRecursos/" + event.currentTarget.value)
    }
    return (
        <div className={styles.container}>
            <Header></Header>


            <div className={styles.titulos} style={{ justifyContent: "center" }}>
                <div style={{ justifyContent: "space-between", alignItems: "center", width: "80%" }}>
                    <TablaPersonas></TablaPersonas>
                </div>
            </div>
        </div >
    );
}
