import Head_ from '../head'
import Header from '../header'
import styles from '../../styles/proyectos.module.css'
import sup_styles from '../../styles/soporte.module.css'
import Script from 'next/script'
import { getTareasByProyecto } from '../moduloRecursos/services/ProyectoService'

export default function tareaEdit(){


    const tarea = {
        id : "xxxx",
        Descripcion: "ipse bene nose cuanto mas",
        Estado : "Estado viejo",
        Duracion_estimada : "duracion vieja",
        tiempo_invertido: "tiempo viejo",
        Fecha_estimada_de_fin: "29-09-1995",
        Fecha_real_de_fin : "xx-xx-xxxx",
        recursos_asignados : ["recurso 1","recurso 2"],
        tareas_condicionales: ["tarea1" , "tarea2"]
    }

    return(
        <>
        <Head_ nombre='Editar tarea'></Head_>
        <Header></Header>

        <div className={styles.container}>
        <div className = {sup_styles.navbar}>
            <div className={sup_styles.navbarIzq}> 
                <h1>Editar tarea {tarea.id}</h1>
            </div>
            <div className = {sup_styles.navbarDer}>
                <a href="/moduloProyectos/proyectos">
                    <button className = {styles.negative_button_style}>Cancelar</button>
                </a>
            <div >
            <br>
            </br>
                <button form = "form_id" className = {styles.positive_button_style}>
                    Editar tarea
                </button>
            </div>
            </div>
        </div>
    </div>
        <form action = "" id = "a_form_id">
            <div className = {styles.four_column_grid}>
                <label>Descripcion </label>
                <input type="text" placeholder = {tarea.Descripcion}></input>
                <label> Nuevo estado</label>
                <select>
                    <option disabled selected> Previo: {tarea.Estado}</option>
                    <option value = "optionAbierto"> Abierto </option>
                    <option value = "optionEnAnalisis"> En análisis</option>
                    <option value = "optionDerivado">Derivado </option>
                    <option value = "optionResuelto">Resuelto </option>
                    <option value = "optionCerrado">Cerrado </option>
                </select>


                <label>Duracion estimada</label>
                <input type="text" placeholder = {tarea.Duracion_estimada}></input>
                <label>Tiempo invertido</label>
                <input type = "number" min = "0" placeholder = {tarea.tiempo_invertido} ></input>
            
                <label>Fecha estimada de fin</label>
                <input type = "date" placeholder = {tarea.Fecha_estimada_de_fin}></input>
                <label>Fecha real de fin</label>
                <input type = "date" placeholder = {tarea.Fecha_real_de_fin}></input>
            
                <label>Recursos asignados </label> 
                <select id="optionDropDown" size="2" multiple> </select>
                <Script src = "../../dropdown.js"></Script>
                <div></div>
                <select id="tareaOptionDropDown" size="2" multiple > </select>
                <Script src = "../../modulo_proyectos_dropdown_tareas.js"></Script>
                <div></div>
                
            </div>



        </form>
        
   
        


        </>
    )
}