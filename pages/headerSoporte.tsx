import styles from '../styles/header.module.css'
import Link from 'next/link';
import Image from 'next/image'

export default function HeaderSoporte() {

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
                    <Link href="/moduloSoporte/soporte"><div>Tickets</div></Link>
                    <Link href="/moduloSoporte/productos"><div>Productos</div></Link>
                    <Link href="/moduloSoporte/clientes"><div>Clientes</div></Link>
                </div>

                <div className={styles.headerDer}>
                    <Link href="/login"><div>Cerrar sesion</div></Link>
                </div>
            </header>
        </div>
    );
}
