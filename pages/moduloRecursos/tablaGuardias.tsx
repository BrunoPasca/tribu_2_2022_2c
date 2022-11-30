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
            fecha_inicio: "11/07/2022",
            fecha_fin: "11/20/2022"
        },
        {
            id: "2",
            legajo_empleado: "4",
            fecha_inicio: "11/15/2022",
            fecha_fin: "11/20/2022"
        }
        
    ]

    var getvalidDate = function(d : any){ return new Date(d) }
    function DateBetweenTwoDates(fromDate : any, toDate : any, givenDate : any){
        return getvalidDate(givenDate) <= getvalidDate(toDate) && getvalidDate(givenDate) >= getvalidDate(fromDate);
    }
    
    return (
        <TableContainer component={Paper}>
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
                        <TableCell align="center">Desde</TableCell>
                        <TableCell align="center">Hasta</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reportes
                        .filter(reporte => reporte.legajo_empleado == legajo && DateBetweenTwoDates(inicio, fin, reporte.fecha_inicio) && DateBetweenTwoDates(inicio, fin, reporte.fecha_fin))
                        .map((reporte) => (
                            <TableRow
                                key={reporte.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {reporte.fecha_inicio}
                                </TableCell>
                                <TableCell align="center">{reporte.fecha_fin}</TableCell>
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