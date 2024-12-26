import express from "express";
import { getBlog, createBlog, deleteBlog } from "./../controller/blog";

const blogRouter: express.Router = express.Router();

blogRouter.get("/blog", getBlog);
blogRouter.post("/blog", createBlog);
blogRouter.delete("/blog", deleteBlog);

export default blogRouter;
