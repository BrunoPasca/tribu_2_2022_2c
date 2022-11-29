import express from "express";
import ticketsRoutes from "./routes/tickets.routes.js";

const app = express();

/**
 * Para levantar el proyecto
 *
npm run dev

 * Para levantar mysql local
mysql -u root -p
*/

app.use(express.json());

app.use("/api", ticketsRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found",
    });
});

app.listen(3500); // Puerto 3500, puede ser otro.
console.log("Server running on port 3500");
