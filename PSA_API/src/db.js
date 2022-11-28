import { createPool } from "mysql2/promise";

export const pooldb = createPool({
    host: 'localhost',
    user: 'root',
    password: '', // escribir su contraseña
    port: 3306,
    database: 'psa_aninfo'
})