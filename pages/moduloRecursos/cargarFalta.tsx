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
            setFecha(datos.inicio)
        }
    }, [])


    async function handleClickCargar(){
        const _fecha = fecha.toISOString().slice(0, 19).replace('T', ' ');
        const faltaDatos = {legajo: legajo, fecha :  _fecha, jsutificante : justificante}

        const areNotEmpty = Object.values(faltaDatos).every(
            value => value != ""
        );
        if (!areNotEmpty) {
            alert("Complete todos los campos antes de cargar.")
            return
        }

        await fetch("https://aninfo2c222back-production.up.railway.app/api/faltas", {
          method: "POST",
          body: JSON.stringify(faltaDatos),
        })
    }

    return (
        <div>
            <div className={styles.cargarTarea}>
                <div className={styles.ingresarInfoTarea}>
                    <SeleccionarActividad actividad="Tarea" screenSetter={screenSetter} />

                    <div className={styles.calendarInput}>
                        <label className={styles.inputLabel}>Fecha</label>
                        <DatePicker className={styles.datePicker} selected={fecha} onChange={(date: any) => setFecha(date)}
                            minDate={fechaInicio} maxDate={fechaFin}
                        />
                    </div>
                    <br></br>

                    <div className={styles.flexContainer}>
                        <label className={styles.inputLabel}>Justificante</label>
                        <textarea id="justificante" name="justificante" value={justificante} onChange={(text: any) => setJustificante(text.target.value)}></textarea>
                    </div>
                    <div className={styles.containerBotones}>
                        <Link href="./loadInfo"><button>Atrás</button></Link>
                        <button onClick={handleClickCargar}>Cargar Falta</button>
                    </div>
                </div>

                <div className={styles.ingresarInfoTarea}>
                        <div className={styles.holder}>
                            <h2>Faltas Cargadas</h2>
                            <h3>{fechaInicio.toLocaleDateString()} - {fechaFin.toLocaleDateString()}</h3>
                            <Muitable valor={"tarea"} />
                        </div>
                    </div>
            </div>
        </div>

    )
}