import Link from 'next/link';
import { useEffect, useState } from 'react';
import FaltaCard from '../cards/faltaCard';
import { Falta } from '../types';

  
export default function ColumnaTarea() {

  const [reportes, setReportes]: [Array<Falta> ,any] = useState([])


  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/faltas")
      .then((res) => res.json())
      .then((data) => {
        setReportes(data)

      })
  }, [])

    return (
        <div >
          {(reportes).map((reporte) => ( 
            <div key={reporte.id}>
              <FaltaCard fecha={reporte.fecha} legajo_empleado={reporte.legajo_empleado}></FaltaCard>
            </div>
          ))}
        </div>
      )
    }