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
        
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.tituloEdit}>Editar tarea {id}</h1>
                <form id = "a_form_id">
                    <div className = {styles.camposForm}>
                        <div>
                            <label>Descripcion </label>
                        </div>
                        <input type="text" placeholder = {tarea.Descripcion}></input>
                        <div>
                            <label> Nuevo estado</label>
                        </div>
                        <select>
                            <option disabled selected> Previo: {tarea.Estado}</option>
                            <option value = "optionAbierto"> Abierto </option>
                            <option value = "optionEnAnalisis"> En análisis</option>
                            <option value = "optionDerivado">Derivado </option>
                            <option value = "optionResuelto">Resuelto </option>
                            <option value = "optionCerrado">Cerrado </option>
                        </select>
                        <div>
                            <label>Duracion estimada</label>
                        </div>
                        <input type="text" placeholder = {tarea.Duracion_estimada}></input>
                        <div>
                            <label>Tiempo invertido</label>
                        </div>
                        <input type = "number" min = "0" placeholder = {tarea.tiempo_invertido} ></input>
                        <div>
                            <label>Fecha estimada de fin</label>
                        </div>
                        <input type = "date" placeholder = {tarea.Fecha_estimada_de_fin}></input>
                        <div>
                            <label>Fecha real de fin</label>
                        </div>
                        <input type = "date" placeholder = {tarea.Fecha_real_de_fin}></input>
                        <div>
                            <label>Recursos asignados </label> 
                        </div>
                        <select id="optionDropDown" size="2" multiple> </select>
                        <Script src = "../../dropdown.js"></Script>
                        <div></div>
                        <div>
                            <label>Tareas precedentes</label> 
                        </div>
                        <select id="tareaOptionDropDown" size="2" multiple > </select>
                        <Script src = "../../modulo_proyectos_dropdown_tareas.js"></Script>
                        <div></div>

                        <div className={styles.botonesView}>
                            <a href="/moduloProyectos/tareas"><button>Cancelar</button></a>
                            <button form = "form_id" onClick = {function_button}>Agregar</button>    
                        </div>
                        
                    </div>
                </form>
            </div>
        </main>
        </>
    )
}


/*Aca el back tiene que editar los campos*/
function button_press(){
    alert("back end editame la tarea");
    return true;
}
var function_button = button_press;