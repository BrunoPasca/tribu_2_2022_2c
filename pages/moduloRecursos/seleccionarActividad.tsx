import React from "react"
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/recursos.module.css'
import { useRouter } from "next/router";

export default function SeleccionarActividad(props : any) {

    const [actividad, setActividad] = React.useState(props.actividad)
    const router = useRouter()

    function handleChange(event : any) {
        setActividad(event.currentTarget.value)
        let url = "/moduloRecursos/cargar" + event.currentTarget.value
        router.push(url)
    }

    return(
        <div>
            <label className={styles.inputLabel}>Actividad</label>
            <select 
                id="actividad" 
                className={styles.selectInput}
                value={actividad}
                onChange={handleChange}
                name="actividad"
            >
                <option value="Tarea">Tarea</option>
                <option value="Guardia">Guardia</option>
                <option value="Falta">Falta</option>
                <option value="Licencia">Licencia</option>
            </select> 
            <br></br>
            <br></br>
        </div>

    )
}