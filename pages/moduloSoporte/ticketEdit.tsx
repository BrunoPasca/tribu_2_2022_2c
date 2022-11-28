import Head from 'next/head'
import styles from '../../styles/ticket.module.css'
import Head_ from '../head'
import Header from '../header'


export default function TicketEdit() {
    return (
      <form className={styles.form} action="/moduloSoporte/soporte" method="post">
      
      <Head_ nombre='Editar Ticket'></Head_>

      <Header></Header>
      
      <div className={styles.camposForm}>
            <h1>Titulo del ticket</h1>

            <label htmlFor="last">Descripcion</label>
            <input type="text" id="last" name="last" required placeholder="descrpccion del ticket bla bla"/>
            <br></br>
            <label htmlFor="last">Responsable</label>
            <select>
                  <option value="juan1">juan1</option>
                  <option value="juan2">juan2</option>
                  <option value="juan3">juan3</option>
            </select>
            <br></br>
      
            <label htmlFor="last">Estado</label>
            <select>
                  <option value="abierto">Abierto</option>
                  <option value="analisis">En Analisis</option>
                  <option value="devariado">Derivado</option>
                  <option value="resuelto">Resuelto</option>
                  <option value="cancelado">Cancelado</option>
            </select>
            <label htmlFor="last">Severidad</label>
            <select>
                  <option value="critica">Critica</option>
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
            </select>
            <br></br>
      
            <label htmlFor="last">Cliente</label>
            <select>
                  <option value="abierto">Abierto</option>
                  <option value="analisis">En Analisis</option>
                  <option value="devariado">Derivado</option>
                  <option value="resuelto">Resuelto</option>
                  <option value="cancelado">Cancelado</option>
            </select>
            <label htmlFor="last">Producto</label>
            <select>
                  <option value="critica">Critica</option>
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
            </select>
            <br></br>
            <button type="reset">Cancelar</button>
            <button type="submit">Guardar</button>
        </div>
      </form>
    )
  }
  