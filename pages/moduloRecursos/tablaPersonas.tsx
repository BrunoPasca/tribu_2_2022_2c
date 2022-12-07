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
import CircularProgress from '@mui/material/CircularProgress';


export default function TablaPersonas(props: any) {
    const [empleados, setEmpleados] = React.useState<any>([])
    const [horas_totales, setHorasTotales] = React.useState<any>({})
    const [horas_extra, setHorasExtra] = React.useState<any>({})
    const [guardias_totales, setGuardias] = React.useState<any>({})
    const [isLoadgin, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        fetch("https://aninfo2c222back-production.up.railway.app/api/recursos_ext")
            .then((res) => res.json())
            .then((data) => {
                setEmpleados(data)
                setRows(data)
            })
    }, [])


    React.useEffect(() => {

        empleados.forEach((empleado: any) => {
            horas_totales[empleado['legajo']] = 0
            horas_extra[empleado['legajo']] = 0
            guardias_totales[empleado['legajo']] = 0
            fetch("https://aninfo2c222back-production.up.railway.app/api/horas/totales/empleado/" + empleado['legajo'])
                .then((res) => res.json())
                .then((data) => {
                    let horas = data[0]["horas_totales"] ? data[0]["horas_totales"] : "0"
                    if (horas_totales[empleado['legajo']] === undefined) {
                        horas_totales[empleado['legajo']] = parseInt(horas)
                        return
                    }
                    horas_totales[empleado['legajo']] = horas_totales[empleado['legajo']] + parseInt(horas)
                })
            fetch("https://aninfo2c222back-production.up.railway.app/api/horas/extra/totales/empleado/" + empleado['legajo'])
                .then((res) => res.json())
                .then((data) => {
                    let horas = data[0]["horas_extra"] ? data[0]["horas_extra"] : "0"
                    if (horas_extra[empleado['legajo']] === undefined) {
                        horas_extra[empleado['legajo']] = parseInt(horas)
                        return
                    }
                    horas_extra[empleado['legajo']] = horas_extra[empleado['legajo']] + parseInt(horas)
                })
            fetch("https://aninfo2c222back-production.up.railway.app/api/guardias/cant/empleado/" + empleado['legajo'])
                .then((res) => res.json())
                .then((data) => {
                    let guardias = data[0]["guardias_totales"] ? data[0]["guardias_totales"] : "0"
                    if (guardias_totales[empleado['legajo']] === undefined) {
                        guardias_totales[empleado['legajo']] = parseInt(guardias)
                        return
                    }
                    guardias_totales[empleado['legajo']] = guardias_totales[empleado['legajo']] + parseInt(guardias)
                })
            setTimeout(() => { setIsLoading(false) }, 1000)
        });

    }, [empleados])

    const [rows, setRows] = useState<any>([]);
    const [searched, setSearched] = useState<string>("");

    const requestSearch = (searchedVal: string) => {
        const filteredRows = empleados.filter((row: any) => {
            return row["nombre"].toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };


    function getDataForEmployee(legajo: number) {
        let horas_totales = async () => {
            fetch("https://aninfo2c222back-production.up.railway.app/api/horas/totales/empleado/" + legajo)
                .then((res) => res.json())
                .then((data) => {
                    horas_totales = data[0]["horas_totales"]
                })

        };
        let horas_extra = 0;
        let guardias = 0;


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
        let salida = {
            "horas_totales": horas_totales,
            "horas_extra": horas_extra,
            "guardias": guardias
        }
        return salida
    }

    return (
        <>
            {isLoadgin ? <CircularProgress /> :
                <TableContainer component={Paper} sx={{ borderRadius: "2rem" }}>
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                        align="center"
                        fontSize={30}
                    >
                        Recursos
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
                            {rows.map((empleado: any) => {
                                return (
                                    <TableRow
                                        key={empleado['legajo']}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{empleado['legajo']}</TableCell>
                                        <TableCell align="center">{empleado["Nombre"]} {empleado["Apellido"]}</TableCell>
                                        <TableCell align="center">{horas_totales[empleado['legajo']]}</TableCell>
                                        <TableCell align="center">{guardias_totales[empleado['legajo']]}</TableCell>
                                        <TableCell align="center">{horas_extra[empleado['legajo']]}</TableCell>
                                        <TableCell align="center">
                                            <Link href={"./reportesPorEmpleado/horas/" + empleado['legajo']}> <button>Ampliar</button></Link>
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
            }

        </>
    );
}