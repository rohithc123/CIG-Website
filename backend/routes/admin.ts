import express from "express";
import { adminLogin } from "./../controller/admin";

const adminRouter: express.Router = express.Router();

adminRouter.post("/login", adminLogin);

export default adminRouter;
