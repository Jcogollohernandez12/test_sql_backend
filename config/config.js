import { createConnection } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const db = createConnection({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    port: parseInt(process.env.PORT_DB, 10),
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
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