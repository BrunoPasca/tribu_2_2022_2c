import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { Licencia } from '../../../../components/recursos/types';
import Header from '../../../header';
import { useRouter } from 'next/router';
import styles from "../../../../styles/recursos.module.css"

export default function TablaAllLicencias(props: any) {

    const router = useRouter();
    const {id}  = router.query;


    const [licencias, setLicencias] = React.useState<any[]>([])
    React.useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/licencia")

            .then(response => {
                if (response.status === 404) {
                    throw new Error("Error al recuperar las horas.")
                }
                return response
            })
            .then((res) => res.json())
            .then((data) => {
                setLicencias(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className={styles.container}>
            <Header></Header>
            <TableContainer component={Paper} sx={{ borderRadius: "2rem" }}>
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                    align="center"
                    fontSize={30}
                >
                    Licencias
                    <br></br>
                    <p style={{fontSize:"15px"}}>Legajo: {id}</p>
                    <Link href={"../horas/" + id}><p>→</p></Link>
                </Typography>
                {/* 
            <SearchBar
                placeholder="Buscar por nombre"
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />*/}
                <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Tipo</TableCell>
                            <TableCell align="center">Descripción</TableCell>
                            <TableCell align="center">Inicio</TableCell>
                            <TableCell align="center">Fin</TableCell>
                            <TableCell align="center">Goce de Sueldo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {licencias.filter((reporte) => reporte.legajo_empleado === Number(id)).map((reporte) => (
                            <TableRow
                                key={reporte.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{reporte.id}</TableCell>
                                <TableCell align="center">{reporte.tipo_licencia}</TableCell>
                                <TableCell align="center">{reporte.descripcion}</TableCell>
                                <TableCell align="center">{new Date(reporte.fecha_inicio).toLocaleDateString()}</TableCell>
                                <TableCell align="center">{new Date(reporte.fecha_fin).toLocaleDateString()}</TableCell>
                                <TableCell align="center">{Number(reporte.goce_sueldo) == 1 ? "Sí" : "No"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={styles.containerBotones}>
                <Link href={"/moduloRecursos/cargarPorPersonas"}> <button style={{backgroundColor:"#134074", color:"white"}}>Ver Recursos</button></Link>      
            </div>
        </div>

    );
}