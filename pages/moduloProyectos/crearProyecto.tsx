import Head_ from '../head'
import Header from '../header'
import styles from '../../styles/proyectos.module.css'


export default function crearProyecto() {
  return(
    
    <>
    <Head_ nombre='Nuevo proyecto'></Head_>
    <Header></Header>
    <div className={styles.container}>



        <form action="una_accion.php" className={styles.form}>
        <div className = {styles.camposForm}>

          <div>
          <label htmlFor="fname">Nombre proyecto </label>
          <br/>
          <input type="text"  id="fname" name="firstname" placeholder="New project name"  >
            </input>

          </div>
          <div>
          <label htmlFor="projectID">ID </label>
          <br/>
          <input type="text"  id="projectID" name="projectid" placeholder="New project id"  >
            </input>
          </div>

          <div>
            <label htmlFor = "projectState">
              Estado 
            </label>
            <br/>
            <select>
                <option disabled selected> Estado</option>
                <option value = "optionDesarrollo"> Desarrollo </option>
                <option value = "optionProduccion"> Producción</option>
                <option value = "optionPostProduccion">Post Producción </option>
            </select>
          </div>

          <div>
            <label  htmlFor = "Client name">Cliente  </label>
            <br/>
            <input type = "text" id = "projectClient" placeholder="A client"></input>
          </div >

          <div>
            <label htmlFor = "ClientType" >
              Tipo de cliente:
            </label>
            <br/>
            <select>
                <option disabled selected> Tipo cliente </option>
                <option > Tipo cliente 1</option>
            </select>
          </div>

          <div>
            <label htmlFor = "FechaDeInicio"> Fecha de inicio </label>
            <br/>
            <input type = "date" id = "FechaDeInicio" name = "comienzoDeProyecto">
            </input>
          </div>

          <div>
            <label htmlFor = "FechaDeFin"> Fecha estimada de fin </label>
            <br/>
              <input type = "date" id = "FechaDeFin" name = "finDeProyecto">
              </input>
          </div>

          <div>
            <label  htmlFor = "productManager">PM  </label>
            <br/>
            <input type = "text" id = "productManager" placeholder="PM"></input>
          </div >
        
          <div className={styles.botonesView}>
            <button type="reset">Cancelar</button>
            <button type="submit">Guardar</button>
          </div>
        </div>
            
        </form>
    </div>
  </>
  );
}