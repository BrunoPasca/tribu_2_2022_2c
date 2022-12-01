import Link from 'next/link';
import { useEffect, useState } from 'react';
import GuardiaCard from '../cards/guardiaCard';
import { Guardia } from '../types';

  
export default function ColumnaGuardia() {

  const [reportes, setReportes]: [Array<Guardia> ,any] = useState([])


  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/guardias")
      .then((res) => res.json())
      .then((data) => {
        setReportes(data)

      })
  }, [])

    return (
        <div>
          {(reportes).map((reporte) => ( 
            <div key={reporte.id}>
              <GuardiaCard legajo_empleado={reporte.legajo_empleado} fecha_inicio={reporte.fecha_inicio} fecha_fin={reporte.fecha_fin}></GuardiaCard>
            </div>
          ))}
        </div>
      )
    }