import Head_ from '../../head'
import Header from '../../header'
import styles from '../../../styles/proyectos.module.css'
import sup_styles from '../../../styles/soporte.module.css'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { getTareasByProyecto } from '../../moduloRecursos/services/ProyectoService'

export default function editTarea(){
    const router = useRouter();
    const {id} = router.query;

    const tarea = {
        id : 1,
        Descripcion: "ipse bene nose cuanto mas",
        Estado : "Estado viejo",
        Duracion_estimada : "duracion vieja",
        tiempo_invertido: "tiempo viejo",
        Fecha_estimada_de_fin: "29-09-1995",
        Fecha_real_de_fin : "xx-xx-xxxx",
        recursos_asignados : ["recurso 1","recurso 2"],
        tareas_condicionales: ["tarea1" , "tarea2"]
    }

    /*aca la idea seria sacar las tareas del backend y comparar con el id que se saco de router*/

    return(
        <>
        <Head_ nombre='Editar tarea'></Head_>
        <Header></Header>
        
        <div className={styles.proyectoView}>
            <h1 className={styles.tituloEdit}>EDITAR TAREA {id}</h1>   
            <div className={styles.contenedorPadre}>
                <div className={styles.infoProyecto}>
                    <div className={styles.tituloInfo}>
                        <div>Id</div>
                        <div>Id del proyecto</div>
                        <div>Estado</div>
                        <div>Descripción</div>
                        <div>Horas estimadas</div>
                        <div>Horas totales</div>
                    </div>
                    <div className={styles.info}>
                        <div>{id}</div>
                        <div>00-00</div>
                        <div>
                            <select>
                                <option disabled selected> Previo: {tarea.Estado}</option>
                                <option value = "optionBaja">Baja</option>
                                <option value = "optionMedia">Media</option>
                                <option value = "optionAlta">Alta</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" id = "nombrecl" placeholder = "Descripcion" size={50}></input>
                        </div>
                        <div>
                            <input type="number" id= "horasEstimadas" min = "0"></input>
                        </div>
                        <div>
                            <input type="number" id= "horasTotales" min = "0"></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.botonesView}>
                <a href="/moduloProyectos/tareas"><button>Cancelar</button></a>
                <button form = "form_id" onClick = {function_button}>Agregar</button>    
            </div> 
        </div>
        </>
    )
}


/*Aca el back tiene que editar los campos*/
function button_press(){
    alert("back end editame la tarea");
    return true;
}
var function_button = button_press;