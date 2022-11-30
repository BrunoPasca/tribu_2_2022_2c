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
import BorrarFaltaModal from './borrarFaltaModal';

export default function MuiTable(props : any) {
    // Pop up para editar las horas de una tarea
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    /* HAY QUE USAR UN ENDPOINT */
    const reportes =         [
        {
            id: "1",
            legajo_empleado: "2",
            fecha: "11/10/2022",
            justificante: "tenia covid"
        },
        {
            id: "2",
            legajo_empleado: "3",
            fecha: "05/10/2022",
            justificante: "habia un piquete"
        }
    ]
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Fecha</TableCell>
                        <TableCell align="center">Justificante</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reportes.map((reporte) => (
                        <TableRow
                            key={reporte.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {reporte.fecha}
                            </TableCell>
                            <TableCell align="center">{reporte.justificante}</TableCell>
                            <TableCell>
                                <IconButton onClick={handleOpenDelete}>
                                    <DeleteIcon/>
                                </IconButton>
                                <BorrarFaltaModal isOpen = {openDelete} setOpen={setOpenDelete} idReporte={reporte.id}></BorrarFaltaModal>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}