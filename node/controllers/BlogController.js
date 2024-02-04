import BlogModel from "../models/BlogModel.js";

//Read all
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Read
export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findAll({
      where: { id: req.params.id },
    });
    res.json(blog[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Create
export const createBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.json({ message: "Registro creado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Update
export const updateBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Registro Actualizado Correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Delete
export const deleteBlog = async (req, res) => {
  try {
    await BlogModel.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Registro Eliminado Correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
