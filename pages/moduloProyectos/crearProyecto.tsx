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
  fecha_fin_estimado:string,
  estado:string,
  horas_reales:number,
  descripción:string,
  project_manager:string,
  id_cliente:number,
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
    /*data.prioridad = "HOLA"
    data.costo_acumulado = 0;
    data.horas_reales = 0;
    data.horas_estimadas= 40;*/
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
              <input type="text"  {...register("nombre")} placeholder="Nombre de proyecto" size={50} >
              </input>
            </div>

            <br />
            <div>

            <div>
              <label htmlFor = "Descripción"> Descripción</label>
              <input type = "text" id = "Descripción" {...register("descripción")} size = {20}>
              </input>
            </div> 

              <br/>
              <input type = "hidden" id ="projectState" {...register("estado")} value = "Pendiente" >
                
              </input>
            </div>
            <br />
           

            <br />

            <div>
              <label htmlFor = "ClientId">
                Id cliente: 
              </label>
              <input type= "number" id = "ClientId" {...register("id_cliente")}></input>
            </div>
            <div>
              <label htmlFor = "ProjectManager"> Project Manager id: </label> 
              <input type = "text" id = "ProjectManager" {...register("project_manager")}></input> 
            </div>
            <div>
              <label htmlFor = "FechaDeInicio"> Fecha de inicio </label>
              <br/>
              <input type = "date" id = "FechaDeInicio" {...register("fecha_inicio")}  size={50}>
              </input>
            </div>
            <br />
            <div>
              <label htmlFor = "FechaDeFin"> Fecha estimada de fin </label>
              <br/>
                <input type = "date" id = "FechaDeFin" {...register("fecha_fin_estimado")} >
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
