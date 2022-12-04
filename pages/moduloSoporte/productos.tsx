import styles from '../../styles/soporte.module.css'
import Header from '../header';
import ProductCard from './productCard';
import Head_ from '../head';

import Link from 'next/link';
import productCard from './productCard';
import { ProductProperties } from '../../components/soporte/types';
import { useEffect, useState } from 'react';



export default function Productos() {


    const [productos, setProductos]: [Array<ProductProperties>, any] = useState([])

    useEffect(() => {
      fetch("https://aninfo2c222back-production.up.railway.app/api/productos")
        .then((res) => res.json())
        .then((data) => {
          setProductos(data)
        })
    }, [])
  

    return(<div className={styles.container}>

       <Head_ nombre='Productos y Versiones'></Head_>
      
        <Header></Header>

        <div className={styles.navbar}>
          <div className={styles.navbarIzq}> 
            <h1>Soporte</h1>
            <Link href={"soporte"}><button>Tickets</button></Link>
          </div>
          <div className={styles.navbarDer}> 

          </div>
        </div>

                
        <div className={styles.productos}>
            {(productos).map((producto) => (
                <div key={producto.id}>
                    <Link href={'/moduloSoporte/productos/' + producto.id}>
                    <ProductCard titulo={producto.nombre} id={producto.id} fecha_lanzamiento={producto.fecha_lanzamiento?.slice(0,10)}></ProductCard>
                    </Link>
                </div>
            ))}
        </div>


            <div className={styles.contenedorBoton}>
            <a href='/moduloSoporte/productoCreate'><button>CREAR PRODUCTO</button></a>
            </div>
  
  
      </div>
    );
  }