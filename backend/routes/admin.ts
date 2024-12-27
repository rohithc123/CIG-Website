import express from "express";
import { adminLogin, createAdmin } from "./../controller/admin";

const adminRouter: express.Router = express.Router();

//TODO remove this route this is just for testing purposes
adminRouter.post("/create", createAdmin);
adminRouter.post("/login", adminLogin);

export default adminRouter;
