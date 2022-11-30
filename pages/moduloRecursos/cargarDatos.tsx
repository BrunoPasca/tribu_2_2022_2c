import React, {useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/recursos.module.css'
import Link from 'next/link';

export default function CrearReporteTrabajo({ setter }: { setter: any }) {
    const [formData, setFormData] = useState(
        {
            nombre: "",
            apellido: "",
            legajo: "",
        }
    )

    const [inicio, setInicio] = useState(new Date())
    const [periodo, setPeriodo] = useState("semanal")
    const [fin, setFormFin] = useState(new Date())

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevFormData => ({ ...prevFormData, [event.target.name]: event.target.value }))
    };

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
        return Object.values(formData).every(
            value => value != ""
        );
    }

    function handleClickContinuar() {
        // Verifica no haya un campo vacío
        if (!validateForm()) {
            alert("Complete todos los campos antes de continuar.")
            return;
        }

        const datos = { ...formData, inicio: inicio, fin: fin, periodo: periodo };

        sessionStorage.setItem("datos", JSON.stringify(datos))
        setter(true);
    }

    return (

        <div className={styles.cargarDatos}>
            <form>
                <p>
                    <label className={styles.inputLabel}>Nombre</label>
                    <input id="nombre" type="text" placeholder="Nombre" name='nombre' onChange={handleChange} value={formData.nombre}></input>

                    <label className={styles.inputLabel}>Apellido</label>
                    <input type="text" placeholder="Apellido" name='apellido' onChange={handleChange} value={formData.apellido}></input>
                </p>

                <p>
                    <label className={styles.inputLabel}>Legajo</label>
                    <input type="number" placeholder="Legajo" name='legajo' onChange={handleChange} value={formData.legajo}></input>
                </p>

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
                    <DatePicker className={styles.calendar} selected={inicio} dateFormat='dd/MM/yyyy' onChange={(date: any) => setInicio(date)}
                        filterDate={filterDate}
                    />
                </div>
                <br></br>

                <div className={styles.containerBotones}>
                    <button type="button" title="Continuar" onClick={handleClickContinuar}>Continuar</button>
                    <button type="button" title="Cancelar">
                        <Link href="/">Cancelar</Link>
                    </button>
                </div>
            </form>

        </div>
    )
}
