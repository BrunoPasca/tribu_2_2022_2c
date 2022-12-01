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
    const [extra, setExtra] = React.useState(false)
    const [fecha, setFecha] = React.useState(new Date())

    const handleChangeExtra = () => {
        setExtra(!extra)
    }

    const [proyectos, setProyectos] = useState<any[]>([])
    const [tareas, setTareas] = useState<any[]>([])

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
        console.log(proyectoId)
        fetch("https://aninfo2c222back-production.up.railway.app/api/tareas")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setTareas(data);
            })
    }, [proyectoId])


    function handleChangeHoras(e: any) {
        setCantHoras(e.target.value)
    }

    async function handleClickCargar() {

        const _fecha = fecha.toISOString().slice(0, 19).replace('T', ' ');
        const horaDatos = { "legajo_empleado": legajo, "id_tarea": 1, "cant_horas": cantHoras, "fecha": _fecha, "extra": extra }
        const hora = {
            "legajo_empleado": 1,
            "id_tarea": 3,
            "cant_horas": 4,
            "fecha": "2022-11-10",
            "estado": "prueba",
            "extra": 0
        }

        const areNotEmpty = Object.values(horaDatos).every(
            value => value != ""
        );
        /*if (!areNotEmpty) {
            alert("Complete todos los campos antes de cargar.")
            return
        }*/

        console.log(JSON.stringify(hora))
        fetch("https://aninfo2c222back-production.up.railway.app/api/horas", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(hora), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
        })
    }

    return (
        <div>
            <Header></Header>
            <div className={styles.cargarTarea}>
                <div className={styles.ingresarInfoTarea}>
                    <SeleccionarActividad actividad="Tarea" />
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
                            (tareas).filter(tarea => tarea.proyecto_id == proyectoId).map(tarea =>
                                <option key={tarea.id} value={tarea.id}>{tarea.descripcion}</option>
                            )
                        }
                    </select>
                    <br></br>
                    <br></br>

                    <div className={styles.calendarInput}>
                        <label className={styles.inputLabel}>Fecha</label>
                        <DatePicker className={styles.datePicker} selected={fecha} dateFormat="dd/MM/yyyy"
                            onChange={(date: any) => setFecha(date)}
                            minDate={fechaInicio} maxDate={fechaFin}
                        />
                    </div>

                    <div className={styles.flexContainer}>
                        <label className={styles.inputLabel} style={{ textAlign: "left" }}>Fuera de Horario</label>
                        <input type="checkbox" onChange={handleChangeExtra}></input>
                        <br></br>
                    </div>

                    <label className={styles.inputLabel}>Horas</label>
                    <input className={styles.selectInput} min="1" type="number" placeholder="Horas" name='horas' onChange={handleChangeHoras} value={cantHoras}></input>

                    <div className={styles.containerBotones}>
                        <button onClick={handleClickCargar}>Cargar Tarea</button>
                        <Link href="./cargarDatos"><button>Atrás</button></Link>
                    </div>
                </div>
                <div className={styles.holder}>
                    <MuiTable valor={"tarea"} legajo={legajo} fechaInicio={fechaInicio.toLocaleDateString()} fechaFin={fechaFin.toLocaleDateString()} />
                </div>
            </div>
        </div>

    )
}