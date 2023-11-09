import express from 'express';
import jwt from 'jsonwebtoken'; 
import cors from 'cors'
import  {createConnection}  from 'mysql2';
import DateEntity from './utils/form/date_entity.js';
import RandomIdGenerator from './utils/form/ramdon_generator.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 


const port = 3000;

const idGenerator = new RandomIdGenerator(1, 100000000);



console.log(process.env.HOST_DB)
console.log(process.env.USER_DB)
console.log(process.env.PASSWORD_DB)
console.log(process.env.NAME_DB)
console.log(process.env.PORT_DB)

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

app.post('/login', (req, res) => {
    console.table(req.body);
    const { Username, password } = req.body;
    const query = 'SELECT * FROM Users WHERE Username = ? AND password = ?';
    try {
        db.query(query, [Username, password], (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error en la consulta a la base de datos' });
            } else {
                if (results.length === 1) {
                    const userCurrent = results[0];
                    const token = jwt.sign({ userCurrent: userCurrent.Username, id: userCurrent.id }, 'clave_secreta', { expiresIn: '1h' });
                    const updateTokenQuery = 'UPDATE Users SET token = ? WHERE id = ?';
                    db.query(updateTokenQuery, [token, userCurrent.id], (updateError, updateResults) => {
                if (updateError) {
                    console.error(updateError);
                    res.status(500).json({ message: 'Error al actualizar el token en la base de datos' });
                } else {
                    userCurrent.token = token;
                    res.status(200).json({ message: 'Inicio de sesión exitoso',userCurrent: userCurrent });
                }
            });  
            } else {
                    res.status(401).json({ message: 'Credenciales inválidas' });
                }
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

app.post('/createPerson', (req, res) => {
    console.table(req.body);
    const { name, lastname, cc, email, type_cc} = req.body;
   const name_lastname =  name + ' ' + lastname;
   const number_type_cc =  type_cc + ' ' + cc;
   const id = idGenerator.generateRandomId();
   const dateEntity = new DateEntity(); 
    const date_create = dateEntity.currentDate;
   
    const query = 'INSERT INTO person (id, name, lastname, cc, email, type_cc, date_create, number_type_cc, store_create, lastname_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    
    try {
        db.query(query, [id, name, lastname, cc, email, type_cc, date_create, number_type_cc, 1, name_lastname], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error en la inserción de persona' });
            } else {
                res.status(201).json({ message: 'Persona creada con éxito' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});



app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});
