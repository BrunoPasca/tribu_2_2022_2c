import styles from "../../styles/reportes.module.css"
import ColumnaLicencia from "./columnas/columnaLicencia"
import ColumnaTarea from "./columnas/columnaTarea"
import ColumnaFalta from "./columnas/columnaFalta"
import ColumnaGuardia from "./columnas/columnaGuardia"


export default function Reportes( ) {
    

    return (
        <div className={styles.titulos}>
            <div>
                <p>Tareas</p>
                <ColumnaTarea></ColumnaTarea>
            </div>
            <div>
                <p>Faltas</p>
                <ColumnaFalta></ColumnaFalta>
            </div>
            <div>
                <p>Licencias</p>
                <ColumnaLicencia></ColumnaLicencia>
            </div>
            <div>
                <p>Guardias</p>
                <ColumnaGuardia></ColumnaGuardia>
            </div>

        </div>
    )
}