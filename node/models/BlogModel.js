//Un modelo es una abstraccion que representa una tabla en la base de datos.
//En sequelize es una clase que extiende el modelo

import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BlogModel = db.define("blogs", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default BlogModel;
