import Head_ from '../head'
import Header from '../header'
import styles from '../../styles/proyectos.module.css'


export default function crearProyecto() {
  return(
    
    <>
    <Head_ nombre='Nuevo proyecto'></Head_>
    <Header></Header>
    <main className={styles.main}>
      <div className={styles.containerEspecial}>
          <form action = "">
          <div className = {styles.camposForm}>
            <h1 className={styles.tituloForm}>Nuevo proyecto</h1>
            <div>
              <label htmlFor="fname">Nombre proyecto </label>
              <br/>
              <input type="text"  id="fname" name="firstname" placeholder="Nombre de proyecto" size={50} >
              </input>
            </div>
            <br />
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
            <br />
            <div>
              <label  htmlFor = "Client name">Cliente  </label>
              <br/>
              <input type = "text" id = "projectClient" placeholder="Nombre cliente" size={50}></input>
            </div >
            <br />
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
            <br />
            <div>
              <label htmlFor = "FechaDeInicio"> Fecha de inicio </label>
              <br/>
              <input type = "date" id = "FechaDeInicio" name = "comienzoDeProyecto" size={50}>
              </input>
            </div>
            <br />
            <div>
              <label htmlFor = "FechaDeFin"> Fecha estimada de fin </label>
              <br/>
                <input type = "date" id = "FechaDeFin" name = "finDeProyecto">
                </input>
            </div>
            <br />
            <div>
              <label  htmlFor = "productManager">PM  </label>
              <br/>
              <input type = "text" id = "productManager" placeholder="Nombre PM" size={50}></input>
            </div >
            
            <div className={styles.botonesView}>
              <button type="reset">Cancelar</button>
              <button onClick = {button_function}>Guardar</button>
            </div>
          </div>
              
          </form>
      </div>
    </main>
  </>
  );
}


function button_create_project(){
  alert("Back end creame un proyecto");
  return true;
}

var button_function = button_create_project;