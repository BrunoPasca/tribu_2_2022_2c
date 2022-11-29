import { createPool } from "mysql2/promise";

export const pooldb = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'psa_aninfo'
})