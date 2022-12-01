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

export default function TablaPersonas(props: any) {
    const [empleados, setEmpleados] = React.useState([])

    React.useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/employees/")
            .then((res) => res.json())
            .then((data) => {
                setEmpleados(data)
            })
    }, [])



    interface empleado_test {
        legajo: number;
        nombre: string;
        horas_totales: number;
        guardia: number;
        horas_extra: number;
    }

    /* HAY QUE USAR UN ENDPOINT */
    const empleados_test: empleado_test[] = [
        { legajo: 1, nombre: "Bruno", horas_totales: 3, guardia: 5, horas_extra: 4 },
        { legajo: 2, nombre: "Julian", horas_totales: 8, guardia: 0, horas_extra: 0 },
        { legajo: 3, nombre: "Enzo", horas_totales: 4, guardia: 2, horas_extra: 4 },
        { legajo: 4, nombre: "Juan", horas_totales: 2, guardia: 1, horas_extra: 2 },
        { legajo: 5, nombre: "Enzo H.", horas_totales: 3, guardia: 3, horas_extra: 3 },
    ]

    const [rows, setRows] = useState<empleado_test[]>(empleados_test);
    const [searched, setSearched] = useState<string>("");

    const requestSearch = (searchedVal: string) => {
        const filteredRows = empleados_test.filter((row) => {
            return row.nombre.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    function getDataForEmployee(legajo: number) {
        let horas_totales = 0;
        let horas_extra = 0;
        let guardias = 0;

        fetch("https://aninfo2c222back-production.up.railway.app/api/horas/totales/empleado/" + legajo)
            .then((res) => res.json())
            .then((data) => {
                horas_totales = data[0]["horas_totales"]
            })

        fetch("https://aninfo2c222back-production.up.railway.app/api/horas/extra/totales/empleado/" + legajo)
            .then((res) => res.json())
            .then((data) => {
                horas_extra = data[0]["horas_extra"]
            })

        fetch("https://aninfo2c222back-production.up.railway.app/api/guardias/cant/empleado/" + legajo)
            .then((res) => res.json())
            .then((data) => {
                guardias = data[0]["guardias_totales"]
            })
        console.log(horas_totales)
        console.log(horas_extra)
        let salida = {
            "horas_totales": horas_totales,
            "horas_extra": horas_extra,
            "guardias": guardias
        }
        return salida
    }

    return (
        <TableContainer component={Paper} sx={{ borderRadius: "2rem" }}>
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
                align="center"
                fontSize={30}
            >
                Empleados
            </Typography>
            <SearchBar
                placeholder="Buscar por nombre"
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />
            <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Legajo</TableCell>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">Horas Totales</TableCell>
                        <TableCell align="center">Tiempo Guardia</TableCell>
                        <TableCell align="center">Horas Extra</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {empleados.map((empleado) => {
                        let horas = getDataForEmployee(empleado['legajo'])
                        return (
                            <TableRow
                                key={empleado['legajo']}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{empleado['legajo']}</TableCell>
                                <TableCell align="center">{empleado["nombre"]}</TableCell>
                                <TableCell align="center">{horas["horas_totales"]}</TableCell>
                                <TableCell align="center">{horas["guardias"]}</TableCell>
                                <TableCell align="center">{horas["horas_extra"]}</TableCell>
                                <TableCell padding='none'>
                                    <button>Ampliar</button>
                                </TableCell>
                                <TableCell padding='none'>
                                    <button>Generar Reporte</button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}