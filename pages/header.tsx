import styles from '../styles/header.module.css'

export default function Header() {

    return(
    <header className={styles.header}>
        <div className={styles.headerIzq}>
            <a><div>RRHH</div></a>
            <a><div>Proyectos</div></a>
            <a href="/moduloSoporte/soporte"><div>Soporte</div></a>
        </div>
        
        <div className={styles.headerCen}>
            <a href="/"><div>Home</div></a>


        </div>

        <div className={styles.headerDer}>
            <a><div>Cerrar sesion</div></a>
        </div>
    </header>
    );
  }
