import Head_ from '../../head'
import Header from '../../header'
import styles from '../../../styles/proyectos.module.css'
import sup_styles from '../../../styles/soporte.module.css'
import { useRouter } from 'next/router'
import { createSemanticDiagnosticsBuilderProgram } from 'typescript'



export default function proyectoEdit(this: any) {

  const router = useRouter();
  const { id } = router.query;

  const array_proyectos = [
    {
      nombre: "unNombre",
      id: 1,
      estado: "unEstado",
      cliente: "nombreCliente",
      tipoCliente: "tipoCliente",
      fechaInicio: "dd-mm-yyyy",
      fechaEstimadaFin: "dd-mm-yyyy",
      pm: "Pm"
    }
    ,
    {
      nombre: "unNombre",
      id: 2,
      estado: "unEstado",
      cliente: "nombreCliente",
      tipoCliente: "tipoCliente",
      fechaInicio: "dd-mm-yyyy",
      fechaEstimadaFin: "dd-mm-yyyy",
      pm: "Pm"
    }
    ,
    {
      nombre: "unNombre",
      id: 3,
      estado: "unEstado",
      cliente: "nombreCliente",
      tipoCliente: "tipoCliente",
      fechaInicio: "dd-mm-yyyy",
      fechaEstimadaFin: "dd-mm-yyyy",
      pm: "Pm"
    }
  ]

  const proyecto = {
    nombre: "unNombre",
    id: 1,
    estado: "unEstado",
    cliente: "nombreCliente",
    tipoCliente: "tipoCliente",
    fechaInicio: "dd-mm-yyyy",
    fechaEstimadaFin: "dd-mm-yyyy",
    pm: "Pm"
  }

  const target_proyecto = array_proyectos.find(t => t.id == Number(id));
  /*proteccion por si llegan a tratar de acceder a un proyecto indefinido*/
  if (target_proyecto == undefined) {
    return (
      <>
        <Head_ nombre='Invalid page'></Head_>
        <Header></Header>
        <div>
          La pagina a la que se quiere acceder no existe
        </div>
        <a href="/moduloProyectos/proyectos">
          <button>Regresar a proyectos </button>
        </a>
      </>

    )
  }

  return (
    <>
      <Head_ nombre='Editar proyecto'></Head_>
      <Header></Header>


      <div className={styles.proyectoView}>
        <h1 className={styles.tituloEdit}>Editar proyecto {id}</h1>
        <div className={styles.contenedorPadre}>
          <div className={styles.infoProyecto}>
            <div className={styles.tituloInfo}>
              <div>Id</div>
              <div>Nombre</div>
              <div>Fecha de inicio real</div>
              <div>Fecha de fin real</div>
              <div>Estado</div>
            </div>
            <div className={styles.info}>
              <div>{id}</div>
              <div>
                <input type="text" id="pmid" placeholder="PM" size={50}></input>
              </div>
              <div>
                <input type="date" id="fechainitid"></input>
              </div>
              <div>
                <input type="date" id="fechafineid"></input>
              </div>
              <div>
                <select id="estadoProyecto">
                  <option disabled selected> {proyecto.estado}</option>
                  <option value="Desarrollo"> Desarrollo </option>
                  <option value="Produccion"> Producción</option>
                  <option value="PostProduccion">Post Producción </option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.infoProyecto}>
            <div className={styles.tituloInfo}>
              <div>Prioridad</div>
              <div>Costo acumulado</div>
              <div>Horas estimadas</div>
              <div>Horas reales</div>
            </div>
            <div className={styles.info}>
              <div>
                <select id="prioridadProyecto">
                  <option disabled selected> {proyecto.estado}</option>
                  <option value="Baja">Baja</option>
                  <option value="Media">Media</option>
                  <option value="Alta">Alta</option>
                </select>
              </div>
              <div>
                <input type="text" id="costo" placeholder="Costo acumulado" size={50}></input>
              </div>
              <div>
                <input type="number" id="horasEstimadas" min="0"></input>
              </div>
              <div>
                <input type="number" id="horasTotales" min="0"></input>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.botonesView}>
          <a href="/moduloProyectos/proyectos"><button>Cancelar</button></a>
          <button form="form_id" onClick={button_press}>Agregar</button>
        </div>
      </div>
    </>
  )
}





function button_press() {
  alert("Back end tiene que hacer algo ");
  var estado_proyecto = document.getElementById('estadoProyecto').value;
  var nombre_ciente = document.getElementById('nombreid').value;
  var pm = document.getElementById('pmid').value;
  var cuit = document.getElementById('cuit').value;
  var fecha_inicio_real = document.getElementById('fechainitid').value;
  var fecha_fin_estimada = document.getElementById('fechafinid').value;
  var tipo_cliente = document.getElementById('tipocliente').value;
  var horas_insumidas = document.getElementById('horasinsumidas').value;
  var proyectoSoporte = document.getElementById('proyectoSoporteId').value;
  return true;
}
var function_button = button_press;