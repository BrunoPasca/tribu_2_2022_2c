import React, {useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/recursos.module.css'
import Link from 'next/link';
import Header from '../header';
import Router, { useRouter } from 'next/router';

export default function CrearReporteTrabajo({ setter }: { setter: any }) {
    const [recursos, setRecursos] = useState<any[]>([])
    const [legajo, setLegajo] = useState("")

    const router = useRouter()

    const [inicio, setInicio] = useState(new Date())
    const [periodo, setPeriodo] = useState("semanal")
    const [fin, setFormFin] = useState(new Date())

    useEffect(()=>{
        fetch("https://aninfo2c222back-production.up.railway.app/api/recursos_ext")
        .then((res) => res.json())
        .then((data) => {
            setRecursos(data);
            if (data.length > 0) {
                setLegajo(data[0].legajo)
            }
        })
    }, [])

    // Cuando se cambia la fecha de inicio seteo la fecha final del periodo
    useEffect(() => {
        let fechaFin = new Date(inicio);
        switch (periodo) {
            case "semanal":
                fechaFin.setDate(fechaFin.getDate() + 6)
                break;
            case "quincenal":
                if (inicio.getDate() === 1) {
                    fechaFin.setDate(14)
                } else {
                    fechaFin = new Date(fechaFin.getFullYear(), fechaFin.getMonth() + 1, 0)
                }
                break;
            default:
                let ultimoDiaDelMes = new Date(fechaFin.getFullYear(), fechaFin.getMonth() + 1, 0);
                fechaFin = ultimoDiaDelMes
        }

        setFormFin(fechaFin)
    }, [inicio])

    // Cuando se cambia el periodo seteo la fecha inicial a una válida
    useEffect(() => {
        let fechaInicio = new Date(inicio);
        let year = fechaInicio.getFullYear();
        let month = fechaInicio.getMonth();

        switch (periodo) {
            case "semanal":
                let targetDate = new Date(fechaInicio);
                let targetMonth = targetDate.getMonth();
                let targetYear = targetDate.getFullYear();
                let firstDateInMonth = new Date(targetYear, targetMonth, 1);
                let firstWeekdayInMonth = firstDateInMonth.getDay();
                let firstMondayDate = 1 + ((8 - firstWeekdayInMonth) % 7);
                fechaInicio = new Date(targetYear, targetMonth, firstMondayDate);
                break;
            case "quincenal":
                fechaInicio = new Date(year, month, 15)
                break;
            default:
                fechaInicio = new Date(year, month, 1)
        }

        setInicio(fechaInicio)
    }, [periodo])

    // Filtra las fechas válidas según el periodo (semanal empieza lunes, quincenal 1 ó 15, mensual 1)
    function filterDate(current: any) {
        switch (periodo) {
            case "semanal":
                return new Date(current).getDay() === 1;
            case "quincenal":
                let fecha = new Date(current).getDate()
                return fecha === 1 || fecha === 15
            default:
                return new Date(current).getDate() === 1
        }
    }

    function validateForm() {
        return (legajo || inicio || fin || periodo)
    }

    function handleClickContinuar() {
        // Verifica no haya un campo vacío
        if (!validateForm()) {
            alert("Complete todos los campos antes de continuar.")
            return;
        }

        const datos = { legajo : legajo, inicio: inicio, fin: fin, periodo: periodo };
        sessionStorage.setItem("datos", JSON.stringify(datos))
        router.push("./cargarTarea")
    }

    return (

        <div className={styles.cargarDatos}>
            <Header></Header>
            <form>
                <label className={styles.inputLabel}>Empleado</label>
                <select
                    id="legajo"
                    className={styles.selectInput}
                    value={legajo}
                    onChange={(e) => {
                        console.log(e.currentTarget.value)
                        setLegajo(e.currentTarget.value)
                    }}
                    name="legajo"
                >
                    {
                        recursos.map(recurso =>
                            <option key={recurso.legajo} value={recurso.legajo}>{recurso.Nombre} {recurso.Apellido} - {recurso.legajo}</option>
                        )
                    }
                </select>
                <br></br>
                <br></br>

                <label className={styles.inputLabel}>Periodo</label>
                <select
                    id="periodo"
                    className={styles.selectInput}
                    value={periodo}
                    onChange={(e) => {
                        setPeriodo(e.currentTarget.value)
                    }}
                    name="periodo"
                >
                    <option value="semanal">Semanal</option>
                    <option value="quincenal">Quincenal</option>
                    <option value="mensual">Mensual</option>
                </select>
                <br></br>
                <br></br>

                <div className={styles.calendarInput}>
                    <label className={styles.inputLabel}>Inicio</label>
                    <DatePicker className={styles.calendar} selected={inicio} dateFormat="dd/MM/yyyy"
                                onChange={(date: any) => setInicio(date)}
                        filterDate={filterDate}
                    />
                </div>
                <br></br>

                <div className={styles.containerBotones}>
                    <button type="button" title="Continuar" onClick={handleClickContinuar}>Continuar</button>
                    <Link href='./landingRecursos'><button>Cancelar</button></Link>
                </div>
            </form>

        </div>
    )
}
