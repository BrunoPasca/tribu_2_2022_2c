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
import { useInterval } from '../moduloSoporte/utils';

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

    const [faltas, setFaltas] = React.useState([])
    /* HAY QUE USAR UN ENDPOINT */
    const faltas_test = [
        // Formato fecha dd/MM/yyyy
        {
            id: "1",
            legajo_empleado: "2",
            fecha: "6/12/2022",
            justificante: "tenia covid"
        },
        {
            id: "2",
            legajo_empleado: "3",
            fecha: "9/12/2022",
            justificante: "habia un piquete"
        }
    ]

    React.useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/faltas")

            .then((res) => res.json())
            .then((data) => {
                setFaltas(data)
            })
    }, [])

    
    useInterval(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/faltas")
          .then((res) => res.json())
          .then((data) => {
            setFaltas(data)
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
        const date = modificarFormatoFecha(givenDate);

        return (start <= date && date <= end);
    }


    return (
        <TableContainer component={Paper} sx={{ borderRadius: "2rem", width: "600px" }}>
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
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Fecha</TableCell>
                        <TableCell align="center">Justificante</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {faltas.filter(falta => DateBetweenTwoDates(inicio, fin, falta["fecha"])).map((falta) => (
                        <TableRow
                            key={falta["legajo"]}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {falta["legajo"]}
                            </TableCell>
                            <TableCell align="center">{falta["fecha"]}</TableCell>
                            <TableCell align="center">{falta["justificante"]}</TableCell>
                            <TableCell padding='none'>
                                <IconButton onClick={handleOpenDelete}>
                                    <DeleteIcon />
                                </IconButton>
                                <BorrarFaltaModal isOpen={openDelete} setOpen={setOpenDelete} idReporte={falta['id']}></BorrarFaltaModal>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}