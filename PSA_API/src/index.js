import express from "express";
import ticketsRoutes from './routes/tickets.routes.js';

const app = express();

/**
 * Para levantar el proyecto
 *
npm run dev

 * Para levantar mysql local
mysql -u root -p
*/

app.use(express.json());

app.use('/api',ticketsRoutes);

app.listen(3500); // Puerto 3500, puede ser otro.
