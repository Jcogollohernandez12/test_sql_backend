import express from 'express';
import cors from 'cors'
import { createServer } from 'http';
import dotenv from 'dotenv';
dotenv.config();
import routes from './routers/routers.js';

const app = express();
app.use(cors());
app.use(express.json()); 

const port = process.env.PORT_DB || 3000;
app.use('/', routes);
//app.listen(port, () => {
//    console.log(`server running in the port local ${port}`);
//});
const server = createServer(app);
server.listen(port, () => {console.log(`server running in the port dev${port}`);});

export default server;
