import React, { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/recursos.module.css'
import Header from '../header';
import SeleccionarActividad from "./seleccionarActividad";
import { getProyectos, getTareasByProyecto } from "./services/ProyectoService";
import MuiTable from "./tablaHoras";
import Link from "next/link";


export default function CargarTarea({ period, screenSetter }: { period: string, screenSetter: any }) {
    const [cantHoras, setCantHoras] = React.useState("")
    const [extra, setExtra] = React.useState("")
    const [fecha, setFecha] = React.useState(new Date())

    const [proyectos, setProyectos] = useState<any[]>([])
    const [tareas, setTareas] = useState<any[]>([])

    const actividades = {
        "Tarea": 1,
        "Guardia": 2,
        "Falta": 3,
        "Licencia": 4,
    }

    const [proyectoId, setProyectoId] = useState("")
    const [tareaId, setTareaId] = useState("")

    let datos; // datos que se cargan con sessionStorage en page cargarDatos
    const [fechaInicio, setFechaInicio] = React.useState(new Date())
    const [fechaFin, setFechaFin] = React.useState(new Date())

    const [legajo, setLegajo] = React.useState("")

    useEffect(() => {
        // Recupero los datos
        if (typeof window !== "undefined") {
            datos = JSON.parse(window.sessionStorage.getItem("datos") || "{}");
            setFechaInicio(new Date(datos.inicio));
            setFechaFin(new Date(datos.fin));
            setFecha(new Date(datos.inicio))
            setLegajo(datos.legajo)
        }

        getProyectos().then((data) => {
            setProyectos(data);
        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });
            
       if (!proyectos[0]) return;
        setProyectoId(proyectos[0].id)

    }, [])

    // Cuando selecciona otro proyecto obtengo las tareas asociadas
    useEffect(() => {
        if (!proyectoId) return;
        getTareasByProyecto(proyectoId).then((data) => {
            setTareas(data);
        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });
    }, [proyectoId])
    

    function handleChangeHoras(e : any) {
        setCantHoras(e.target.value)
    }

    async function handleClickCargar(){

        const _fecha = fecha.toISOString().slice(0, 19).replace('T', ' ');
        const horaDatos = {legajo: legajo, id_tarea : 1, cant : cantHoras, fecha :  _fecha, extra : extra}

        const areNotEmpty = Object.values(horaDatos).every(
            value => value != ""
        );
        if (!areNotEmpty) {
            alert("Complete todos los campos antes de cargar.")
            return
        }

        await fetch("https://aninfo2c222back-production.up.railway.app/api/horas", {
          method: "POST",
          body: JSON.stringify(horaDatos),
        })
    }


    return (
        <div>
            <div className={styles.cargarTarea}>
                <div className={styles.ingresarInfoTarea}>
                    <SeleccionarActividad actividad="Tarea" screenSetter={screenSetter} />
                    <label className={styles.inputLabel}>Proyecto</label>
                    <select
                        id="proyecto"
                        className={styles.selectInput}
                        value={proyectoId}
                        onChange={(e) => {
                            setProyectoId(e.currentTarget.value)
                        }}
                        name="actividad"
                    >
                        {
                            proyectos.map(proyecto =>
                                <option key={proyecto.id} value={proyecto.id}>{proyecto.nombre}</option>
                            )
                        }
                    </select>
                    <br></br>
                    <br></br>

                    <label className={styles.inputLabel}>Tarea</label>
                    <select
                        id="tarea"
                        className={styles.selectInput}
                        value={tareaId}
                        onChange={(e) => {
                            setTareaId(e.currentTarget.value)
                        }}
                        name="actividad"
                    >
                        {
                            tareas.map(tarea =>
                                <option key={tarea.id} value={tarea.id}>{tarea.descripcion}</option>
                            )
                        }
                    </select>
                    <br></br>
                    <br></br>

                    <div className={styles.calendarInput}>
                        <label className={styles.inputLabel}>Fecha</label>
                        <DatePicker className={styles.datePicker} dateFormat='dd/MM/yyyy' selected={fecha} onChange={(date: any) => setFecha(date)}
                            minDate={fechaInicio} maxDate={fechaFin}
                        />
                    </div>

                    <div className={styles.flexContainer}>
                        <label className={styles.inputLabel} style={{textAlign:"left"}}>Fuera de Horario</label>
                        <select
                        id="extra"
                        className={styles.selectInput}
                        value={extra}
                        onChange={(e) => {
                            setExtra(e.currentTarget.value)
                        }}
                        name="extra"
                        >
                            <option value="0">No</option>
                            <option value="1">Sí</option>
                        </select>
                        <br></br>
                    </div>

                    <label className={styles.inputLabel}>Horas</label>
                    <input className={styles.selectInput} min="1" type="number" placeholder="Horas" name='horas' onChange={handleChangeHoras} value={cantHoras}></input>

                    <div className={styles.containerBotones}>
                        <Link href="./loadInfo"><button>Atrás</button></Link>
                        <button onClick={handleClickCargar}>Cargar Tarea</button>
                    </div>
                </div>
                <div className={styles.holder}>
                    <MuiTable valor={"tarea"} legajo={legajo} fechaInicio={fechaInicio.toLocaleDateString()} fechaFin={fechaFin.toLocaleDateString()} />
                </div>
            </div>
        </div>

    )
}