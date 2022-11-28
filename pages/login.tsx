import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/login.module.css'
import Head_ from './head'
import Header from './header'

export default function Login() {
  return (
    <form className={styles.form} action="/" method="post">

    <Head_ nombre='Login'></Head_>

    <h1>Bienvenido a PSA</h1>
    <div className={styles.campoForm}>
        <label htmlFor="usuario">Usuario</label>
        <div className={styles.contenedorInput}>
            <input type="text" id="usuario" name="usuario" required/>
        </div>
    </div>

    <div className={styles.campoForm}>   
        <label htmlFor="constraseña">Constraseña</label>
        <div className={styles.contenedorInput}>
            <input type="password" id="contraseña" name="contraseña" required/>
        </div>
    </div>
    <div className={styles.contenedorBoton}>
        <button type="submit">Ingresar</button>
    </div>
  </form>
        
  )
}
