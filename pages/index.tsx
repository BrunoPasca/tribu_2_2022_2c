import styles from '../styles/Home.module.css'
import Head_ from './head'
import Header from './header'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head_ nombre='Home'></Head_>


      <Header></Header>

      <main className={styles.main}>


        <div className={styles.grid}>

          <Link href="/moduloSoporte/soporte" className={styles.card}>
            <div>
              <h2>Soporte</h2>
              <ul>
                <li>Manejo de Tickets</li>
                <li>Administracion de solicitudes de clientes</li>
                <li>Creacion de tareas a partir de tickets</li>
              </ul>
            </div>
          </Link>

          <Link href="/moduloRecursos/landingRecursos" className={styles.card}>
            <h2>Recursos Humanos</h2>
            <ul>
              <li>Manejo de Recursos Humanos</li>
              <li>Sistema de carga de horas</li>
              <li>Carga de vacaciones y licencias</li>
            </ul>
          </Link>

          <Link
            href=""
            className={styles.card}
          >
            <h2>Proyectos</h2>
            <ul>
              <li>Manejo de Proyectos</li>
              <li>Administracion de tareas dentro de proyectos</li>
              <li>Integraciones con modulos relacionados</li>
            </ul>
          </Link>

        </div>
      </main>

    </div>
  )
}
