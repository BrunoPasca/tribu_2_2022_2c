import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Typography } from '@mui/material';
import BorrarFaltaModal from './borrarFaltaModal';
import BorrarGuardiaModal from './borrarGuardiaModal';

export default function MuiTable(props : any) {
    // Pop up para editar las horas de una tarea
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const legajo = props.legajo

    const inicio = props.fechaInicio
    const fin = props.fechaFin

    /* HAY QUE USAR UN ENDPOINT */
    const reportes =         [
        {
            id: "1",
            legajo_empleado: "2",
            tipo_licencia: "examen",
            descripcion:"tuve un examen de MemoI",
            fecha_inicio: "8/12/2022",
            fecha_fin: "10/12/2022",
            goce_sueldo : "0"
        },
        {
            id: "2",
            legajo_empleado: "5",
            tipo_licencia: "medica",
            descripcion:"accidente de auto",
            fecha_inicio: "11/12/2022",
            fecha_fin: "11/12/2022",
            goce_sueldo : "1"
        }
    ]

    // Formatea 'dd/mm/yyyy' a 'yyyy-mm-dd' (formato reconocido por Date)
    function modificarFormatoFecha(date : string) {
        const [day, month, year] = date.split('/');
        // @ts-ignore
        return new Date(+year, month - 1, +day);
    }

    function DateBetweenTwoDates(fromDate : string, toDate : string, givenDate : string) {
        const start = modificarFormatoFecha(fromDate);
        const end = modificarFormatoFecha(toDate);
        const date = modificarFormatoFecha(givenDate);

        return (start <= date && date <= end);
    }
    
    return (
        <TableContainer component={Paper} sx={{borderRadius:"2rem", width:"600px"}}>
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
                align="center"
            >
                Guardias Cargadas <br></br> {props.fechaInicio} - {props.fechaFin}
            </Typography>

            <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">

                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Tipo</TableCell>
                        <TableCell align="center">Descripción</TableCell>
                        <TableCell align="center">Desde</TableCell>
                        <TableCell align="center">Hasta</TableCell>
                        <TableCell align="center">Goce de Suelgo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reportes
                        .filter(reporte => DateBetweenTwoDates(inicio, fin, reporte.fecha_inicio) && DateBetweenTwoDates(inicio, fin, reporte.fecha_fin))
                        .map((reporte) => (
                            <TableRow
                                key={reporte.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {reporte.id}
                                </TableCell>
                                <TableCell align="center">{reporte.tipo_licencia}</TableCell>
                                <TableCell align="center">{reporte.descripcion}</TableCell>
                                <TableCell align="center">{reporte.fecha_inicio}</TableCell>
                                <TableCell align="center">{reporte.fecha_fin}</TableCell>
                                <TableCell align="center">{reporte.goce_sueldo}</TableCell>
                                <TableCell padding="none">
                                    <IconButton onClick={handleOpenDelete}>
                                        <DeleteIcon/>
                                    </IconButton>
                                    <BorrarGuardiaModal isOpen = {openDelete} setOpen={setOpenDelete} idReporte={reporte.id}></BorrarGuardiaModal>
                                </TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}