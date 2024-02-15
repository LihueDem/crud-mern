import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js";

const app = express();
//Habilita el uso de CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde diferentes dominios:
app.use(cors());
//Habilita el uso de JSON en las solicitudes y respuestas:
app.use(express.json());
//Define las rutas de la aplicación utilizando el módulo blogRoutes:
app.use("/blogs", blogRoutes);

try {
  await db.authenticate();
  console.log("Conexion exitosa a la base de datos");
} catch (error) {
  console.log(`Error en la conexión a la base de datos:${error}`);
}

//Define un endpoint raíz ("/") que responde con un mensaje "hola mundo"
app.get("/", (req, res) => {
  res.send("hola mundo");
});

//Inicia el servidor en el puerto 8000 y muestra un mensaje en la consola cuando el servidor esté activo
app.listen(8000, () => {
  console.log("Server UP running in localhost:8000");
});
