import React, { useEffect, useState } from "react"
import CargarFalta from "./cargarFalta";
import CargarTarea from "./cargarTarea";
import CrearReporteTrabajo from "./cargarDatos";
import styles from '../../styles/recursos.module.css'
import Header from '../header';
import Head_ from '../head';


export default function LoadData() {
    const [mostrarTarea, setCargarTarea] = React.useState(false);

    return (
        <div>
            <Header></Header>
            {mostrarTarea ? <CargarTarea /> : <CrearReporteTrabajo />}
        </div>
    );
}