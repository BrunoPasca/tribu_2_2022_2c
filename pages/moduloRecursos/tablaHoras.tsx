import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: string,
    fat: number,
) {
    return { name, calories, fat };
}

const rows = [
    createData('Tarea 1', '01/10/2022', 10),
    createData('Tarea 2', '02/10/2022', 10),
    createData('Tarea 3', '03/10/2022', 10),
    createData('Tarea 4', '04/10/2022', 10),
    createData('Tarea 5', '05/10/2022', 10),
];

export default function MuiTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre Tarea</TableCell>
                        <TableCell >Inicio DD/MM/YYYY</TableCell>
                        <TableCell align="right"> Cantidad horas</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}