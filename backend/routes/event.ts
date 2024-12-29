import express from "express";
import { getEvent, createEvent, deleteEvent } from "./../controller/event";
import validateToken from "./../services/validate";

const eventRouter: express.Router = express.Router();

eventRouter.get("/event", getEvent);
eventRouter.post("/event", validateToken(), createEvent);
eventRouter.delete("/event", validateToken(), deleteEvent);

export default eventRouter;
