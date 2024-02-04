import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

try {
  await db.authenticate();
  console.log("Conexion exitosa a la base de datos");
} catch (error) {
  console.log(`Error en la conexión a la base de datos:${error}`);
}

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.listen(8000, () => {
  console.log("Server UP running in localhost:8000");
});
