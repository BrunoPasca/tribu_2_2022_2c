import React, { useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/recursos.module.css'
import SeleccionarActividad from "./seleccionarActividad";
import Muitable from "./tablaLicencias"
import Link from "next/link";
import Header from "../header";

export default function CargarLicencia({ screenSetter }: { screenSetter: any }) {
    const [fecha, setFecha] = React.useState(new Date())
    const [fechaInicio, setFechaInicio] = React.useState(new Date())
    const [fechaFin, setFechaFin] = React.useState(new Date())
    const [legajo, setLegajo] = React.useState("")
    const [tipo, setTipo] = React.useState("")
    const [descripcion, setDescripcion] = React.useState("")

    const [goceSueldo, setGoceSueldo] = React.useState(false)
    const handleChangeSueldo = () => {
        console.log("El goce es : ", goceSueldo)
        setGoceSueldo(!goceSueldo)
    }

    // Rango de su licencia
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
        const licenciaDatos = {legajo: legajo, fecha_inicio : startDate, fecha_fin : endDate, tipo_licencia:tipo, goce_sueldo:goceSueldo}

        const areNotEmpty = Object.values(licenciaDatos).every(
            value => value != ""
        );
        if (!areNotEmpty) {
            alert("Complete todos los campos antes de cargar.")
            return
        }

        console.log(JSON.stringify(licenciaDatos))

        await fetch("https://aninfo2c222back-production.up.railway.app/api/licencias", {
          method: "POST",
          body: JSON.stringify(licenciaDatos),
        })
    }

    return (
        <div>
            <Header></Header>
            <div className={styles.cargarTarea } >
                <div className={styles.ingresarInfoTarea}>
                    <SeleccionarActividad actividad="Licencia"/>

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
                    <br></br>

                    <label className={styles.inputLabel}>Tipo</label>
                    <select
                        id="tipo"
                        className={styles.selectInput}
                        value={tipo}
                        onChange={(e) => {
                            setTipo(e.currentTarget.value)
                        }}
                        name="tipo"
                    >
                    <option value="Médica">Médica</option>
                    <option value="Exámen">Exámen</option>
                    <option value="Casamiento">Casamiento</option>
                    <option value="Fallecimiento">Fallecimiento</option>
                    </select>
                    <br></br>
                    <br></br>

                    <div className={styles.flexContainer}>
                        <label className={styles.inputLabel}>Descripción</label>
                        <textarea id="descripcion" placeholder="Descripción" name="descripcion" value={descripcion} onChange={(text: any) => setDescripcion(text.target.value)}></textarea>
                    </div>

                    <div className={styles.flexContainer}>
                        <label className={styles.inputLabel} style={{textAlign:"left"}}>Goce de sueldo</label>
                        <input type="checkbox" onChange={handleChangeSueldo}></input>
                    </div>

                    <div className={styles.containerBotones} style={{alignItems:"center"}}>
                        <button onClick={handleClickCargar}>Cargar Licencia</button>
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