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
                            src="/../public/logoPSA.png"
                            height={74}
                            width={139}
                            alt={''}
                        />
                    </Link>
                </div>
                <div className={styles.headerIzq}>
                    <Link href="/moduloRecursos/landingRecursos"><div>RRHH</div></Link>
                    <a><div>Proyectos</div></a>
                    <Link href="/moduloSoporte/soporte"><div>Soporte</div></Link>
                </div>

                <div className={styles.headerDer}>
                    <a><div>Cerrar sesion</div></a>
                </div>
            </header>
        </div>
    );
}
