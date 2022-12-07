import styles from '../../../styles/proyectos.module.css'
import Header from '../../header';
import Head_ from '../../head';
import ColumnaSubtarea from '../columnaSubtareas';
import React from 'react';
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

export default function Subtarea() {

  const router = useRouter();
  const { id } = router.query;

  const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
  React.useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    return null;
  } else {
    /*
    <div className={styles.navbarDer}> 
                <input placeholder='Buscar...'></input>
                <button className={styles.botonBuscar}>Buscar</button>
              </div>
               */
    return (<div className={styles.container}>

      <Head_ nombre='Subtareas'></Head_>

      <Header></Header>

      <div className={styles.navbar}>
        <div className={styles.navbarIzqT}>
          <h1>SUBTAREAS DE LA TAREA {id}</h1>
        </div>

      </div>

      <div className={styles.grilla}>
        <div>
          <h2 className={styles.grillaEncabezado}>Abierta</h2>
          <ColumnaSubtarea estadoFiltro='Abierta' id_padre={Number(id)} ></ColumnaSubtarea>
        </div>
        <div>
          <h2 className={styles.grillaEncabezado}>En análisis</h2>
          <ColumnaSubtarea estadoFiltro='En análisis' id_padre={Number(id)}></ColumnaSubtarea>
        </div>
        <div>
          <h2 className={styles.grillaEncabezado}>En progreso</h2>
          <ColumnaSubtarea estadoFiltro='En progreso' id_padre={Number(id)}></ColumnaSubtarea>
        </div>
        <div>
          <h2 className={styles.grillaEncabezado}>Suspendida</h2>
          <ColumnaSubtarea estadoFiltro='Suspendida' id_padre={Number(id)}></ColumnaSubtarea>
        </div>
        <div>
          <h2 className={styles.grillaEncabezado}>Completada</h2>
          <ColumnaSubtarea estadoFiltro='Completada' id_padre={Number(id)}></ColumnaSubtarea>
        </div>
      </div>

      <main className={styles.colorFondo}>
        <div className={styles.contenedorBoton}>
          <a href={'/moduloProyectos/tareaCrear/' + id}><button>Agregar nueva tarea</button></a>
        </div>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
    );
  }
}