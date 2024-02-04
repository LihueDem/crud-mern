import { Sequelize } from "sequelize";

//Crea la cadena de conexion. Parametros 'db_name', 'usuario', 'password', 'host', 'dialect'
const db = new Sequelize("crud_mern", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
