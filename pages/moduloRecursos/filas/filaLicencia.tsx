import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Typography } from '@mui/material';
import BorrarLicenciaModal from '../borrarLicenciaModal';

export default function FilaLicencia(props: any){

    if (!props.licencias) return(<div></div>);
    let licencias = props.licencia
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    return(
        <TableRow
            key={licencias["id"]}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center" component="th" scope="row">
                {licencias["id"]}
            </TableCell>
            <TableCell align="center">{licencias["tipo_licencia"]}</TableCell>
            <TableCell align="center">{licencias["descripcion"]}</TableCell>
            <TableCell align="center">{new Date(licencias["fecha_inicio"]).toLocaleDateString()}</TableCell>
            <TableCell align="center">{new Date(licencias["fecha_fin"]).toLocaleDateString()}</TableCell>
            <TableCell align="center">{licencias["goce_sueldo"] ? "Sí" : "No"}</TableCell>
            <TableCell padding="none">
                <IconButton onClick={handleOpenDelete}>
                    <DeleteIcon />
                </IconButton>
                <BorrarLicenciaModal isOpen={openDelete} setOpen={setOpenDelete} reporteId={licencias["id"]}></BorrarLicenciaModal>
            </TableCell>
        </TableRow>
    )
}