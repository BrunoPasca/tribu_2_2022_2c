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
import { Falta } from '../../../../components/recursos/types';
import Header from '../../../header';
import { useRouter } from 'next/router';


export default function TablaAllFaltas(props: any) {

    const router = useRouter();
    const { id } = router.query;



    const [faltas, setFaltas] = React.useState([])
    React.useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/faltas/" + id)

            .then((res) => res.json())
            .then((data) => {
                setFaltas(data)
            })
    }, [])


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

    const [rows, setRows] = useState(faltas_test);
    const [searched, setSearched] = useState<string>("");

    const requestSearch = (searchedVal: string) => {
        const filteredRows = faltas_test.filter((row: any) => {
            return (row.fecha).includes(searchedVal.toLowerCase());
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
                    Faltas
                </Typography>
                {/* 
            <SearchBar
                placeholder="Buscar por fecha"
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />*/}
                <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Fecha</TableCell>
                            <TableCell align="center">Justificante</TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((reporte) => (
                            <TableRow
                                key={reporte.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{reporte.id}</TableCell>
                                <TableCell align="center">{reporte.fecha}</TableCell>
                                <TableCell align="center">{reporte.justificante}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}