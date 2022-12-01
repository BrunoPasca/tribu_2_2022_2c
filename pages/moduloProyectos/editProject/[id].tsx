import Head_ from '../../head'
import Header from '../../header'
import styles from '../../../styles/proyectos.module.css'
import sup_styles from '../../../styles/soporte.module.css'
import { useRouter } from 'next/router'
import { getProyectos } from '../../moduloRecursos/services/ProyectoService'
import { createSemanticDiagnosticsBuilderProgram } from 'typescript'



export default function proyectoEdit(this: any){

    const router = useRouter();
    const {id} = router.query;

    const array_proyectos = [
        {
            nombre: "unNombre",
            id: 1,
            estado : "unEstado",
            cliente : "nombreCliente",
            tipoCliente :"tipoCliente",
            fechaInicio : "dd-mm-yyyy",
            fechaEstimadaFin: "dd-mm-yyyy",
            pm : "Pm"
          }
          ,
          {
            nombre: "unNombre",
            id: 2,
            estado : "unEstado",
            cliente : "nombreCliente",
            tipoCliente :"tipoCliente",
            fechaInicio : "dd-mm-yyyy",
            fechaEstimadaFin: "dd-mm-yyyy",
            pm : "Pm"
          }
          ,
          {
            nombre: "unNombre",
            id: 3,
            estado : "unEstado",
            cliente : "nombreCliente",
            tipoCliente :"tipoCliente",
            fechaInicio : "dd-mm-yyyy",
            fechaEstimadaFin: "dd-mm-yyyy",
            pm : "Pm"
          }
    ]

  const proyecto =  {
    nombre: "unNombre",
    id: 1,
    estado : "unEstado",
    cliente : "nombreCliente",
    tipoCliente :"tipoCliente",
    fechaInicio : "dd-mm-yyyy",
    fechaEstimadaFin: "dd-mm-yyyy",
    pm : "Pm"
  }

  const target_proyecto = array_proyectos.find(t => t.id == Number(id));
  /*proteccion por si llegan a tratar de acceder a un proyecto indefinido*/
  if (target_proyecto == undefined){
    return(
          <>
          <Head_ nombre='Invalid page'>
            </Head_>
            <Header></Header>
            <div>
              La pagina a la que se quiere acceder no existe
            </div>
            <a href = "/moduloProyectos/proyectos">
            <button>Regresar a proyectos </button>
            </a>
          </>
           
    )
  }

    return(
    <>
            <Head_ nombre='Editar proyecto'>
            </Head_>
            <Header></Header>
        
      <main className={styles.main}>
        <div className={styles.container}>    
          <h1 className={styles.tituloEdit}>Editar proyecto {id}</h1>
          <form action= "" id="form_id">   
            <div className={styles.camposForm}>
              <div>
                <label id="estadoId">Estado del proyecto</label>
              </div>
                <select id = "estadoProyecto">
                    <option disabled selected> {proyecto.estado}</option>
                    <option value = "Desarrollo"> Desarrollo </option>
                    <option value = "Produccion"> Producción</option>
                    <option value = "PostProduccion">Post Producción </option>
                </select>
                <div>
                  <label >Nombre del cliente</label>
                </div>
                  <input type="text" id = "nombreid" placeholder = "Nuevo nombre" size={50}></input>
                <div>
                  <label >PM</label>
                </div>
                  <input type="text" id = "pmid" placeholder = "PM" size={50}></input>
                <div>
                  <label >CUIT</label>
                </div>
                  <input type="text" id = "cuit" placeholder = "CUIT" size={50}></input>
                <div>
                  <label > Fecha de inicio real</label>
                </div>
                  <input type="date" id= "fechainitid" ></input>
                <div>
                  <label >Contacto</label>
                </div>
                  <input type="text" id="contactoid" placeholder = "contacto@mail.com" size={50}></input>
                <div>
                  <label >Fecha de fin estimada</label>
                </div>
                  <input type="date" id= "fechafinid" ></input>
                <div>
                  <label >Tipo de cliente</label>
                </div>
                  <input type = "text" id = "tipocliente" placeholder = "Tipo" size={50}></input>
                <div>
                  <label >Horas insumidas</label>
                </div>
                  <input type="number" id= "horasinsumidas" min = "0"></input>
                <div>
                  <label id="proyectoSoporteId">Proyecto de soporte</label>
                </div>
                  <select>
                      <option value = "No">No</option>
                      <option value = "Si">Si</option>
                  </select>
            </div>    

            <div className={styles.botonesView}>
              <a href="/moduloProyectos/proyectos"><button>Cancelar</button></a>
              <button form = "form_id" onClick = {button_press}>Agregar</button>    
            </div>
          </form>  
        </div>
      </main> 
    </>
    )
}





function button_press(){
  alert("Back end tiene que hacer algo "); 
    var estado_proyecto = document.getElementById('estadoProyecto').value; 
    var nombre_ciente = document.getElementById('nombreid').value;
    var pm = document.getElementById('pmid').value;
    var cuit = document.getElementById('cuit').value;
    var fecha_inicio_real  = document.getElementById('fechainitid').value;
    var fecha_fin_estimada = document.getElementById('fechafinid').value;
    var tipo_cliente = document.getElementById('tipocliente').value;
    var horas_insumidas = document.getElementById('horasinsumidas').value;
    var proyectoSoporte  = document.getElementById('proyectoSoporteId').value;
    return true;
}
var function_button = button_press;