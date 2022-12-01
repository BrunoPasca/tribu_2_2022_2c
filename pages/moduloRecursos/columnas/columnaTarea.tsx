import Link from 'next/link';
import { useEffect, useState } from 'react';
import TareaCard from '../cards/tareaCard';
import { Tarea } from '../types';

  
export default function ColumnaTarea() {

  const [reportes, setReportes]: [Array<Tarea> ,any] = useState([])


  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/horas")
      .then((res) => res.json())
      .then((data) => {
        setReportes(data)

      })
  }, [])

    return (
        <div>
          {(reportes).map((reporte) => ( 
            <div key={reporte.id}>
              <TareaCard fecha={reporte.fecha} cant_horas={reporte.cant_horas} id_tarea={reporte.id_tarea}></TareaCard>
            </div>
          ))}
        </div>
      )
    }