const tickets = [
  {   
  titulo: "Arreglar front",
  id: 1,
  severidad: "Critico",
  estado: "Abierto",
  descripcion:"lorem ipsum" ,
  datosCliente: "Diego",
  idCliente: 3,
  medioContacto: "email",
  datoContacto: "julian@gmail",
  nombreProducto: "fasfaf",
  versionProducto: "fasfsafsa",
  fechaEmision: "fecha efassa",
  fechaResolucion:"fdafasfsa",

  },
  {   
    titulo: "Hacer sistema de tickets",
    id: 2,
    severidad: "Critico",
    estado: "En analisis",
    descripcion:"lorem ipsum" ,
    datosCliente: "Roberto",
    idCliente: 3,
    medioContacto: "email",
    datoContacto: "julian@gmail",
    nombreProducto: "fasfaf",
    versionProducto: "fasfsafsa",
    fechaEmision: "fecha efassa",
    fechaResolucion:"fdafasfsa",
  },
  {   
  titulo: "Vacaciones",
  id: 3,
  severidad: "Critico",
  estado: "Abierto",
  descripcion:"lorem ipsum" ,
  datosCliente: "Dasdasdas",
  idCliente: 3,
  medioContacto: "email",
  datoContacto: "julian@gmail",
  nombreProducto: "fasfaf",
  versionProducto: "fasfsafsa",
  fechaEmision: "fecha efassa",
  fechaResolucion:"fdafasfsa",
  },
  {   
    titulo: "Contar hasta 43",
    id: 4,
    severidad: "Critico",
    estado: "Resuelto",
    descripcion:"lorem ipsum" ,
    datosCliente: "Quien",
    idCliente: 3,
    medioContacto: "email",
    datoContacto: "julian@gmail",
    nombreProducto: "fasfaf",
    versionProducto: "fasfsafsa",
    fechaEmision: "fecha efassa",
    fechaResolucion:"fdafasfsa",

  },

  {   
    titulo: "me gusta mucho escribir un titulo largo asi no entra y rompe todo",
    id: 5,
    severidad: "Critico",
    estado: "Cancelado",
    descripcion:"lorem ipsum" ,
    datosCliente: "Juan",
    idCliente: 3,
    medioContacto: "email",
    datoContacto: "julian@gmail",
    nombreProducto: "fasfaf",
    versionProducto: "fasfsafsa",
    fechaEmision: "fecha efassa",
    fechaResolucion:"fdafasfsa",

  },
  {   
    titulo: "Aprender next",
    id: 6,
    severidad: "Critico",
    estado: "Derivado",
    descripcion:"lorem ipsum" ,
    datosCliente: "Alvarez",
    idCliente: 3,
    medioContacto: "email",
    datoContacto: "julian@gmail",
    nombreProducto: "fasfaf",
    versionProducto: "fasfsafsa",
    fechaEmision: "fecha efassa",
    fechaResolucion:"fdafasfsa",

  },
  {   
    titulo: "Vamos river",
    id: 7,
    severidad: "Critico",
    estado: "En analisis",
    descripcion:"lorem ipsum" ,
    datosCliente: "Carlos",
    idCliente: 3,
    medioContacto: "email",
    datoContacto: "julian@gmail", 
    nombreProducto: "fasfaf",
    versionProducto: "fasfsafsa",
    fechaEmision: "fecha efassa",
    fechaResolucion:"fdafasfsa",

  },
]

export default function BotonFiltro({searchedWord}: {searchedWord:string}) {
 
    return(

      <button> Filter {searchedWord}
      </button>


    )
  }
