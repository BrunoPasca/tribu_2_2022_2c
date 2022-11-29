import Head_ from '../../head'
import Header from '../../header'
import styles from '../../../styles/proyectos.module.css'
import sup_styles from '../../../styles/soporte.module.css'
import { useRouter } from 'next/router'
import { getProyectos } from '../../moduloRecursos/services/ProyectoService'

export default function proyectoEdit(){

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
                    <button className = {styles.negative_button_style}>Cancelar</button>
                </a>
            <div >
            <br>
            </br>
                <button form = "form_id" className = {styles.positive_button_style}>
                    Editar proyecto
                </button>
            </div>
            </div>
        </div>
    </div>

        <form action="" id="form_id" >       
            <div className = {styles.four_column_grid}>
                <label id="estadoId">Estado del proyecto</label>
                <select>
                    <option disabled selected> {proyecto.estado}</option>
                    <option value = "optionDesarrollo"> Desarrollo </option>
                    <option value = "optionProduccion"> Producción</option>
                    <option value = "optionPostProduccion">Post Producción </option>
                </select>
                <label id="nombreid">Nombre del cliente</label>
                <input type="text" id = "nombreid" placeholder = "Nuevo nombre"></input>


                <label id = "pmid">PM</label>
                <input type="text" id = "pmid" placeholder = "PM"></input>
                <label id = "cuit">CUIT</label>
                <input type="text" id = "cuit" placeholder = "CUIT"></input>

                <label id = "fechainitid"> Fecha de inicio real</label>
                <input type="date" id= "fechainitid" ></input>
                <label id="contactoid">Contacto</label>
                <input type="text" id="contactoid" placeholder = "contacto@mail.com"></input>

                <label id = "fechafinid">Fecha de fin estimada</label>
                <input type="date" id= "fechafinid" ></input>
                <label id = "tipocliente">Tipo de cliente</label>
                <input type = "text" id = "tipocliente" placeholder = "Tipo"></input>

                <label id= "horasinsumidas">Horas insumidas</label>
                <input type="number" min = "0"></input>
                <label id="proyectoSoporteId">Proyecto de soporte</label>
                <select>
                    <option value = "opcionNo">No</option>
                    <option value = "opcionSi">Si</option>
                </select>
            </div>
            
            
        </form>  
        
    </>
    )
}