import React, { useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/recursos.module.css'
import SeleccionarActividad from "./seleccionarActividad";
import Muitable from "./tablaGuardias"
import Link from "next/link";
import Header from "../header";

export default function CargarGuardia({ screenSetter }: { screenSetter: any }) {
    const [fecha, setFecha] = React.useState(new Date())
    const [fechaInicio, setFechaInicio] = React.useState(new Date())
    const [fechaFin, setFechaFin] = React.useState(new Date())
    const [legajo, setLegajo] = React.useState("")

    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(null);
    const onChange = (dates : any) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };

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
        const _fecha = fecha.toISOString().slice(0, 19).replace('T', ' ');
        const guardiaDatos = {legajo: legajo, fecha :  _fecha, fecha_inicio : startDate, fecha_fin : endDate}

        const areNotEmpty = Object.values(guardiaDatos).every(
            value => value != ""
        );
        if (!areNotEmpty) {
            alert("Complete todos los campos antes de cargar.")
            return
        }

        console.log(JSON.stringify(guardiaDatos))

        await fetch("https://aninfo2c222back-production.up.railway.app/api/guardias", {
          method: "POST",
          body: JSON.stringify(guardiaDatos),
        })
    }

    return (
        <div>
            <Header></Header>
            <div className={styles.cargarTarea } >
                <div className={styles.ingresarInfoTarea}>
                    <SeleccionarActividad actividad="Guardia"/>

                    <div className={styles.calendarInput} >
                        <label className={styles.inputLabel}>Periodo</label>
                        <DatePicker
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            minDate={fechaInicio}
                            maxDate={fechaFin}
                        />
                    </div>

                    <div className={styles.containerBotones} style={{alignItems:"center"}}>
                        <Link href="./loadInfo"><button>Atrás</button></Link>
                        <button onClick={handleClickCargar}>Cargar Guardia</button>
                    </div>

                </div>
                
                <div className={styles.holder}>
                    <Muitable valor={"tarea"} legajo={legajo} fechaInicio={fechaInicio.toLocaleDateString()} fechaFin={fechaFin.toLocaleDateString()}/>
                </div>
            </div>
        </div>

    )
}