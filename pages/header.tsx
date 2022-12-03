import styles from '../styles/header.module.css'
import Link from 'next/link';
import Image from 'next/image'

export default function Header() {

    return (
        <div>
            <header className={styles.header}>
                <div>
                    <Link href="/">
                        <Image
                            priority
                            src="/logoPSA.png"
                            height={74}
                            width={139}
                            alt={''}
                        />
                    </Link>
                </div>
                <div className={styles.headerIzq}>
                    <Link href="/moduloRecursos/landingRecursos"><div>RRHH</div></Link>
                    <Link href="/moduloProyectos/proyectos"><div>Proyectos</div></Link>
                    <Link href="/moduloSoporte/soporte"><div>Soporte</div></Link>
                </div>

                <div className={styles.headerDer}>
                    <Link href="/login"><div>Cerrar sesion</div></Link>
                </div>
            </header>
        </div>
    );
}
