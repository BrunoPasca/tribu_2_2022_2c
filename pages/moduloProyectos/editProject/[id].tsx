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
        

        <div className={styles.container}>

        <div className = {sup_styles.navbar}>
            <div className={sup_styles.navbarIzq}> 
                <h1>Editar proyecto   : {id}</h1>
            </div>
            <div className = {sup_styles.navbarDer}>
                <a href="/moduloProyectos/proyectos">
                    <button className = {styles.negative_button_style}>Regresar</button>
                </a>
            <div >
            <br>
            </br>
                <button form = "form_id" onClick = {button_press} className = {styles.positive_button_style}>
                    Editar proyecto
                </button>
            </div>
            </div>
        </div>
    

        <form action  = "" id="form_id" >       
            <div className = {styles.four_column_grid}>
                <label id="estadoId">Estado del proyecto</label>
                <select id = "estadoProyecto">
                    <option disabled selected> {proyecto.estado}</option>
                    <option value = "Desarrollo"> Desarrollo </option>
                    <option value = "Produccion"> Producción</option>
                    <option value = "PostProduccion">Post Producción </option>
                </select>
                <label >Nombre del cliente</label>
                <input type="text" id = "nombreid" placeholder = "Nuevo nombre"></input>


                <label >PM</label>
                <input type="text" id = "pmid" placeholder = "PM"></input>
                <label >CUIT</label>
                <input type="text" id = "cuit" placeholder = "CUIT"></input>

                <label > Fecha de inicio real</label>
                <input type="date" id= "fechainitid" ></input>
                <label >Contacto</label>
                <input type="text" id="contactoid" placeholder = "contacto@mail.com"></input>

                <label >Fecha de fin estimada</label>
                <input type="date" id= "fechafinid" ></input>
                <label >Tipo de cliente</label>
                <input type = "text" id = "tipocliente" placeholder = "Tipo"></input>

                <label >Horas insumidas</label>
                <input type="number" id= "horasinsumidas" min = "0"></input>
                <label id="proyectoSoporteId">Proyecto de soporte</label>
                <select>
                    <option value = "No">No</option>
                    <option value = "Si">Si</option>
                </select>
            </div>
            
            
        </form>  
        </div> 
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