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
import { IconButton, Typography } from '@mui/material';
import BorrarHoraModal from './borrarHoraModal';
import Edit from '@mui/icons-material/Edit';
import EditarHoraModal from './editarHoraModal';
import styles from '../../styles/recursos.module.css'

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
            legajo_empleado: "1",
            id_tarea: "3",
            cant_horas:"5",
            fecha: "11/13/2022",
            estado: "abierto",
        },
        {
            id: "2",
            legajo_empleado: "3",
            id_tarea: "4",
            cant_horas:"2",
            fecha: "11/30/2022",
            estado: "abierto",
        }
    ]

    var getvalidDate = function(d : any){ return new Date(d) }
    function DateBetweenTwoDates(fromDate : any, toDate : any, givenDate : any){
        console.log("inicio", fromDate)
        console.log("fin", toDate)
        console.log("given", givenDate)
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
                Tareas Cargadas <br></br> {props.fechaInicio} - {props.fechaFin}
            </Typography>
            <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">TareaId</TableCell>
                        <TableCell align="center">Fecha</TableCell>
                        <TableCell align="center">Horas</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reportes.filter(reporte => reporte.legajo_empleado == legajo && DateBetweenTwoDates(inicio, fin, reporte.fecha)).map((reporte) => (
                        <TableRow
                            key={reporte.id_tarea}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {reporte.id_tarea}
                            </TableCell>
                            <TableCell align="center">{reporte.fecha}</TableCell>
                            <TableCell align="center">{reporte.cant_horas}</TableCell>
                            <TableCell padding="none" align="right">
                                <IconButton onClick={handleOpenDelete}><DeleteIcon/></IconButton>
                                <BorrarHoraModal isOpen = {openDelete} setOpen={setOpenDelete} reporteId={reporte.id}></BorrarHoraModal>
                            </TableCell>
                            <TableCell padding="none">
                                <IconButton onClick={handleOpenEdit}><EditIcon/></IconButton>
                                <EditarHoraModal isOpen = {openEdit} setOpen={setOpenEdit} reporteId={reporte.id}
                                                 tareaId={reporte.id_tarea} cantHoras={reporte.cant_horas}>
                                </EditarHoraModal>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}