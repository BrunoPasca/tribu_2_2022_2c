import React, { useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/recursos.module.css'
import Header from '../header';
import SeleccionarActividad from "./seleccionarActividad";
import Muitable from "./tablaFaltas"
import Link from "next/link";

export default function CargarFalta({ screenSetter }: { screenSetter: any }) {
    const [fecha, setFecha] = React.useState(new Date())
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
            setFecha(new Date(datos.inicio))
        }
    }, [])


    async function handleClickCargar(){
        // formato aceptado por SQL
        const _fecha = new Date(fecha).toISOString().slice(0, 19).replace('T', ' ');
        const faltaDatos = {legajo_empleado: legajo, fecha :  _fecha, justificante : justificante}

        if (!justificante) {
            alert("Ingrese su justificante antes de cargar.")
            return
        }

        await fetch("https://aninfo2c222back-production.up.railway.app/api/faltas", {
          method: "POST",
          body: JSON.stringify(faltaDatos),
          headers: {
            'Content-Type': 'application/json',
        },
        })
        .then(response => {
            if (response.status === 500) throw new Error("Error al cargar falta")
            return response
        })
        .then(response => alert("Se creó correctamente"))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <Header></Header>
            <div className={styles.cargarTarea}>
                <div className={styles.ingresarInfoTarea}>
                    <SeleccionarActividad actividad="Falta"/>

                    <div className={styles.calendarInput}>
                        <label className={styles.inputLabel}>Fecha</label>
                        <DatePicker className={styles.datePicker} selected={fecha} onChange={(date: any) => setFecha(date)}
                            minDate={fechaInicio} maxDate={fechaFin} dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <br></br>

                    <div className={styles.flexContainer}>
                        <label className={styles.inputLabel}>Justificante</label>
                        <textarea id="justificante" placeholder="Justificante" name="justificante" value={justificante} onChange={(text: any) => setJustificante(text.target.value)}></textarea>
                    </div>
                    <div className={styles.containerBotones}>
                        <button onClick={handleClickCargar}>Cargar Falta</button>
                        <Link href="./cargarDatos"><button>Atrás</button></Link>
                    </div>
                </div>

                <div className={styles.holder}>
                    <Muitable valor={"tarea"} legajo={legajo} fechaInicio={fechaInicio.toLocaleDateString()} fechaFin={fechaFin.toLocaleDateString()}/>
                </div>
            </div>
        </div>

    )
}