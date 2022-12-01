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

    /* HAY QUE USAR UN ENDPOINT */
    const proyectos_test = [
        // Formato fecha dd/MM/yyyy
        {
            id: "1",
            nombre: "Proyecto 1",
            fecha_inicio: "11/07/2022",
            fecha_fin: "11/09/2022",
            horas_esperadas: "80",
            horas_totales: "93",
        },
        {
            id: "2",
            nombre: "Proyecto 2",
            fecha_inicio: "23/07/2022",
            fecha_fin: "29/09/2022",
            horas_esperadas: "90",
            horas_totales: "87",
        },
        {
            id: "3",
            nombre: "Proyecto 3",
            fecha_inicio: "11/07/2022",
            fecha_fin: "11/10/2022",
            horas_esperadas: "60",
            horas_totales: "63",
        },
    ]

    const [proyectos, setProyectos] = React.useState([])

    React.useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/proyectos/")
            .then((res) => res.json())
            .then((data) => {
                setProyectos(data)
            })
    }, [])


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
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {proyectos_test.map((proyecto) => (
                        <TableRow
                            key={proyecto.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{proyecto.nombre}</TableCell>
                            <TableCell align="center">{proyecto.fecha_inicio}</TableCell>
                            <TableCell align="center">{proyecto.fecha_fin}</TableCell>
                            <TableCell align="center">{proyecto.horas_esperadas}</TableCell>
                            <TableCell align="center">{proyecto.horas_totales}</TableCell>
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