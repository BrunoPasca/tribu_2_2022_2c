import { useEffect, useState } from "react";
import { ClientesProperties } from "./types";


export default function ClienteSelect() {

    const [clientes, setClientes]: [Array<ClientesProperties> ,any] = useState([])


    useEffect(() => {
      fetch("https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos")
        .then((res) => res.json())
        .then((data) => {
          setClientes(data)
        })
    }, [])
    return (
        <select>
          {clientes.map((cliente) => ( 
              <option  key={cliente.legajo}>{cliente.Nombre} {cliente.Apellido} - Legajo: {cliente.legajo}</option>
          ))}
        </select>
      )
    }