import Head_ from '../head'
import Header from '../header'
import styles from '../../styles/proyectos.module.css'
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

/*intento de conectar con el back*/
interface ProyectosProperties{
  id: number,
  nombre:string ,
  fecha_inicio:string,
  fecha_fin:string,
  estado:string,
  prioridad:string,
  costo_acumulado:number,
  horas_estimadas:number,
  horas_reales:number,
}

export default function crearProyecto() {
/*intento de conectar con el back*/
  const [proyectos, setProyectos]: [Array<ProyectosProperties> ,any] = useState([])

  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos")
      .then((res) => res.json())
      .then((data) => {
        setProyectos(data)
      })
  }, [])
  

  const {register, handleSubmit} = useForm<ProyectosProperties>()


  const onSubmit = handleSubmit((data) =>{
    console.log(JSON.stringify(data))
    fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos", {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        })
    alert("El proyecto se creo correctamente")
})
/*hasta aca el intento de conectar con el back, despues sigue en el form*/
  return(
    
    <>
    <Head_ nombre='Nuevo proyecto'></Head_>
    <Header></Header>
    <main className={styles.main}>
      <div className={styles.containerEspecial}>
          <form onSubmit = {onSubmit}>
          <div className = {styles.camposForm}>
            <h1 className={styles.tituloForm}>Nuevo proyecto</h1>
            <div>
              <label htmlFor="fname">Nombre proyecto </label>
              <br/>
              <input type="text"  id="fname" name="firstname" placeholder="Nombre de proyecto" size={50} >
              </input>
            </div>
            <br />
            <div>
              <label htmlFor = "projectState">
                Estado 
              </label>
              <br/>
              <select>
                  <option disabled selected> Estado</option>
                  <option value = "optionDesarrollo"> Desarrollo </option>
                  <option value = "optionProduccion"> Producción</option>
                  <option value = "optionPostProduccion">Post Producción </option>
              </select>
            </div>
            <br />
            <div>
              <label  htmlFor = "Client name">Cliente  </label>
              <br/>
              <input type = "text" id = "projectClient" placeholder="Nombre cliente" size={50}></input>
            </div >
            <br />

            <div>
              <label htmlFor = "FechaDeInicio"> Fecha de inicio </label>
              <br/>
              <input type = "date" id = "FechaDeInicio" name = "comienzoDeProyecto" size={50}>
              </input>
            </div>
            <br />
            <div>
              <label htmlFor = "FechaDeFin"> Fecha estimada de fin </label>
              <br/>
                <input type = "date" id = "FechaDeFin" name = "finDeProyecto">
                </input>
            </div>
            <br />
            
            <div className={styles.botonesView}>
              <button type="reset">Cancelar</button>
              <button type = "submit">Guardar</button>
            </div>
          </div>
              
          </form>
      </div>
    </main>
  </>
  );
}

/*
function button_create_project(){
  alert("Back end creame un proyecto");
  return true;
}

var button_function = button_create_project;*/