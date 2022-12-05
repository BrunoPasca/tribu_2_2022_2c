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
import { useInterval } from '../../components/soporte/utils';

export default function MuiTable(props: any) {
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

    const [guardias, setGuardias] = React.useState([]);

    /* HAY QUE USAR UN ENDPOINT */
    const guardias_test = [
        // Formato fecha dd/MM/yyyy
        {
            id: "1",
            legajo_empleado: "2",
            fecha_inicio: "7/12/2022",
            fecha_fin: "9/12/2022"
        },
        {
            id: "2",
            legajo_empleado: "4",
            fecha_inicio: "15/11/2022",
            fecha_fin: "20/11/2022"
        }
    ]

    React.useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/guardias")

            .then((res) => res.json())
            .then((data) => {
                setGuardias(data)
            })
    }, [])

    useInterval(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/guardias")
            .then((res) => res.json())
            .then((data) => {
                setGuardias(data)
            })
    }, 1500)


    // Formatea 'dd/mm/yyyy' a 'yyyy-mm-dd' (formato reconocido por Date)
    function modificarFormatoFecha(date: string) {
        const [day, month, year] = date.split('/');
        // @ts-ignore
        return new Date(+year, month - 1, +day);
    }

    function DateBetweenTwoDates(fromDate: string, toDate: string, givenDate: string) {
        const start = modificarFormatoFecha(fromDate);
        const end = modificarFormatoFecha(toDate);
        const date = new Date(givenDate);

        return (start <= date && date <= end);
    }

    return (
        <TableContainer component={Paper} sx={{ borderRadius: "2rem" }}>
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
                        <TableCell align="center">Desde</TableCell>
                        <TableCell align="center">Hasta</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {guardias
                        .filter(guardia => guardia["legajo_empleado"] === legajo && DateBetweenTwoDates(inicio, fin, guardia["fecha_inicio"]) && DateBetweenTwoDates(inicio, fin, guardia["fecha_fin"]))
                        .map((guardia) => (
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
                                    <BorrarGuardiaModal isOpen={openDelete} setOpen={setOpenDelete} idReporte={guardia["id"]}></BorrarGuardiaModal>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}