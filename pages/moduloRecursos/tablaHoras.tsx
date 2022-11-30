import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

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

export default function MuiTable({ valor }: { valor: string }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">{valor}</TableCell>
                        <TableCell align="center">DD/MM/YYYY</TableCell>
                        <TableCell align="center">Horas</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="center">{row.fat}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}