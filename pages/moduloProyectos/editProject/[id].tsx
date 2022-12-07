import Head_ from '../../head'
import Header from '../../header'
import styles from '../../../styles/proyectos.module.css'
import sup_styles from '../../../styles/soporte.module.css'
import { useRouter } from 'next/router'
import { createSemanticDiagnosticsBuilderProgram } from 'typescript'
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';



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



export default function proyectoEdit(this: any) {

  const router = useRouter();
  const { id } = router.query;


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
    fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos/" +id , {
          method: 'PUT', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        })
    alert("El proyecto se edito correctamente")
})

  return (
    <>
      <Head_ nombre='Editar proyecto'></Head_>
      <Header></Header>


      <div className={styles.proyectoView}>
        <h1 className={styles.tituloEdit}>Editar proyecto {id}</h1>
        <div className={styles.contenedorPadre}>
        <form onSubmit = {onSubmit}>
          <div className = {styles.camposForm}>
            <div>
              <label htmlFor="fname">Nombre proyecto </label>
              <br/>
              <input type="text"  {...register("nombre")} placeholder="Nombre de proyecto" size={20} >
              </input>
            </div>

            <div>

            <div>
              <label htmlFor = "Descripción"> Descripción</label> <br/>
              <input type = "text" id = "Descripción" {...register("descripción")} size = {20}>
              </input>
            </div> 


              <label htmlFor = "EstadoProyecto">Estado: </label><br/>
              <select id = "EstadoProyecto" {...register("estado")}>
                  <option value = "Estado" disabled>Estado</option>
                  <option value = "Pendiente">Pendiente</option>
                  <option value = "En curso">En curso</option>
                  <option value = "Finalizado">Finalizado</option>
                  <option value = "Cancelado">Cancelado</option>
              </select>
              
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

      </div>
    </>
  )
}



