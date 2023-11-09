import { createConnection } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const db = createConnection({
    host: 'monorail.proxy.rlwy.net',
    user: 'root',
    port:49241,
    password: 'fh1daA2had25F1d3gcdEB5CeBbHB5gB-',
    database: 'railway',
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err.message);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

export default db;