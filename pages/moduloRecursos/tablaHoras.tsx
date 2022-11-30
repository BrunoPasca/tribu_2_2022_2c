import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import BorrarHoraModal from './borrarHoraModal';
import Edit from '@mui/icons-material/Edit';
import EditarHoraModal from './editarHoraModal';

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
            id_tarea: "3",
            cant_horas:"5",
            fecha: "11/10/2022",
            estado: "abierto",
        },
        {
            id: "2",
            legajo_empleado: "3",
            id_tarea: "4",
            cant_horas:"2",
            fecha: "11/02/2022",
            estado: "abierto",
        }
    ]
    

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">TareaId</TableCell>
                        <TableCell align="center">Fecha</TableCell>
                        <TableCell align="center">Horas</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reportes.map((reporte) => (
                        <TableRow
                            key={reporte.id_tarea}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {reporte.id_tarea}
                            </TableCell>
                            <TableCell align="center">{reporte.fecha}</TableCell>
                            <TableCell align="center">{reporte.cant_horas}</TableCell>
                            <TableCell>
                                <IconButton onClick={handleOpenDelete}>
                                    <DeleteIcon/>
                                </IconButton>
                                <BorrarHoraModal isOpen = {openDelete} setOpen={setOpenDelete} reporteId={reporte.id}></BorrarHoraModal>
                                <IconButton onClick={handleOpenEdit}>
                                    <EditIcon/>
                                </IconButton>
                                <EditarHoraModal isOpen = {openEdit} setOpen={setOpenEdit} reporteId={reporte.id} tareaId={reporte.id_tarea} cantHoras={reporte.cant_horas}></EditarHoraModal>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}