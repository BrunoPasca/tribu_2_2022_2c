import styles from '../../../styles/proyectos.module.css'
import Header from '../../header';
import Head_ from '../../head';
import ColumnaTarea from '../columnaTareas_copy';
import React from 'react';
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

export default function Tarea() {

    const router = useRouter();
    const {id} = router.query;

  const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
	React.useEffect(() => {
		setInitialRenderComplete(true);
	}, []);

	if (!initialRenderComplete) {
		return null;
	} else {

    return(<div className={styles.container}>

       <Head_ nombre='Tareas'></Head_>
      
        <Header></Header>

        <div className={styles.navbar}>
          <div className={styles.navbarIzq}> 
            <h1>Tareas del proyecto {id}</h1>
          </div>
          <div className={styles.navbarDer}> 
            <input placeholder='Buscar...'></input>
            <button className={styles.botonBuscar}>Buscar</button>
          </div>
        </div>
        
        <div className={styles.grilla}>
            <div>
              <h2 className={styles.grillaEncabezado}>Abierta</h2>  
              <ColumnaTarea estadoFiltro='Abierta' id_proyecto = {Number(id)} ></ColumnaTarea>  
            </div>
            <div>
            <h2 className={styles.grillaEncabezado}>En análisis</h2>  
              <ColumnaTarea estadoFiltro='En análisis' id_proyecto = {Number(id)}></ColumnaTarea>
            </div>
            <div>
            <h2 className={styles.grillaEncabezado}>En progreso</h2>  
              <ColumnaTarea estadoFiltro='En progreso' id_proyecto = {Number(id)}></ColumnaTarea>
            </div>
            <div>
            <h2 className={styles.grillaEncabezado}>Suspendida</h2>  
              <ColumnaTarea estadoFiltro='Suspendida' id_proyecto = {Number(id)}></ColumnaTarea>
            </div>
            <div>
            <h2 className={styles.grillaEncabezado}>Completada</h2>  
              <ColumnaTarea estadoFiltro='Completada' id_proyecto = {Number(id)}></ColumnaTarea>
            </div>
          </div>
        
        <main className={styles.colorFondo}>
          <div className={styles.contenedorBoton}>
            <a href='/moduloProyectos/crearTarea'><button>Agregar nueva tarea</button></a>
          </div>

        </main>
  
        <footer className={styles.footer}>

        </footer>
      </div>
    );
  }
}