import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Typography } from '@mui/material';
import BorrarGuardiaModal from '../borrarGuardiaModal';

export default function FilaGuardia(props: any){

    if (!props.guardia) return(<div></div>);
    let guardia = props.guardia
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    return(
        <TableRow
            key={guardia['id']}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center" component="th" scope="row">
                {guardia['id']}
            </TableCell>
            <TableCell align="center">{new Date(guardia["fecha_inicio"]).toLocaleDateString()}</TableCell>
            <TableCell align="center">{new Date(guardia["fecha_fin"]).toLocaleDateString()}</TableCell>
            <TableCell padding="none">
                <IconButton onClick={handleOpenDelete}>
                    <DeleteIcon />
                </IconButton>
                <BorrarGuardiaModal isOpen={openDelete} setOpen={setOpenDelete} reporteId={guardia["id"]}></BorrarGuardiaModal>
            </TableCell>
        </TableRow>
    )
}