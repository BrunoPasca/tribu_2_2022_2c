import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


export default function TablaPersonas(props: any) {
    const [proyectos, setProyectos] = React.useState([])

    React.useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos/")
            .then((res) => res.json())
            .then((data) => {
                setProyectos(data)
            })
    }, [])

    function obtenerDesvio(proyecto: any) {
        const desvio = proyecto["horas_estimadas"] - proyecto["horas_reales"];
        if (desvio < 0) {
            return (
                <p style={{ color: 'red' }}>{desvio}</p>
            );
        } else {
            return (
                <p style={{ color: 'green' }}>{desvio}</p>
            );
        }
    }

    return (
        <TableContainer component={Paper} sx={{ borderRadius: "2rem" }}>
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
                align="center"
                fontSize={30}
            >
                Proyectos
            </Typography>

            <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">

                <TableHead>
                    <TableRow>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">Fecha Inicio</TableCell>
                        <TableCell align="center">Fecha Fin</TableCell>
                        <TableCell align="center">Horas Estimadas</TableCell>
                        <TableCell align="center">Horas Totales</TableCell>
                        <TableCell align="center">Desvío</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {proyectos.map((proyecto) => (
                        <TableRow
                            key={proyecto["id"]}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{proyecto["nombre"]}</TableCell>
                            <TableCell align="center">{proyecto["fecha_inicio"]}</TableCell>
                            <TableCell align="center">{proyecto["fecha_fin"]}</TableCell>
                            <TableCell align="center">{proyecto["horas_estimadas"]}</TableCell>
                            <TableCell align="center">{proyecto["horas_reales"]}</TableCell>
                            <TableCell align="center">{obtenerDesvio(proyecto)}</TableCell>
                            <TableCell padding='none'>
                                <button>Ampliar</button>
                            </TableCell>
                            <TableCell padding='none'>
                                <button>Generar Reporte</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}