import styles from '../../../styles/ticket.module.css'
import Head_ from '../../head'
import Header from '../../header'
import { ClientesProperties, ClientesYProductosProperties, EmpleadoProperties, ProductProperties, ProdVerProperties, TicketProperties, VersionProperties } from '../../../components/soporte/types';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import HeaderSoporte from '../../headerSoporte';
import VersionCard from '../versionCard';




export default function TicketCreate() {


const router = useRouter();
const {id} = router.query;

const [prover, setProver]: [Array<ProdVerProperties>, any] = useState([])

useEffect(() => {
  fetch("https://aninfo2c222back-production.up.railway.app/api/prodversions")
    .then((res) => res.json())
    .then((data) => {
      setProver(data)
    })
}, [])

  const [versiones, setVersiones]: [Array<VersionProperties>, any] = useState([])

  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/versions")
      .then((res) => res.json())
      .then((data) => {
        setVersiones(data)
      })
  }, [])


  const [productos, setProductos]: [Array<ProductProperties>, any] = useState([])

  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data)
      })
  }, [])


  const [producto, setProducto]: [any, any]= useState()







  const { register, handleSubmit } = useForm<ClientesYProductosProperties>()

  const onSubmit = handleSubmit((data) => {
    
    data.id_cliente = Number(id)

    fetch("https://aninfo2c222back-production.up.railway.app/api/cliente_prod", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      })


    alert("Se agrego el producto correctamente")
  })

    // HAY UN BUG QUE TE DEJA SELECCIONAR LAS VERSIONES DEPRECADAS

  return (

    <form className={styles.form} onSubmit={onSubmit}>

      <Head_ nombre='Agregar Producto'></Head_>


      <HeaderSoporte></HeaderSoporte>

      <div className={styles.camposForm}>
        <h1>Agregar un producto</h1>
        
        <label>PRODUCTOS</label>
        <br/>
        <select {...register("id_producto")} onChange={e => setProducto(e.target.value)}>
            {(productos).filter(elemento => elemento.activo == 1).map((producto) => (
                    <option value={producto.id} key={producto.id}>
                        {producto?.nombre}
                    </option>
                ))}
        </select>


        

        <br></br>

    

        <label>VERSIONES</label>
        <br/>
        <select {...register("id_version")}>
            {(prover).filter(i => i.producto_id == producto).map((version) => (
                    <option value={version.id} key={version.id}>
                        {versiones.filter(e => e.activo == 1).find(element => element.id == version.version_id)?.nombre}
                    </option>
                ))}
        </select>


        <div className={styles.botonesView}>
          <button type="reset">Cancelar</button>
          <button type="submit">Guardar</button>
        </div>
      </div>
    </form>
  )
}