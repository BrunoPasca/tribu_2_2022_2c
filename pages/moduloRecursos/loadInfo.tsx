import React, { useEffect, useState, Component } from "react"
import CargarFalta from "./cargarFalta";
import CargarTarea from "./cargarTarea";
import CrearReporteTrabajo from "./cargarDatos";
import styles from '../../styles/recursos.module.css'
import Header from '../header';
import Head_ from '../head';


export default function LoadData() {
    const [mostrarTarea, setCargarTarea] = React.useState(false);
    const [periodo, setPeriodo] = React.useState("Semanal");
    const [estadoActual, setEstadoActual] = React.useState<number>(1);
    const componentes: { [key: number]: JSX.Element } = {
        1: (<CargarTarea period={periodo} screenSetter={setEstadoActual} />),
        2: (<CargarFalta screenSetter={setEstadoActual} />),
        3: (<CargarFalta screenSetter={setEstadoActual} />),
        4: (<CargarTarea period={periodo} screenSetter={setEstadoActual} />),
    }

    useEffect(() => {
        console.log(estadoActual)
    }, [estadoActual])

    let screenToRender = componentes[estadoActual];
    return (
        <div>
            <Header></Header>
            {mostrarTarea ? screenToRender : <CrearReporteTrabajo setter={setCargarTarea} />}
        </div>
    );
}