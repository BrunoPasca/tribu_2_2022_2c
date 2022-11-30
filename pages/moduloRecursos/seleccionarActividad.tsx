import React, { useEffect } from "react"
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/recursos.module.css'

export default function SeleccionarActividad({ actividad, screenSetter }: { actividad: string, screenSetter: any }) {

    function handleChange(event: any) {
        screenSetter(event.currentTarget.value);
    }

    return (
        <div>
            <label className={styles.inputLabel}>Actividad</label>
            <select
                id="actividad"
                className={styles.selectInput}

                onChange={handleChange}
                name="actividad"
            >
                <option value={1}>Tarea</option>
                <option disabled value={2}>Guardia</option>
                <option value={3}>Falta</option>
                <option disabled value={4}>Licencia</option>
            </select>
            <br></br>
            <br></br>
        </div>

    )
}