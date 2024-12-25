import express from "express";
import { getTeam, createTeam, deleteTeam } from "./../controller/team";

const teamRouter: express.Router = express.Router();

teamRouter.get("/team", getTeam);
teamRouter.post("/team", createTeam);
teamRouter.delete("/team", deleteTeam);

export default teamRouter;
