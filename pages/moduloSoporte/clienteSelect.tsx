import { useState } from "react";
import { ClientesProperties } from "./types";


export default function ClienteSelect() {

    const [clientes, setClientes]: [Array<ClientesProperties> ,any] = useState([])

    fetch('https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos')
    .then(result => result.json())
    .then((output) => {
      
      setClientes(output);
      for(const element of output){
        console.log(element)
        clientes.push(element)
      }

      console.log(clientes)


    }).catch(err => console.error(err));


    return (
        <select>
          {clientes.map((cliente) => ( 
            <option>{cliente.Nombre}</option>
          ))}
        </select>
      )
    }