import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Typography } from '@mui/material';
import BorrarFaltaModal from '../borrarFaltaModal';

export default function FilaFalta(props: any){

    if (!props.falta) return(<div></div>);
    let falta = props.falta
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    return(
        <TableRow
            key={falta["id"]}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center" component="th" scope="row">
                {falta["id"]}
            </TableCell>
            <TableCell align="center">{new Date(falta["fecha"]).toLocaleDateString()}</TableCell>
            <TableCell align="center">{falta["justificante"]}</TableCell>
            <TableCell padding='none'>
                <IconButton onClick={handleOpenDelete}>
                    <DeleteIcon />
                </IconButton>
                <BorrarFaltaModal key= {falta["id"]} isOpen={openDelete} setOpen={setOpenDelete} reporteId={falta['id']}></BorrarFaltaModal>
            </TableCell>
        </TableRow>
    )
}