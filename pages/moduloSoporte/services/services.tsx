export function  deleteById(id:any){
    
    return fetch('https://aninfo2c222back-production.up.railway.app/api/tickets/' + id, {
        method: 'DELETE',
      })
}
