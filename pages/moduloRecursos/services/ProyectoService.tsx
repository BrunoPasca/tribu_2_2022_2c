const PROYECTOS_REST_API_URL = "http://localhost:8080/proyectos";


export function  getProyectos(){
    return fetch(PROYECTOS_REST_API_URL,{ 
        method: 'get',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            },
            'credentials': 'same-origin'
    })
    .then(res => res.json());        
}

export function getTareasByProyecto(proyecto_id : any){
    return fetch(PROYECTOS_REST_API_URL + "/" + proyecto_id + "/tareas",{ 
        method: 'get',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            },
            'credentials': 'same-origin'
    })
    .then(res => res.json());        
}



