import React, { useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/recursos.module.css'
import Header from '../header';
import SeleccionarActividad from "./seleccionarActividad";
import { getProyectos, getTareasByProyecto } from "./services/ProyectoService";
import MuiTable from "./tablaHoras";

export default function CargarTarea() {
    const [fecha, setFecha] = React.useState()
    const [horaInicio, setHoraInicio] = React.useState(new Date())
    const [horaFin, setHoraFin] = React.useState(new Date())

    const [proyectos, setProyectos] = React.useState<any[]>([])
    const [tareas, setTareas] = React.useState<any[]>([])

    const [proyectoId, setProyectoId] = React.useState("")
    const [tareaId, setTareaId] = React.useState("")

    let datos; // datos que se cargan con sessionStorage en page cargarDatos
    const [fechaInicio, setFechaInicio] = React.useState(new Date())
    const [fechaFin, setFechaFin] = React.useState(new Date())

    const [periodo, setPeriodo] = React.useState("Semanal")

    useEffect(() => {
        // Recupero los datos
        if (typeof window !== "undefined") {
            datos = JSON.parse(window.sessionStorage.getItem("datos") || "{}");
            setFechaInicio(new Date(datos.inicio));
            setFechaFin(new Date(datos.fin));
        }

        getProyectos().then((data) => {
            setProyectos(data);
        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });;

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
            });;
    }, [proyectoId])

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
                            tareas.map(tarea =>
                                <option key={tarea.id} value={tarea.id}>{tarea.descripcion}</option>
                            )
                        }
                    </select>
                    <br></br>
                    <br></br>

                    <div className={styles.calendarInput}>
                        <label className={styles.inputLabel}>Fecha</label>
                        <DatePicker className={styles.datePicker} selected={fecha} onChange={(date: any) => setFecha(date)}
                            minDate={fechaInicio} maxDate={fechaFin}
                        />
                    </div>
                    <br></br>

                    <div className={styles.flexContainer}>
                        <label className={styles.smallInputLabel}>De</label>
                        <DatePicker className={styles.datePicker} dateFormat="h aa" showTimeSelect showTimeSelectOnly selected={horaInicio} onChange={(date: any) => setHoraInicio(date)} />
                        <label className={styles.smallInputLabel}>a</label>
                        <DatePicker className={styles.datePicker} dateFormat="h aa" showTimeSelect showTimeSelectOnly selected={horaFin} onChange={(date: any) => setHoraFin(date)} />
                    </div>
                    <div className={styles.containerBotones}>
                        <button>Cancelar</button>
                        <button>Cargar Tarea</button>
                    </div>
                </div>
                <div className={styles.ingresarInfoTarea}>
                    <div className={styles.holder}>
                        <label className={styles.titleLabel}>Actividades Cargadas</label>
                        <label className={styles.titleLabel}>Periodo: {periodo}</label>
                        <MuiTable />
                    </div>
                </div>
            </div>
        </div>

    )
}