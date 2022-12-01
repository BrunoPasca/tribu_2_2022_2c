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
import SearchBar from 'material-ui-search-bar';
import Link from 'next/link';
import { Guardia } from '../../types';
import Header from '../../../header';
import { useRouter } from 'next/router';


export default function TablaAllGuardias(props: any) {

    const router = useRouter();
    const {id} = router.query;

    const [guardias, setGuardias] = React.useState([])
    React.useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/guardias/" + id)

            .then((res) => res.json())
            .then((data) => {
                setGuardias(data)
            })
    }, [])


    /* HAY QUE USAR UN ENDPOINT */
    const reportes = [
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


    const [rows, setRows] = useState(reportes);
    const [searched, setSearched] = useState<string>("");

    const requestSearch = (searchedVal: string) => {
        const filteredRows = reportes.filter((row : any) => {
            return row.fecha_inicio.includes(searchedVal.toLowerCase());
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
            <SearchBar
                placeholder="Buscar por inicio"
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />
            <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Inicio</TableCell>
                        <TableCell align="center">Fin</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((reporte) => (
                        <TableRow
                            key={reporte.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{reporte.id}</TableCell>
                            <TableCell align="center">{reporte.fecha_inicio}</TableCell>
                            <TableCell align="center">{reporte.fecha_fin}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
        
    );
}