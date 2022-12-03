import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { Tarea } from '../../types';
import Header from '../../../header';
import { useRouter } from 'next/router';

export default function TablaAllHoras(props: any) {

    const router = useRouter();
    const { id } = router.query;


    const [horas, setHoras]: [Array<Tarea>, any] = useState([])

    React.useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/horas/" + id)

            .then((res) => res.json())
            .then((data) => {
                setHoras(data)
            })
    }, [])

    /* HAY QUE USAR UN ENDPOINT */
    const reportes = [
        // Formato fecha dd/MM/yyyy
        {
            id: "1",
            legajo_empleado: "1",
            id_tarea: "3",
            tarea: 'Fix',
            cant_horas: "5",
            fecha: "7/12/2022",
            estado: "abierto",
            extra: "0"
        },
        {
            id: "2",
            legajo_empleado: "3",
            id_tarea: "4",
            tarea: 'Testing',
            cant_horas: "2",
            fecha: "10/10/2022",
            estado: "abierto",
            extra: "1"
        },
        {
            id: "4",
            legajo_empleado: "22",
            id_tarea: "5",
            tarea: 'Prototipado',
            cant_horas: "2",
            fecha: "9/12/2022",
            estado: "abierto",
            extra: "0"
        }
    ]

    const [rows, setRows] = useState(reportes);
    const [searched, setSearched] = useState<string>("");

    const requestSearch = (searchedVal: string) => {
        const filteredRows = reportes.filter((row: any) => {
            return row.id_tarea.includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    return (
        <div>
            <Header></Header>
            <TableContainer component={Paper} sx={{ borderRadius: "2rem" }}>
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                    align="center"
                    fontSize={30}
                >
                    Tareas
                </Typography>
                {/* 
            <SearchBar
                placeholder="Buscar por nombre"
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />*/}
                <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">ID Tarea</TableCell>
                            <TableCell align="center">Fecha</TableCell>
                            <TableCell align="center">Horas</TableCell>
                            <TableCell align="center">Fuera de Horario</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((reporte) => (
                            <TableRow
                                key={reporte.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{reporte.id}</TableCell>
                                <TableCell align="center">{reporte.id_tarea}</TableCell>
                                <TableCell align="center">{reporte.fecha}</TableCell>
                                <TableCell align="center">{reporte.cant_horas}</TableCell>
                                <TableCell align="center">{Number(reporte.extra) == 1 ? "Sí" : "No"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}