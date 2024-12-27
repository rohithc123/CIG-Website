import express from "express";
import { getTeam, createTeam, deleteTeam } from "./../controller/team";
import validateToken from "./../services/validate";

const teamRouter: express.Router = express.Router();

teamRouter.get("/team", getTeam);
teamRouter.post("/team", validateToken(), createTeam);
teamRouter.delete("/team", validateToken(), deleteTeam);

export default teamRouter;
