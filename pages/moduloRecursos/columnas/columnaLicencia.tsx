import Link from 'next/link';
import { useEffect, useState } from 'react';
import LicenciaCard from '../cards/licenciaCard';
import { Licencia } from '../types';

  
export default function ColumnaLicencia() {

  const [reportes, setReportes]: [Array<Licencia> ,any] = useState([])


  useEffect(() => {
    fetch("https://aninfo2c222back-production.up.railway.app/api/licencia")
      .then((res) => res.json())
      .then((data) => {
        setReportes(data)
      })
      .catch(err => console.log(err.message))
  }, [])

    return (
        <div>
          {(reportes).map((reporte) => ( 
            <div key={reporte.id}>
              <LicenciaCard tipo_licencia={reporte.tipo_licencia} fecha_inicio={reporte.fecha_inicio} fecha_fin={reporte.fecha_fin}></LicenciaCard>
            </div>
          ))}
        </div>
      )
    }