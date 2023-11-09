import express from 'express';
import cors from 'cors'
import routes from './routers/routers.js';

const app = express();
app.use(cors());
app.use(express.json()); 
const port = 3000;
app.use('/', routes);
app.listen(49241, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});
