import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function View() {
    return (

        <><header className={styles.header}>
            <p className={styles.headerIzq}>PSA</p>
        </header>
        
        <main className={styles.view}>

        <h1>ID - TITULO DEL TICKET</h1>
        
        
        <div>Criticidad: LA CRITICIDAD</div>
        <div>Estado: EL ESTADO</div>
        <div>Descripcion: fasjfasjbfjasbfjbas</div>
        <div className={styles.datosCliente}>
            <div>Datos del cliente: SDFKNASFNASKJFNAS</div>
            <div>ID CLIENTE: 3449043I295</div>
        </div>
        <div>Medio de contacto: Email</div>
        <div>Datos de contacto: julian@gmail.com</div>
        <div>Nombre del producto: dasdasd</div>
        <div>Version del producto: 124</div>

        <div>
            <button>Eliminar</button>
            <a href='/edit'><button>Editar</button></a>
            <button>Crear tarea</button>
        </div>

        </main>
        
        </>
   
   
   )
  }