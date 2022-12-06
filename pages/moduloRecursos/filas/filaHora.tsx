import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Typography } from '@mui/material';
import BorrarHoraModal from '../borrarHoraModal';
import EditarHoraModal from '../editarHoraModal';
import EditIcon from '@mui/icons-material/Edit';


export default function FilaHora(props: any){

    let hora = props.hora

    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    return(
        <TableRow
            key={hora["id"]}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center" component="th" scope="row">{hora["id"]}</TableCell>
            <TableCell align="center">{hora["id_tarea"]}</TableCell>
            <TableCell align="center">{new Date(hora["fecha"]).toLocaleDateString()}</TableCell>
            <TableCell align="center">{hora["cant_horas"]}</TableCell>
            <TableCell align="center">{hora["extra"] ? "Sí" : "No"}</TableCell>
            <TableCell padding="none" align="right">
                <IconButton onClick={handleOpenDelete}><DeleteIcon /></IconButton>
                <BorrarHoraModal isOpen={openDelete} setOpen={setOpenDelete} reporteId={hora["id"]}></BorrarHoraModal>
            </TableCell>
            <TableCell padding="none">
                <IconButton onClick={handleOpenEdit}><EditIcon /></IconButton>
                <EditarHoraModal isOpen={openEdit} setOpen={setOpenEdit} reporteId={hora["id"]}
                    tareaId={hora["id_tarea"]} cantHoras={hora["cant_horas"]} fecha={hora["fecha"]}>
                </EditarHoraModal>
            </TableCell>
        </TableRow>
    )
}