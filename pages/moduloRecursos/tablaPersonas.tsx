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
    const [empleados, setEmpleados] = React.useState([])
    /* HAY QUE USAR UN ENDPOINT */
    const empleados_test = [
        {
            legajo: "1",
            nombre: "Bruno",
            horas_totales: "3",
            guardia: "5",
            horas_extra: "4",
        },
        {
            legajo: "2",
            nombre: "Julian",
            horas_totales: "3",
            guardia: "5",
            horas_extra: "2",
        },
        {
            legajo: "3",
            nombre: "Enzo",
            horas_totales: "3",
            guardia: "5",
            horas_extra: "17",
        },
    ]

    React.useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/employees/")

            .then((res) => res.json())
            .then((data) => {
                setEmpleados(data)
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
                Empleados
            </Typography>

            <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">

                <TableHead>
                    <TableRow>
                        <TableCell align="center">Legajo</TableCell>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">Horas Totales</TableCell>
                        <TableCell align="center">Tiempo Guardia</TableCell>
                        <TableCell align="center">Horas Extra</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {empleados_test.map((empleado) => (
                        <TableRow
                            key={empleado.legajo}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{empleado.legajo}</TableCell>
                            <TableCell align="center">{empleado.nombre}</TableCell>
                            <TableCell align="center">{empleado.horas_totales}</TableCell>
                            <TableCell align="center">{empleado.guardia}</TableCell>
                            <TableCell align="center">{empleado.horas_extra}</TableCell>
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