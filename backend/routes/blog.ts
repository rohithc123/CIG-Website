import express from "express";
import { getBlog, createBlog, deleteBlog } from "./../controller/blog";
import validateToken from "./../services/validate";

const blogRouter: express.Router = express.Router();


blogRouter.get("/blog", , getBlog);
blogRouter.post("/blog",validateToken(), createBlog);
blogRouter.delete("/blog",validateToken(), deleteBlog);

export default blogRouter;
