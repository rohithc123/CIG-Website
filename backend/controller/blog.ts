import Blog from "./../model/blog";
import dotenv from "dotenv";
import { Request, Response } from "express";

export const getBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const info = await Blog.find();
    res.send(info);
  } catch (error) {
    res.status(500).send("An error occurred while retrieving the blog");
  }
};

export const createBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, domain, description } = req.body;

    // Check for existing blog member with the same name, domain, or description
    const existingBlog = await Blog.findOne({ name: name });

    if (existingBlog) {
      res.status(400).send("A blog member with same name exists");
      return;
    }

    const blog = new Blog({ name, domain, description });
    await blog.save();
    res.send("Blog created successfully");
  } catch (error) {
    res.status(500).send(`An error occurred while creating the blog: ${error}`);
  }
};

export const deleteBlog = async function (
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.body;
    const blog = await Blog.findOneAndDelete({ _id: id });
    if (!blog) {
      res.status(404).send("Blog member not found with given ID");
      return;
    }
    res.send("Blog deleted successfully");
  } catch (error) {
    res.status(500).send(`An error occurred while deleting the blog: ${error}`);
  }
};
