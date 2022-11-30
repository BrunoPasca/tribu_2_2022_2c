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
            fecha: "11/15/2022",
            justificante: "tenia covid"
        },
        {
            id: "2",
            legajo_empleado: "3",
            fecha: "05/10/2022",
            justificante: "habia un piquete"
        }
    ]

    var getvalidDate = function(d : any){ return new Date(d) }
    function DateBetweenTwoDates(fromDate : any, toDate : any, givenDate : any){
        return getvalidDate(givenDate) <= getvalidDate(toDate) && getvalidDate(givenDate) >= getvalidDate(fromDate);
    }
    
    
    return (
        <TableContainer component={Paper} sx={{borderRadius:"2rem"}}>
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
                align="center"
            >
                Faltas Cargadas <br></br> {props.fechaInicio} - {props.fechaFin}
            </Typography>

            <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">

                <TableHead>
                    <TableRow>
                        <TableCell align="center">Fecha</TableCell>
                        <TableCell align="center">Justificante</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reportes.filter(reporte => reporte.legajo_empleado == legajo && DateBetweenTwoDates(inicio, fin, reporte.fecha)).map((reporte) => (
                        <TableRow
                            key={reporte.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {reporte.fecha}
                            </TableCell>
                            <TableCell align="center">{reporte.justificante}</TableCell>
                            <TableCell padding='none'>
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