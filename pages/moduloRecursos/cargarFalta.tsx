import React, { useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/recursos.module.css'
import Header from '../header';
import SeleccionarActividad from "./seleccionarActividad";

export default function CargarFalta() {
    const [fecha, setFecha] = React.useState()
    const [horaInicio, setHoraInicio] = React.useState(new Date())
    const [horaFin, setHoraFin] = React.useState(new Date())

    const [fechaInicio, setFechaInicio] = React.useState(new Date())
    const [fechaFin, setFechaFin] = React.useState(new Date())
    const [legajo, setLegajo] = React.useState("")
    const [justificante, setJustificante] = React.useState("")

    let datos; // datos que se cargan con sessionStorage en page cargarDatos

    useEffect(() => {
        if (typeof window !== "undefined") {
            datos = JSON.parse(window.sessionStorage.getItem("datos") || "{}");
            setFechaInicio(new Date(datos.inicio));
            setFechaFin(new Date(datos.fin));
            setLegajo(datos.legajo)
        }
    }, [])

    return(
        <div>
            <Header></Header>
            <div className={styles.cargarTarea}>
                <div className={styles.ingresarInfoTarea}>
                    <SeleccionarActividad actividad="Falta"/>

                    <div className={styles.calendarInput}>
                        <label className={styles.inputLabel}>Fecha</label>
                        <DatePicker className={styles.datePicker} selected={fecha} onChange={(date : any) => setFecha(date)}
                                    minDate={fechaInicio} maxDate={fechaFin} 
                        />
                    </div>
                    <br></br>

                    <div className={styles.flexContainer}>
                        <label className={styles.smallInputLabel}>De</label>
                        <DatePicker className={styles.datePicker} dateFormat="h aa" showTimeSelect showTimeSelectOnly selected={horaInicio} onChange={(date:any) => setHoraInicio(date)}/>
                        <label className={styles.smallInputLabel}>a</label>
                        <DatePicker className={styles.datePicker} dateFormat="h aa" showTimeSelect showTimeSelectOnly selected={horaFin} onChange={(date:any) => setHoraFin(date)}/>
                    </div>       
                    <br></br>

                    <div className={styles.flexContainer}>
                        <label className={styles.inputLabel}>Justificante</label>
                        <textarea id="justificante" name="justificante" value={justificante} onChange={(text : any) => setJustificante(text.target.value)}></textarea>
                    </div>         
                    <div className={styles.containerBotones}>
                        <button>Cancelar</button>
                        <button>Cargar Falta</button>
                    </div>

                </div>
            </div>            
            </div>

    )
}