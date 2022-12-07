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

interface ClientesProperties {
  id: number;
  'razon social': string;
  CUIT: string;
}
interface EmpleadoProperties {
  legajo: number,
  Nombre: string,
  Apellido: string,
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

  const [clientes, setClientes]: [Array<ClientesProperties> ,any] = useState([])

  const [empleados, setEmpleados]: [Array<EmpleadoProperties> ,any] = useState([])
  
  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos")
      .then((res) => res.json())
      .then((data) => {
        setProyectos(data)
      })
  }, [])


  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/clients_ext")
      .then((res) => res.json())
      .then((data) => {
        setClientes(data)
      })
  }, [])

  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/recursos_ext")
      .then((res) => res.json())
      .then((data) => {
        setEmpleados(data)
      })
  }, [])



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
              <input type="text"  {...register("nombre")} placeholder="Nombre de proyecto" size={20} >
              </input>
            </div>

            <br />
            <div>

            <div>
              <label htmlFor = "Descripción"> Descripción</label>
              <br/>
              <input type = "text" id = "Descripción" {...register("descripción")} size = {20}>
              </input>
              <br/>
            </div> 
              <input type = "hidden" id ="projectState" {...register("estado")} value = "Pendiente" > 
              </input>
            </div>


            <div>
            <label >Cliente</label><br/>
            <select id = "cliente_id" {...register("id_cliente")}>
                            {(clientes.map( (cliente) =>
                                <option value = {cliente?.id}> {cliente?.['razon social']}</option>))}
                            </select>
            </div>
            <div>
              <label htmlFor = "ProjectManager"> Project Manager </label> <br/>
              <select id = "projectManager" {...register("project_manager")}>
                            {(empleados.map( (empleado) =>
                                <option value = {empleado?.Nombre}> {empleado?.Nombre} {empleado?.Apellido} </option>))}
                            </select>
            </div>
            <div>
              <label htmlFor = "FechaDeInicio"> Fecha de inicio </label> <br/>
              <input type = "date" id = "FechaDeInicio" {...register("fecha_inicio")}  size={50}>
              </input>
            </div>
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
